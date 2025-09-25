import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M128 181.333c8.888.001 10.666 1.779 10.666 10.667s-1.778 10.667-10.666 10.667-10.667-1.778-10.667-10.667 1.778-10.667 10.667-10.667M128 53.334c5.891 0 10.666 4.775 10.666 10.666v85.333c0 5.891-4.775 10.667-10.666 10.667s-10.667-4.776-10.667-10.667V64c0-5.89 4.776-10.666 10.667-10.666\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M128.001 181.333c8.888.001 10.666 1.778 10.666 10.667s-1.778 10.667-10.666 10.667-10.667-1.778-10.667-10.667 1.778-10.667 10.667-10.667M128.001 53.334c5.891 0 10.666 4.775 10.666 10.666v85.333c0 5.891-4.775 10.667-10.666 10.667s-10.667-4.776-10.667-10.667V64c0-5.89 4.776-10.666 10.667-10.666\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M128 181.333c6.667 0 8 1.334 8 8s-1.333 8-8 8-8-1.333-8-8 1.333-8 8-8M128 56a8 8 0 0 1 8 8v85.333a8 8 0 1 1-16 0V64a8 8 0 0 1 8-8\"/>",
} as const;

export default function Alert(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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