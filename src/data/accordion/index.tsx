"use client";

// import { faChevronDown, faChevronUp } from "@fortawesome/pro-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";
import { merge as classnames } from "../../utils/class";

type Props = {
  title: string;
  children: React.ReactNode;
  chevronUp?: React.ReactNode;
  chevronDown?: React.ReactNode;
};

const Accordion = ({ title, children, chevronDown, chevronUp }: Props) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const onAccordionToggle = useCallback(() => {
    setIsAccordionOpen((w) => !w);
  }, []);

  return (
    <div className="border-2 border-neutral-300 dark:border-neutral-700">
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        onClick={onAccordionToggle}
        className={classnames(
          "flex justify-between border-neutral-300 dark:border-neutral-700 px-4 py-2",
          isAccordionOpen && "border-b-2"
        )}
      >
        <div className="font-semibold">{title}</div>
        <div>
          {isAccordionOpen
            ? chevronUp ?? <div>^</div>
            : chevronDown ?? <div>v</div>}
        </div>
      </div>
      <div
        className={classnames("hidden px-4 py-2", isAccordionOpen && "block")}
      >
        {children}
      </div>
    </div>
  );
};

export { Accordion };
