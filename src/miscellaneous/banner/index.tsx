import type React from "react";

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
  children: React.ReactNode;
  className?: string;
};

const Banner: React.FC<Props> = ({ type, children, className }) => {
  return (
    <div
      className={merge(
        "border-b",
        className,
        type === "bug" &&
          "border-rose-800 bg-rose-200 dark:border-rose-600 dark:bg-rose-900",
        type === "danger" &&
          "border-red-800 bg-red-200 dark:border-red-600 dark:bg-red-900",
        type === "important" &&
          "border-sky-800 bg-sky-200 dark:border-sky-600 dark:bg-sky-900",
        type === "info" &&
          "border-cyan-800 bg-cyan-200 dark:border-cyan-600 dark:bg-cyan-900",
        type === "note" &&
          "border-indigo-800 bg-indigo-200 dark:border-indigo-600 dark:bg-indigo-900",
        type === "success" &&
          "border-green-800 bg-green-200 dark:border-green-600 dark:bg-green-900",
        type === "tip" &&
          "border-emerald-800 bg-emerald-200 dark:border-emerald-600 dark:bg-emerald-900",
        type === "warning" &&
          "border-orange-800 bg-orange-200 dark:border-orange-600 dark:bg-orange-900"
      )}
    >
      <div className="container mx-auto flex min-h-[64px] items-center justify-center">
        <p className="p-4 text-neutral-800 dark:text-neutral-200">{children}</p>
      </div>
    </div>
  );
};

export { Banner };
