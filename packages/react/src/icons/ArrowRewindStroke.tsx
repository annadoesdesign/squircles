import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.898 3.211a1 1 0 0 1 1.229 1.578l-.267.207A42 42 0 0 0 4.783 12a42 42 0 0 0 7.077 7.004l.267.207a1 1 0 0 1-1.229 1.578l-.265-.207A44 44 0 0 1 2.93 12.88a1.43 1.43 0 0 1 0-1.76l.423-.536a44 44 0 0 1 7.28-7.166z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.898 3.211a1 1 0 0 1 1.229 1.578l-.267.207A42 42 0 0 0 13.783 12a42 42 0 0 0 7.077 7.004l.267.207a1 1 0 0 1-1.229 1.578l-.265-.207a44 44 0 0 1-7.702-7.702 1.43 1.43 0 0 1 0-1.76l.422-.536a44 44 0 0 1 7.28-7.166z\"/>",
  light: "",
} as const;

export default function ArrowRewindStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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