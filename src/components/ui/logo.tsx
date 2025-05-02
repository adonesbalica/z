import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  size: number;
};

export const Logo = ({ size }: LogoProps) => {
  return (
    <Link href="/">
      <Image
        src={"/logo.svg"}
        alt="z"
        width={size}
        height={size}
        quality={100}
      />
    </Link>
  );
};
