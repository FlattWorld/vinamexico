import Image from 'next/image';
import hands2 from 'public/hands2.svg';
import { useContext } from 'react';
import { LanguageContext } from '@/utils/contexts';
import { valores } from '@/utils/staticTexts';
import { Languages } from '@/utils/types';

const Valores = () => {
  const lang = useContext(LanguageContext) as Languages;
  return (
    <div className="flex flex-col items-center">
      <h2 className="theme-title">{valores[lang].title}</h2>
      <div className="flex flex-col-reverse xl:flex-row-reverse gap-8 w-10/12 items-center">
        <Image src={hands2} alt="hands-praying" className="w-full max-w-sm xl:w-1/3 border" />
        <div className="w-full xl:w-2/3 flex flex-col gap-8 justify-center dark:text-vina-yellow-medium">
          <h3>
            {valores[lang].p[0]}
            <span className="keyword">{valores[lang].p[1]}</span>
            {valores[lang].p[2]}
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
