import type React from "react";

import { merge } from "../../utils/class";

type Props = {
  gap?: 1 | 2 | 4 | 8 | 16;
  wrap?: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Cluster: React.FC<Props> = ({ className, gap = 1, wrap, ...props }) => (
  <div
    className={merge(
      "flex flex-grow gap-x-2",
      gap === 1 && "gap-x-1",
      gap === 2 && "gap-x-2",
      gap === 4 && "gap-x-4",
      gap === 8 && "gap-x-8",
      gap === 16 && "gap-x-16",
      wrap && "flex-wrap",
      className
    )}
    {...props}
  ></div>
);

export { Cluster };
