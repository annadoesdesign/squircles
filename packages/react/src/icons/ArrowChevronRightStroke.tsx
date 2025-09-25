import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.712 20.6a1 1 0 0 0 1.4.2 26.5 26.5 0 0 0 6.83-7.574l.428-.712a1 1 0 0 0 0-1.029l-.428-.712a26.5 26.5 0 0 0-6.83-7.573 1 1 0 1 0-1.2 1.6 24.5 24.5 0 0 1 6.315 7.002l.118.198-.118.198A24.5 24.5 0 0 1 8.913 19.2a1 1 0 0 0-.2 1.4\"/>",
  light: "",
} as const;

export default function ArrowChevronRightStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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