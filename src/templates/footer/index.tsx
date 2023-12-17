import React from "react";

import { ThemedMedia } from "../../media/themed-media";

type Props = {
  logo: { dark: string; light: string; width: number; height: number };
  children?: React.ReactNode;
};

const Footer: React.FC<Props> = ({ children, logo }) => {
  return (
    <footer className="border-t border-neutral-400 dark:border-neutral-600 pb-16">
      <div className="container mx-auto pt-4 text-sm">
        <div className="mx-4 flex flex-col md:flex-row md:items-center lg:mx-0 gap-x-4 gap-y-6">
          <div className="flex flex-col gap-y-4">
            <div className="text-base text-neutral-800 dark:text-neutral-200">
              Powered by
            </div>
            <a className="block" target="_blank" href="https://natsuneko.com">
              <ThemedMedia
                alt="logo"
                src={logo}
                width={logo.width}
                height={logo.height}
              />
            </a>
          </div>
          {children}
        </div>
      </div>
    </footer>
  );
};

export { Footer };
