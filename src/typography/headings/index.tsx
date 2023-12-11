import React from "react";

import { merge } from "../../utils/class";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const Heading1: React.FC<Props> = ({ className, ...props }) => (
  <h1
    className={merge(
      "text-4xl font-semibold mb-6 text-neutral-800 dark:text-neutral-200",
      className
    )}
    {...props}
  />
);

const Heading2: React.FC<Props> = ({ className, ...props }) => (
  <h2
    className={merge(
      "text-3xl font-semibold mb-5 text-neutral-800 dark:text-neutral-200",
      className
    )}
    {...props}
  />
);

const Heading3: React.FC<Props> = ({ className, ...props }) => (
  <h3
    className={merge(
      "text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200",
      className
    )}
    {...props}
  />
);

const Heading4: React.FC<Props> = ({ className, ...props }) => (
  <h4
    className={merge(
      "text-xl mb-3 text-neutral-800 dark:text-neutral-200",
      className
    )}
    {...props}
  />
);

const Heading5: React.FC<Props> = ({ className, ...props }) => (
  <h5
    className={merge(
      "text-lg mb-2 text-neutral-800 dark:text-neutral-200",
      className
    )}
    {...props}
  />
);

const Heading6: React.FC<Props> = ({ className, ...props }) => (
  <h6
    className={merge(
      "text-base mb-1 text-neutral-800 dark:text-neutral-200",
      className
    )}
    {...props}
  />
);

export { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 };
