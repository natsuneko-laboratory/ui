"use client";

import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { classnames } from "../../utils/class";

export type LinkItem = {
  type: "link";
  title: string;
  key: string;
  href: string;
  disabled?: boolean;
};

export type ClickItem = {
  type: "click";
  title: string;
  key: string;
  disabled?: boolean;
};

type Props = {
  items: (LinkItem | ClickItem)[];
  onStateChanged?: (key: string) => void;
};

const Tab = ({ items, onStateChanged }: Props) => {
  const pathname = usePathname();
  const [state, setState] = useState<string | null>(items.at(0)?.key ?? null);
  const onClick = useCallback(
    (newState: string) => {
      setState(newState);
      onStateChanged?.(newState);
    },
    [onStateChanged]
  );

  return (
    <div
      className="grid border-b-2 border-neutral-300 dark:border-neutral-700"
      style={{
        gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
      }}
    >
      {items.map((item) => {
        if (item.type === "click") {
          const isActive = state === item.key;
          return (
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <div
              key={item.key}
              className={classnames(
                "text-neutral-800 dark:text-neutral-200 box-border py-3 flex items-center justify-center text-lg border-b-4 border-transparent -mb-0.5 cursor-pointer",
                "hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-300 transition-all",
                isActive && " border-sky-400 dark:border-sky-600"
              )}
              onClick={() => onClick(item.key)}
            >
              {item.title}
            </div>
          );
        }

        const isActive = pathname === decodeURIComponent(item.href);
        const href = decodeURIComponent(item.href);

        return (
          <a key={item.key} href={href} aria-disabled={item.disabled}>
            <div
              className={classnames(
                "text-neutral-800 dark:text-neutral-200 box-border py-3 flex items-center justify-center text-lg border-b-4 border-transparent -mb-0.5",
                "hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-300 transition-all",
                isActive && " border-sky-400 dark:border-sky-600"
              )}
            >
              {item.title}
            </div>
          </a>
        );
      })}
    </div>
  );
};

export { Tab };
