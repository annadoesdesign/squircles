import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M4.536 2.784a1.001 1.001 0 0 1 1.953.434 40.5 40.5 0 0 0-.914 6.77 59.2 59.2 0 0 1 12.111-6.574l.635-.254.131-.044a1.2 1.2 0 0 1 1.453.787l.034.134a40.6 40.6 0 0 1 0 15.928 1.197 1.197 0 0 1-1.618.877l-.635-.254a59.2 59.2 0 0 1-12.11-6.574c.112 2.272.417 4.537.913 6.77a1.001 1.001 0 0 1-1.953.434 42.5 42.5 0 0 1 0-18.434\"/>",
  regular: "",
  light: "",
} as const;

export default function SkipBackwardFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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