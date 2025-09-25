import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M18.296 2.023c.539-.12 1.073.221 1.193.76a42.5 42.5 0 0 1 0 18.434 1.001 1.001 0 0 1-1.953-.434c.496-2.233.799-4.498.912-6.77a59.2 59.2 0 0 1-12.11 6.574l-.634.254a1.197 1.197 0 0 1-1.618-.877 40.6 40.6 0 0 1 0-15.928l.034-.134a1.2 1.2 0 0 1 1.453-.787l.13.044.636.254a59.2 59.2 0 0 1 12.11 6.573 40.5 40.5 0 0 0-.913-6.77 1 1 0 0 1 .76-1.193\"/>",
  regular: "",
  light: "",
} as const;

export default function SkipForwardFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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