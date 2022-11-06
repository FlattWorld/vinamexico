import Image from 'next/image';
import Link from 'next/link';
import vinalogoDark from 'public/vinalogo-dark.svg';
import vinalogo from 'public/vinalogo.svg';

const LogoHeader = ({ theme }: { theme: string }) => (
  <Link href="/" className="flex items-center gap-1">
    <span className="font-bold">Viña</span>
    {theme === 'dark' ? (
      <Image src={vinalogo} alt="logo-dark" className="w-10 h-10" />
    ) : (
      <Image src={vinalogoDark} alt="logo" className="w-10 h-10" />
    )}
    <span>México</span>
  </Link>
);

export default LogoHeader;
