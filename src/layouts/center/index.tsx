import type React from "react";
import { merge } from "../../utils/class";

type Props = {
  horizontal?: boolean;
  vertical?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const Center: React.FC<Props> = ({
  horizontal,
  vertical,
  className,
  children,
}) => (
  <div
    className={merge(
      "flex",
      horizontal && "justify-center",
      vertical && "items-center",
      className
    )}
  >
    {children}
  </div>
);

export { Center };
