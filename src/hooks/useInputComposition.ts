import { type CompositionEvent, useRef, useState } from "react";

type Props = {
  initialValue?: string;
  onTextChanged?: (value: string) => void;
};

const useInputComposition = ({ initialValue, onTextChanged }: Props) => {
  const [value, setValue] = useState(initialValue ?? "");
  const isCompositing = useRef(false);

  const onInputChanged = (newValue: string) => {
    if (value === newValue) {
      return;
    }

    if (newValue === "") {
      isCompositing.current = false;
    } else if (isCompositing.current) {
      return;
    }

    setValue(newValue);
    onTextChanged?.(newValue);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onInputChanged(e.target.value);
  };

  const onCompositionStart = () => {
    isCompositing.current = true;
  };

  const onCompositionEnd = (
    e: CompositionEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    isCompositing.current = false;
    onInputChanged((e.target as HTMLInputElement).value);
  };

  return { value, onChange, onCompositionStart, onCompositionEnd };
};

export { useInputComposition };
