import type React from "react";

import { merge } from "../../utils/class";

type UnorderedListProps = {
  t: "unordered";
} & JSX.IntrinsicElements["ul"];

type OrderedListProps = {
  t: "ordered";
} & JSX.IntrinsicElements["ol"];

type Props = UnorderedListProps | OrderedListProps;

type ListItemProps = JSX.IntrinsicElements["li"];

const List: React.FC<Props> = (props) => {
  if (props.t === "ordered") {
    return <OrderedList {...props} />;
  }

  return <UnorderedList {...props} />;
};

const UnorderedList: React.FC<Omit<UnorderedListProps, "t">> = ({
  className,
  ...rest
}) => (
  <ul
    className={merge(
      "group ml-4 list-disc list-inside text-neutral-800 dark:text-neutral-200 group-[.list-inside]:ml-6",
      className
    )}
    {...rest}
  />
);

const OrderedList: React.FC<Omit<OrderedListProps, "t">> = ({
  className,
  ...rest
}) => (
  <ol
    className={merge(
      "group ml-4 list-decimal list-inside text-neutral-800 dark:text-neutral-200 group-[.list-inside]:ml-6",
      className
    )}
    {...rest}
  />
);

const ListItem: React.FC<ListItemProps> = ({ className, ...rest }) => (
  <li
    className={merge("text-neutral-800 dark:text-neutral-200 my-1", className)}
    {...rest}
  />
);

export { List, UnorderedList, OrderedList, ListItem };
