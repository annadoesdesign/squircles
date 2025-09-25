import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M145.219 4.156a8.01 8.01 0 0 1 8.312-.604 8 8 0 0 1 4.334 7.114V88h64.312c6.856 0 11.482 7.011 8.782 13.312a355 355 0 0 1-92.521 127.323l-25.969 22.719a8 8 0 0 1-8.896 1.104 8 8 0 0 1-4.344-7.844l8.823-97.948H31.469a8.004 8.004 0 0 1-6.906-12.041A413.3 413.3 0 0 1 140.959 7.198zm-3.354 22.23a397.3 397.3 0 0 0-96.115 104.28h71.052a8 8 0 0 1 5.907 2.605 8 8 0 0 1 2.062 6.114l-7.823 86.781 10.948-9.573A339 339 0 0 0 212.24 104h-62.375a8 8 0 0 1-8-8z\"/>",
} as const;

export default function NingBoltFastQuickLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
  const ctx = React.useContext(IconContext);
  const { size = ctx.size, color = ctx.color, weight = ctx.weight, mirrored = ctx.mirrored, ...rest } = props;
  const g = paths[weight] ?? paths.regular ?? paths.fill ?? paths.light ?? "";
  const transform = mirrored ? "scale(-1,1) translate(-256,0)" : undefined;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      {...rest}
    >
      <g transform={transform} dangerouslySetInnerHTML={{ __html: g }} />
    </svg>
  );
}