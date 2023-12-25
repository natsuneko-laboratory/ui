import React from "react";

import { merge } from "../../utils/class";

type Props = {
  gap?: 1 | 2 | 4 | 8 | 16;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Stack: React.FC<Props> = ({ className, gap = 1, ...props }) => (
  <div
    className={merge(
      "flex flex-col gap-y-2",
      gap === 1 && "gap-y-1",
      gap === 2 && "gap-y-2",
      gap === 4 && "gap-y-4",
      gap === 8 && "gap-y-8",
      gap === 16 && "gap-y-16",
      className
    )}
    {...props}
  ></div>
);

export { Stack };
