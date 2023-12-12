import React from "react";

type BreadcrumbLinkItem = {
  label: string;
  href: string;
};

type BreadcrumbActiveItem = {
  label: string;
};

type BreadcrumbItem = BreadcrumbLinkItem | BreadcrumbActiveItem;

type Props = {
  items: BreadcrumbItem[];
};

const Breadcrumb: React.FC<Props> = ({ items }) => {
  return (
    <nav>
      <ul className="flex flex-wrap gap-x-2 gap-y-2 text-sm">
        {items.map((w, i) => {
          const isNotLast = i !== items.length - 1;
          return (
            <React.Fragment key={w.label}>
              {"href" in w ? (
                <li>
                  <a
                    href={w.href}
                    className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {w.label}
                  </a>
                </li>
              ) : (
                <li>
                  <span className="text-neutral-800 dark:text-neutral-200">
                    {w.label}
                  </span>
                </li>
              )}
              {isNotLast && (
                <li className="text-neutral-300 dark:text-neutral-500">
                  <i className="fa-regular fa-chevron-right" />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export { Breadcrumb };
export type { BreadcrumbItem };
