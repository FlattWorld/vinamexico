import Image from 'next/image';
import hands from 'public/hands2.svg';
import { useContext } from 'react';
import { LanguageContext } from 'utils/contexts';
import { MisionAndVision } from 'utils/staticTexts';

const MisionYVision = () => {
  const lang: 'EN' | 'ES' = useContext(LanguageContext) as 'EN' | 'ES';
  return (
    <div className="flex flex-col items-center">
      <h2 className="theme-title">Nuestra visión y misión</h2>
      <div className="flex gap-8 w-10/12">
        <Image src={hands} alt="hands-praying" className="w-1/3 border" />
        <div className="w-2/3 flex flex-col gap-8 justify-center">
          <p>
            <span>{MisionAndVision[lang][0]}</span>
            <span className="keyword">{MisionAndVision[lang][1]}</span>
            <span>{MisionAndVision[lang][2]}</span>
          </p>
          <p>{MisionAndVision[lang][3]}</p>
        </div>
      </div>
    </div>
  );
};

export default MisionYVision;
