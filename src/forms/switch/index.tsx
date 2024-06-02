// ref: https://codepen.io/alvarotrigo/pen/RwjEZeJ
import { useState } from "react";
import { merge as classnames } from "../../utils/class";

type Props = {
  initialChecked?: boolean;
  onValueChanged?: (value: boolean) => void;
} & Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "type" | "checked" | "onChange"
>;

const Switch = ({
  className,
  initialChecked,
  onValueChanged,
  ...rest
}: Props) => {
  const [state, setState] = useState(initialChecked ?? false);
  const onChange = () => {};
  const onToggleSwitch = () => {
    const newState = !state;

    setState(newState);
    onValueChanged?.(newState);
  };

  return (
    <>
      <input
        type="checkbox"
        className="peer/checkbox hidden selection:hidden"
        checked={state}
        onChange={onChange}
        {...rest}
      />
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <label
        onClick={onToggleSwitch}
        className={classnames(
          "outline-0 block w-14 h-7 relative cursor-pointer select-none p-0.5 ease-in transition-all duration-200",
          "bg-neutral-100 dark:bg-neutral-900 border-4 border-neutral-300 dark:border-neutral-700 rounded-full",
          "peer-checked/checkbox:border-4 peer-checked/checkbox:border-green-400 peer-checked/checkbox:dark:border-green-600",
          "after:relative after:block after:w-1/2 after:h-full after:left-0",
          "after:ease-in-out after:transition-all after:duration-200 after:bg-neutral-400 after:dark:bg-neutral-600 after:rounded-full",
          "after:peer-checked/checkbox:left-1/2 after:peer-checked/checkbox:bg-green-400 after:peer-checked/checkbox:dark:bg-green-600",
          "before:relative before:block before:w-1/2 before:h-full",
          "before:hidden",
          className
        )}
      />
    </>
  );
};

export { Switch };
