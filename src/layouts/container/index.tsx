import React from "react";

import { merge } from "../../utils/class";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Container: React.FC<Props> = ({ children, className, ...props }) => (
  <div className={merge("container mx-auto", className)} {...props}>
    <div className={merge("mx-4 lg:mx-0 h-full")}>{children}</div>
  </div>
);

export { Container };
