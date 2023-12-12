import React from "react";

import { merge } from "../../utils/class";

type Props = {
  type:
    | "bug"
    | "danger"
    | "important"
    | "info"
    | "note"
    | "success"
    | "tip"
    | "warning";
  children?: React.ReactNode;
  className?: string;
};

const Admonition: React.FC<Props> = ({
  type,
  className,
  children,
  ...props
}) => {
  return (
    <blockquote
      className={merge(
        "my-4 border px-4 py-2",
        className,
        type === "bug" &&
          "border-rose-700 bg-rose-400 dark:border-rose-600 dark:bg-rose-900",
        type === "danger" &&
          "border-red-800 bg-red-400 dark:border-red-600 dark:bg-red-900",
        type === "important" &&
          "border-sky-800 bg-sky-400 dark:border-sky-600 dark:bg-sky-900",
        type === "info" &&
          "border-cyan-800 bg-cyan-400 dark:border-cyan-600 dark:bg-cyan-900",
        type === "note" &&
          "border-indigo-800 bg-indigo-400 dark:border-indigo-600 dark:bg-indigo-900",
        type === "success" &&
          "border-green-800 bg-green-400 dark:border-green-600 dark:bg-green-900",
        type === "tip" &&
          "border-emerald-800 bg-emerald-400 dark:border-emerald-600 dark:bg-emerald-900",
        type === "warning" &&
          "border-orange-800 bg-orange-400 dark:border-orange-600 dark:bg-orange-900"
      )}
      {...props}
    >
      <p
        className={merge(
          "mb-1 flex items-center dark:text-xl",
          type === "bug" && "text-rose-800 dark:text-rose-300",
          type === "danger" && "text-red-800 dark:text-red-300",
          type === "danger" && "text-red-800 dark:text-red-300",
          type === "important" && "text-sky-800 dark:text-sky-300",
          type === "info" && "text-cyan-800 dark:text-cyan-300",
          type === "note" && "text-indigo-800 dark:text-indigo-300",
          type === "success" && "text-green-800 dark:text-green-300",
          type === "tip" && "text-emerald-800 dark:text-emerald-300",
          type === "warning" && "text-orange-800 dark:text-orange-300"
        )}
      >
        <i
          className={merge(
            "fa-regular",
            type === "bug" && "fa-bug",
            type === "danger" && "fa-bolt",
            type === "important" && "fa-circle-exclamation",
            type === "info" && "fa-info-circle",
            type === "note" && "fa-note",
            type === "success" && "fa-check-circle",
            type === "tip" && "fa-fire",
            type === "warning" && "fa-triangle-exclamation"
          )}
        />
        <span className="ml-2 text-lg capitalize">{type}</span>
      </p>
      <div className="text-neutral-800 dark:text-neutral-200">{children}</div>
    </blockquote>
  );
};

export { Admonition };
