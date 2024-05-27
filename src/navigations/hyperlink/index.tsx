import type React from "react";

import { merge } from "../../utils/class";

type Props = Omit<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
  "target" | "rel"
>;

const isExternalUrl = (href?: string): boolean => {
  if (href) {
    if (href.startsWith("https://") || href.startsWith("http://")) {
      return true;
    }
  }

  return false;
};

const Hyperlink: React.FC<Props> = ({ href, className, ...props }) => {
  const isExternal = isExternalUrl(href);

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={merge(
        "text-sky-600 dark:text-sky-300 hover:underline",
        className
      )}
      {...props}
    />
  );
};

export { Hyperlink };
