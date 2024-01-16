"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { churchService } from '@/services/churchesService';
import { Button } from '@/components';
import { SIN_DEFINIR } from '@/utils/constants';
import { Church } from '@/utils/types';

const renderChurchList = (churches: Church[]) =>
  churches.map((church) => (
    <li
      key={church.name + church.pastor.join(',')}
      className="p-0.5 rounded-lg bg-gradient-to-tr from-emerald-500 to-indigo-600 max-w-sm"
    >
      <Link
        href={church.url || ''}
        className="block bg-white rounded-lg p-4 h-full cursor-pointer w-full
    hover:bg-gradient-to-tr hover:from-emerald-500 hover:to-indigo-600 text-vina-blue-dark hover:text-white text-sm md:text-base"
      >
        <h3 className="font-bold lg:text-lg text-center mb-2 lg:mb-4">
          {church.name}
        </h3>
        <p>- {church.address}</p>
        <p>
          -{' '}
          {`Pastor${church.pastor.length > 1 ? 'es' : ''}: ${church.pastor.join(
            ', '
          )}`}
        </p>
        <p>- {`Teléfono: ${church?.phone?.join(',') || ''}`}</p>
        <p>- {`Email: ${church?.email?.join(',') || ''}`}</p>
        <p>- Web: {church.url}</p>
      </Link>
    </li>
  ));

const EncuentraTuIglesia = () => {
  const [churchList, setChurchList] = useState([] as Church[]);
  const [cityList, setCityList] = useState<{ [key: string]: Church[] }>({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await churchService.getAll();
      setChurchList(result.data);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (churchList.length > 0) {
      setIsError(false);
      const churchByCities: { [key: string]: Church[] } = churchList.reduce(
        (list: { [key: string]: Church[] }, church) => {
          const city = church.city;
          if (city) list[city] = [...(list[city] || []), church];
          else list[SIN_DEFINIR] = [...(list[SIN_DEFINIR] || []), church];
          return list;
        },
        {}
      );
      setCityList(churchByCities);
    }
  }, [churchList]);

  if (isError)
    return (
      <div className="w-full flex justify-center items-center flex-col py-16 min-h-screen">
        <h2>No se pudieron recuperar las iglesias</h2>
        <Button
          onClick={fetchData}
          className="mt-2 flex justify-center gap-2 items-center"
          disabled={isLoading}
        >
          {isLoading && (
            <div className="animate-spin w-4 h-4 rounded-full relative">
              <div className="absolute h-4 w-0.5 bg-black left-1/2 -translate-x-1/2"></div>
              <div className="absolute h-0.5 w-3 bg-black left-1/2 -translate-x-1/2 top-1"></div>
            </div>
          )}
          {isLoading ? 'Cargando' : 'Reintentar'}
        </Button>
      </div>
    );

  return (
    <div
      className="w-full flex justify-start items-center flex-col py-4 lg:py-16 lg:px-0 px-4
       bg-vina-yellow-medium text-vina-purple-dark dark:bg-vina-blue-dark dark:text-vina-yellow-dark"
    >
      <h1 className="text-center lg:text-3xl">
        Encuentra la Viña más cercana a tu ciudad
      </h1>
      <ul className="max-w-7xl gap-8 flex flex-wrap justify-center">
        {Object.entries(cityList).map(([city, churches]) => (
          <li key={city} className="">
            <div>
              <h2 className="lg:text-xl font-bold mb-2">{city}</h2>
              <ul className="flex flex-wrap gap-4 justify-center">
                {renderChurchList(churches)}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EncuentraTuIglesia;
