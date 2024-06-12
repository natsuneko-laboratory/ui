type Props = {
  onClick?: () => void;
};

const Backdrop = ({ onClick }: Props) => {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      className="fixed inset-0 bg-neutral-100/75 dark:bg-neutral-900/75"
      onClick={onClick}
    />
  );
};

export { Backdrop };
