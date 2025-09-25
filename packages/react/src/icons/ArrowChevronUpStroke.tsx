import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21.112 16.8a1 1 0 0 0 .2-1.4 26.5 26.5 0 0 0-7.573-6.83l-.712-.427a1 1 0 0 0-1.03 0l-.711.427a26.5 26.5 0 0 0-7.574 6.83 1 1 0 1 0 1.6 1.2 24.5 24.5 0 0 1 7.002-6.315l.198-.118.198.118a24.5 24.5 0 0 1 7.002 6.314 1 1 0 0 0 1.4.2\"/>",
  light: "",
} as const;

export default function ArrowChevronUpStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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