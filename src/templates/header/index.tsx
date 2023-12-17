import React from "react";

import { Container } from "../../layouts/container";
import { ThemedMedia } from "../../media/themed-media";

type Props = {
  brand: { title: string } & React.ComponentProps<typeof ThemedMedia>;
  href: string;
  children?: React.ReactNode;
};

const Header: React.FC<Props> = ({ children, brand, href }) => {
  return (
    <header className="sticky top-0 z-10 h-16 border-b border-neutral-400 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-950">
      <Container className="h-full">
        <div className="flex h-full items-center justify-between mx-4 lg:mx-0">
          <div>
            <a href={href} className="flex items-center gap-x-4">
              <ThemedMedia {...brand} />
              <span className="text-neutral-800 dark:text-neutral-200">
                {brand.title}
              </span>
            </a>
          </div>
          <div>{children}</div>
        </div>
      </Container>
    </header>
  );
};

export { Header };
