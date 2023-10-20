import login from "@/assets/app-icon/login.svg";
import eye_outline from "@/assets/app-icon/eye-outline.svg";
import eye_outline_off from "@/assets/app-icon/eye-outline-off.svg";
import check from "@/assets/app-icon/check.svg";
import arrow_left from "@/assets/app-icon/arrow-left.svg";

import Image from "next/image";

export const LoginIcon = () => (
  <Image priority src={login.src} alt="Login Icon" height={36} width={36} />
);

export const EyeOutlineIcon = () => (
  <Image
    priority
    src={eye_outline.src}
    alt="Eye Outlined Icon"
    height={24}
    width={24}
  />
);

export const EyeOutlineOffIcon = () => (
  <Image
    priority
    src={eye_outline_off.src}
    alt="Eye Off Outlined Icon"
    height={24}
    width={24}
  />
);

export const CheckIcon = () => (
  <Image priority src={check.src} alt="Check Icon" height={8} width={8} />
);

export const ArrowLeft = () => (
  <Image
    priority
    src={arrow_left.src}
    alt="Arrow Left Icon"
    height={32}
    width={32}
  />
);
