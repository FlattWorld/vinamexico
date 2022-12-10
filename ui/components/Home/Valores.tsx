import Image from 'next/image';
import hands2 from 'public/hands2.svg';
import { useContext } from 'react';
import { LanguageContext } from 'utils/contexts';
import { valores } from 'utils/staticTexts';

const Valores = () => {
  const lang: 'EN' | 'ES' = useContext(LanguageContext) as 'EN' | 'ES';
  return (
    <div className="flex flex-col items-center">
      <h2 className="theme-title">Valores de la Viña</h2>
      <div className="flex flex-row-reverse gap-8 w-10/12">
        <Image src={hands2} alt="hands-praying" className="w-1/3 border" />
        <div className="w-2/3 flex flex-col gap-8 justify-center text-vina-yellow-medium">
          <h3>
            {valores[lang].title[0]}
            <span className="keyword">{valores[lang].title[1]}</span>
            {valores[lang].title[2]}
          </h3>
          <ul className="flex flex-col gap-4 list-disc">
            {valores[lang].texts.map(([value, description]) => (
              <li key={value} className="">
                <span className="keyword">{value}</span>
                {description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Valores;
