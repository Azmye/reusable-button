import clsx from "clsx";
import React, { ComponentProps } from "react";
import { Tooltip } from "react-tooltip";

interface Props extends ComponentProps<"button"> {
  color?: "default" | "primary" | "secondary" | "success" | "error";
  size?: "sm" | "md" | "lg";
  tooltip?: {
    title?: string;
    placement: "right" | "left" | "top" | "bottom";
  };
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export default function Button({
  color = "default",
  size = "md",
  children,
  tooltip,
  startIcon,
  endIcon,
  ...other
}: Props) {
  const btnColor = clsx(
    color === "default"
      ? `bg-neutral-800 text-white hover:bg-neutral-700 dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-100/60`
      : undefined,
    color === "primary" ? `bg-sky-500 text-white hover:bg-sky-700` : undefined,
    color === "secondary"
      ? `bg-violet-500 text-white hover:bg-violet-700`
      : undefined
  );

  const btnSize = clsx(
    size === "sm" ? `px-2 py-1` : undefined,
    size === "md" ? `px-4 py-2` : undefined,
    size === "lg" ? `px-6 py-3` : undefined
  );

  const style = `flex justify-center items-center rounded-md transition-colors ease-linear gap-1 font-semibold ${btnColor} ${btnSize}`;
  return (
    <div className="">
      <button
        className={style}
        data-tooltip-id="tooltip-anchor"
        data-tooltip-content={tooltip?.title}
        data-tooltip-place={tooltip?.placement}
        {...other}
      >
        {startIcon} {children} {endIcon}
      </button>

      <Tooltip id="tooltip-anchor" />
    </div>
  );
}
