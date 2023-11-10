import Image from 'next/image';
import hands from 'public/hands2.svg';
import { useContext } from 'react';
import { LanguageContext } from '@/utils/contexts';
import { MisionAndVision } from '@/utils/staticTexts';
import { Languages } from '@/utils/types';

const MisionYVision = () => {
  const lang = useContext(LanguageContext) as Languages;
  return (
    <div className="flex flex-col items-center">
      <h2 className="theme-title">{MisionAndVision[lang].title}</h2>
      <div className="flex gap-8 w-10/12 flex-col xl:flex-row items-center">
        <Image src={hands} alt="hands-praying" className="w-full max-w-sm xl:w-1/3 border" />
        <div className="w-full xl:w-2/3 flex flex-col gap-8 justify-center">
          <p>
            <span>{MisionAndVision[lang].texts[0]}</span>
            <span className="keyword">{MisionAndVision[lang].texts[1]}</span>
            <span>{MisionAndVision[lang].texts[2]}</span>
          </p>
          <p>{MisionAndVision[lang].texts[3]}</p>
        </div>
      </div>
    </div>
  );
};

export default MisionYVision;
