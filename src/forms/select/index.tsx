"use client";

import type React from "react";
import { useCallback, useEffect, useState } from "react";

import { merge } from "../../utils/class";

type ItemBase = {
  value: string;
  label: string;
  disabled?: boolean;
};

type Props<T extends ItemBase> = {
  items: T[];
  initialValue?: string;
  onValueChanged?: (value: T) => void;
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

const Select = <T extends ItemBase>({
  className,
  items,
  initialValue,
  disabled,
  onValueChanged,
  ...rest
}: Props<T>) => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    setState(initialValue);
  }, [initialValue]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setState(event.target.value);
      onValueChanged?.(
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        items.find((item) => item.value === event.target.value)!
      );
    },
    [items, onValueChanged]
  );

  return (
    <div className="relative inline-block">
      <select
        className={merge(
          // base
          "w-full px-4 pr-8 py-2 outline-none appearance-none border rounded-none",
          "text-neutral-700 dark:text-neutral-300",
          "placeholder:text-neutral-400 dark:placeholder:text-neutral-500", // placeholder
          "bg-transparent dark:bg-neutral-900", // bg
          "border-neutral-400 dark:border-neutral-700", // border
          "focus:border-sky-400 dark:focus:border-sky-700", // focus
          "disabled:text-opacity-50 disabled:bg-neutral-100 disabled:dark:bg-neutral-800 disabled:dark:text-neutral-500", // disabled
          className
        )}
        disabled={disabled}
        defaultValue={state}
        onChange={handleChange}
        {...rest}
      >
        {items.map((item) => {
          return (
            <option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {item.label}
            </option>
          );
        })}
      </select>
      <div
        className={merge(
          "absolute top-3.5 right-3 w-2.5 h-2.5 rounded-none border-t-2 border-r-2 rotate-[135deg] border-neutral-600 dark:border-neutral-500",
          disabled && "border-neutral-400 dark:border-neutral-700"
        )}
      />
    </div>
  );
};

export { Select };
