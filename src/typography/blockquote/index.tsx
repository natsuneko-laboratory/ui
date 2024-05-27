import type React from "react";

import { merge } from "../../utils/class";

type Props = React.DetailedHTMLProps<
  React.QuoteHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;

const Blockquote: React.FC<Props> = ({ className, ...props }) => (
  <blockquote
    className={merge(
      "text-base m-2 px-4 py-1 leading-relaxed text-neutral-800 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-800",
      className
    )}
    {...props}
  />
);

export { Blockquote };
