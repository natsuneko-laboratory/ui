"use client";

import React, { useCallback, useEffect, useState } from "react";

import { merge } from "../../utils/class";

type Props = {
  initialValue?: string;
  onValueChanged?: (value: string) => void;
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const TextArea: React.FC<Props> = ({
  className,
  initialValue,
  onValueChanged,
  ...rest
}) => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    setState(initialValue);
  }, [initialValue]);

  const onInputChanged = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = (e.target as HTMLTextAreaElement).value;
      setState(value);

      if (onValueChanged) {
        onValueChanged(value);
      }
    },
    [onValueChanged]
  );

  return (
    <textarea
      value={state}
      className={merge(
        "px-4 py-2 outline-none appearance-none border rounded-none",
        "text-neutral-700 dark:text-neutral-300",
        "placeholder:text-neutral-400 dark:placeholder:text-neutral-500", // placeholder
        "bg-transparent dark:bg-neutral-900", // bg
        "border-neutral-400 dark:border-neutral-700", // border
        "[&:not(:read-only)]:focus:border-sky-400 dark:[&:not(:read-only)]:focus:border-sky-700", // focus
        "read-only:border-opacity-50 read-only:bg-neutral-100 read-only:dark:bg-neutral-800", // readonly
        "disabled:text-opacity-50 disabled:bg-neutral-100 disabled:dark:bg-neutral-800 disabled:dark:text-neutral-500", // disabled
        className
      )}
      onChange={onInputChanged}
      {...rest}
    />
  );
};

export { TextArea };