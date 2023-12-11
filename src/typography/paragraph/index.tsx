import React from "react";

import { merge } from "../../utils/class";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

const Paragraph: React.FC<Props> = ({ className, ...props }) => (
  <p
    className={merge(
      "text-base my-4 leading-relaxed text-neutral-800 dark:text-neutral-200",
      className
    )}
    {...props}
  />
);

export { Paragraph };
