import type React from "react";

import { merge } from "../../utils/class";

type Props = {
  bordered?: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const Heading1: React.FC<Props> = ({ bordered, className, ...props }) => (
  <h1
    className={merge(
      "text-4xl font-semibold break-words mb-6 text-neutral-800 dark:text-neutral-200",
      bordered && "border-b border-neutral-300 dark:border-neutral-600 pb-4",
      className
    )}
    {...props}
  />
);

const Heading2: React.FC<Props> = ({ bordered, className, ...props }) => (
  <h2
    className={merge(
      "text-3xl font-semibold break-words mb-5 text-neutral-800 dark:text-neutral-200",
      bordered && "border-b border-neutral-300 dark:border-neutral-600 pb-3",
      className
    )}
    {...props}
  />
);

const Heading3: React.FC<Props> = ({ bordered, className, ...props }) => (
  <h3
    className={merge(
      "text-2xl font-semibold break-words mb-4 text-neutral-800 dark:text-neutral-200",
      bordered && "border-b border-neutral-300 dark:border-neutral-600 pb-2",
      className
    )}
    {...props}
  />
);

const Heading4: React.FC<Props> = ({ bordered, className, ...props }) => (
  <h4
    className={merge(
      "text-xl break-words mb-3 text-neutral-800 dark:text-neutral-200",
      bordered && "border-b border-neutral-300 dark:border-neutral-600 pb-2",
      className
    )}
    {...props}
  />
);

const Heading5: React.FC<Props> = ({ bordered, className, ...props }) => (
  <h5
    className={merge(
      "text-lg break-words mb-2 text-neutral-800 dark:text-neutral-200",
      bordered && "border-b border-neutral-300 dark:border-neutral-600 pb-2",
      className
    )}
    {...props}
  />
);

const Heading6: React.FC<Props> = ({ bordered, className, ...props }) => (
  <h6
    className={merge(
      "text-base break-words mb-1 text-neutral-800 dark:text-neutral-200",
      bordered && "border-b border-neutral-300 dark:border-neutral-600 pb-2",
      className
    )}
    {...props}
  />
);

export { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 };
