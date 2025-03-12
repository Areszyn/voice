import type { FC, ImgHTMLAttributes } from "react";

export type WasprosLogoProps = ImgHTMLAttributes<HTMLImageElement>;

export default function WasprosLogo(props: WasprosLogoProps) {
  return (
    <img
      src="/waspros.png" // Ensure waspros.png is in the public folder
      alt="Waspros Logo"
      width="106"
      height="25"
      {...props}
    />
  );
}
