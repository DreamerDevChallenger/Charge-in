import Image from "next/legacy/image";
import logo from "@/assets/logo.svg";

interface PropLogo {
  width: number;
  height: number;
}

export default function Logo({ width, height }: PropLogo) {
  return (
    <Image
      src={logo}
      alt={`Charge-in logo`}
      width={width}
      height={height}
      priority
    />
  );
}
