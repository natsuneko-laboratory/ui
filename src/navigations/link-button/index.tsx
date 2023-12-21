import React from "react";

import { merge } from "../../utils/class";

type Props = {
  variant?: "primary" | "secondary" | "text";
} & React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const LinkButton: React.FC<Props> = ({
  variant = "primary",
  className,
  ...rest
}) => {
  return (
    <a
      className={merge(
        "inline-block text-neutral-100 px-6 py-2 cursor-pointer rounded-none",

        // variants
        variant === "primary" && [
          "border-none bg-sky-500",
          "active:bg-sky-700", // active
          "[&:not(:active)]:hover:bg-sky-600", // hover
        ],
        variant === "secondary" && [
          "border border-neutral-400 dark:border-neutral-600 bg-transparent text-neutral-700 dark:text-neutral-300",
          "active:bg-neutral-300 active:dark:bg-neutral-600", // active
          "[&:not(:active)]:hover:bg-neutral-200 [&:not(:active)]:hover:dark:bg-neutral-700", // hover
        ],
        variant === "text" && [
          "border-none bg-transparent text-neutral-800 dark:text-neutral-200",
          "active:bg-neutral-200 active:dark:bg-neutral-700", // active
          "[&:not(:active)]:hover:bg-neutral-200 [&:not(:active)]:hover:dark:bg-neutral-700", // hover
        ],
        className
      )}
      {...rest}
    />
  );
};

export { LinkButton };
