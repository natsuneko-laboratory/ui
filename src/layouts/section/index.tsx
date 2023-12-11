import React from "react";

import { merge } from "../../utils/class";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const Section: React.FC<Props> = ({ className, ...props }) => (
  <section className={merge("mt-4 mb-8", className)} {...props} />
);

export { Section };
