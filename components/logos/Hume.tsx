import type { FC, ImgHTMLAttributes } from "react";

export type WasprosLogoProps = ImgHTMLAttributes<HTMLImageElement>;

const WasprosLogo: FC<WasprosLogoProps> = (props) => {
  return (
    <img
      src="https://envs.sh/YTD.jpg"
      alt="Waspros Logo"
      width="106"
      height="25"
      {...props}
    />
  );
};

export default WasprosLogo;
