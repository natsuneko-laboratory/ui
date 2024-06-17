import type React from "react";
import { classnames } from "../../main";

type KeyValueTemplateProps = {
  className?: string;
  items: {
    title: string;
    onRenderItem: () => React.ReactNode;
  }[];
};

const KeyValueItem = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classnames(
        "grid grid-cols-subgrid col-span-2 py-4 first:border-t-0 border-t border-neutral-300 dark:border-neutral-600",
        className
      )}
    >
      <div className="font-semibold text-neutral-800 dark:text-neutral-200">
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
};

const KeyValueItemInternal = ({
  item,
  className,
}: {
  item: KeyValueTemplateProps["items"][number];
  className?: string;
}) => (
  <KeyValueItem title={item.title} className={className}>
    {item.onRenderItem()}
  </KeyValueItem>
);

type ItemProps = {
  type: "items";
  items: KeyValueTemplateProps["items"];
};

type ChildrenProps = {
  type: "children";
  children: React.ReactNode;
};

type Props = (ItemProps | ChildrenProps) & { className?: string };

const KeyValueGrid = ({ className, ...props }: Props) => {
  if (props.type === "children") {
    return (
      <div className={classnames("md:grid grid-cols-[200px_1fr]", className)}>
        {props.children}
      </div>
    );
  }

  const items = props.items;
  return (
    <div className={classnames("md:grid grid-cols-[200px_1fr]", className)}>
      {items.map((item, index) => (
        <KeyValueItemInternal key={`${item.title}-${index}`} item={item} />
      ))}
    </div>
  );
};

export { KeyValueGrid, KeyValueItem };
