import React from "react";

import { merge } from "../../utils/class";

type Props = {
  variant?: "primary" | "secondary" | "danger" | "text";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<Props> = ({
  variant = "primary",
  className,
  ...rest
}) => {
  return (
    <button
      className={merge(
        "text-neutral-100 px-6 py-2 cursor-pointer rounded-none",
        "disabled:opacity-50 disabled:cursor-default", // disabled

        // variants
        variant === "primary" && [
          "border-none bg-sky-500",
          "[&:not(:disabled)]:active:bg-sky-700", // active
          "[&:not(:active,:disabled)]:hover:bg-sky-600", // hover
        ],
        variant === "secondary" && [
          "border border-neutral-400 dark:border-neutral-600 bg-transparent text-neutral-700 dark:text-neutral-300",
          "[&:not(:disabled)]:active:bg-neutral-300 [&:not(:disabled)]:active:dark:bg-neutral-600", // active
          "[&:not(:active,:disabled)]:hover:bg-neutral-200 [&:not(:active,:disabled)]:hover:dark:bg-neutral-700", // hover
        ],
        variant === "danger" && [
          "border-none bg-red-500",
          "[&:not(:disabled)]:active:bg-red-700", // active
          "[&:not(:active,:disabled)]:hover:bg-red-600", // hover
        ],
        variant === "text" && [
          "border-none bg-transparent text-neutral-800 dark:text-neutral-200",
          "[&:not(:disabled)]:active:bg-neutral-200 [&:not(:disabled)]:active:dark:bg-neutral-700", // active
          "[&:not(:active,:disabled)]:hover:bg-neutral-200 [&:not(:active,:disabled)]:hover:dark:bg-neutral-700", // hover
        ],
        className
      )}
      {...rest}
    />
  );
};

export { Button };
