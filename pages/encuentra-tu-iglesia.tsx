import Link from 'next/link';
import { useEffect, useState } from 'react';
import { churchService } from 'services/churchesService';
import { SIN_DEFINIR } from 'utils/constants';
import { Church } from 'utils/types';

export const renderChurchList = (churches: Church[]) =>
  churches.map((church) => (
    <li
      key={church.name}
      className="p-px rounded-lg bg-gradient-to-tr from-emerald-500 to-indigo-600 max-w-sm"
    >
      <Link
        href={church.url || ''}
        className="block bg-white rounded-lg p-4 h-full cursor-pointer w-full
    hover:bg-gradient-to-tr hover:from-emerald-500 hover:to-indigo-600 text-vina-blue-dark hover:text-white"
      >
        <h3 className="font-bold text-lg text-center mb-4">{church.name}</h3>
        <p>{church.address}</p>
        <p>{`Pastor${
          church.pastor.length > 1 ? 'es' : ''
        }: ${church.pastor.join(', ')}`}</p>
        <p>Web: {church.url}</p>
      </Link>
    </li>
  ));

const EncuentraTuIglesia = () => {
  const [churchList, setChurchList] = useState([] as Church[]);
  const [cityList, setCityList] = useState<{ [key: string]: Church[] }>({});

  const fetchData = async () => {
    try {
      const result = await churchService.getAll();
      setChurchList(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (churchList.length > 0) {
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

  return (
    <div
      className="w-full flex justify-start items-center flex-col py-16
       bg-vina-yellow-medium text-vina-purple-dark dark:bg-vina-blue-dark dark:text-vina-yellow-dark"
    >
      <h1 className="text-center text-3xl">
        Encuentra la Viña más cercana a tu ciudad
      </h1>
      <ul className="w-full max-w-7xl gap-8 flex flex-wrap">
        {Object.entries(cityList).map(([city, churches]) => (
          <li key={city} className="">
            <div>
              <h2 className="text-xl font-bold mb-2">{city}</h2>
              <ul className="flex flex-wrap gap-4">
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
