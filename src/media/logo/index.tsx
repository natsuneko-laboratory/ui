import React from "react";

type Props = {
  theme: "light" | "dark";
  alt: string;
  width: number;
  height: number;
  className?: string;
};

const Logo: React.FC<Props> = ({ theme, alt, width, height, className }) => (
  <img
    className={className}
    src={`/natsuneko-laboratory-${theme === "dark" ? "light" : "dark"}.png`}
    alt={alt}
    width={width}
    height={height}
  />
);

export { Logo };
