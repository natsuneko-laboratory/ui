import React, { useCallback, useEffect, useState } from "react";

import { merge } from "../../utils/class";

type Props = {
  avoidAutoFillByPasswordManager?: boolean;
  initialValue?: string;
  onValueChanged?: (value: string) => void;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<Props> = ({
  avoidAutoFillByPasswordManager,
  type,
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
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = (e.target as HTMLInputElement).value;
      setState(value);

      if (onValueChanged) {
        onValueChanged(value);
      }
    },
    [onValueChanged]
  );

  const pwIgnore = avoidAutoFillByPasswordManager ? true : undefined;

  return (
    <input
      value={state}
      type={type}
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
      // 1Password: https://developer.1password.com/docs/web/compatible-website-design/
      data-1p-ignore={pwIgnore}
      // LastPass: https://support.lastpass.com/s/document-item?language=en_US&bundleId=lastpass&topicId=LastPass/c_lp_prevent_fields_from_being_filled_automatically.html&_LANG=enus
      data-lpignore={pwIgnore}
      // BitWarden: https://bitwarden.com/help/releasenotes/#2021-06-29
      data-bwignore={pwIgnore}
      {...rest}
    />
  );
};

export { Input };
