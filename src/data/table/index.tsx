import type React from "react";

import { merge } from "../../utils/class";

const Table: React.FC<JSX.IntrinsicElements["table"]> = ({
  className,
  ...props
}) => (
  <div className="my-6 w-full border-collapse overflow-y-auto border-neutral-500 text-neutral-800 dark:text-neutral-200">
    <table className={merge("max-w-full", className)} {...props} />
  </div>
);

const TableHead: React.FC<JSX.IntrinsicElements["thead"]> = ({
  className,
  ...props
}) => (
  <thead
    className={merge("bg-neutral-200 dark:bg-neutral-800", className)}
    {...props}
  />
);

const TableBody: React.FC<JSX.IntrinsicElements["tbody"]> = ({
  className,
  ...props
}) => <tbody className={merge("dark:bg-neutral-600", className)} {...props} />;

const TableHeader: React.FC<JSX.IntrinsicElements["th"]> = ({
  className,
  ...props
}) => (
  <th
    className={merge(
      "border border-neutral-500 px-4 py-2 text-center font-semibold",
      className
    )}
    {...props}
  />
);

const TableRow: React.FC<JSX.IntrinsicElements["tr"]> = ({
  className,
  ...props
}) => (
  <tr
    className={merge(
      "m-0 border-t border-neutral-500 p-0 even:bg-neutral-100 even:dark:bg-neutral-700",
      className
    )}
    {...props}
  />
);

const TableData: React.FC<JSX.IntrinsicElements["td"]> = ({
  className,
  ...props
}) => (
  <td
    className={merge(
      "border border-neutral-500 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
      className
    )}
    {...props}
  />
);

export { Table, TableHead, TableBody, TableHeader, TableRow, TableData };
