import type React from "react";

import { merge } from "../../utils/class";

type Props = {
  alt: string;
  src: { light: string; dark: string };
  width: number;
  height: number;
  className?: string;
};

const ThemedMedia: React.FC<Props> = ({
  src,
  alt,
  width,
  height,
  className,
}) => (
  <>
    <img
      className={merge("hidden dark:inline", className)}
      src={src.light}
      alt={alt}
      width={width}
      height={height}
    />
    <img
      className={merge("dark:hidden inline", className)}
      src={src.dark}
      alt={alt}
      width={width}
      height={height}
    />
  </>
);

export { ThemedMedia };
