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
  children?: React.ReactNode;
  className?: string;
};

const Badge: React.FC<Props> = ({ type, className, children, ...props }) => {
  return (
    <div
      className={merge(
        "inline-block px-3 py-0.5 rounded-full",
        "text-neutral-50 dark:text-neutral-200",
        className,
        type === "bug" && "bg-rose-600 dark:bg-rose-900",
        type === "danger" && "bg-red-600 dark:bg-red-900",
        type === "important" && "bg-sky-600 dark:bg-sky-900",
        type === "info" && "bg-cyan-600 dark:bg-cyan-900",
        type === "note" && "bg-indigo-600 dark:bg-indigo-900",
        type === "success" && "bg-green-600 dark:bg-green-900",
        type === "tip" && "bg-emerald-600 dark:bg-emerald-900",
        type === "warning" && "bg-orange-600 dark:bg-orange-900"
      )}
    >
      {children}
    </div>
  );
};

export { Badge };
