import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M16.312 20.6a1 1 0 0 1-1.4.2 26.5 26.5 0 0 1-6.83-7.574l-.427-.712a1 1 0 0 1 0-1.029l.428-.712a26.5 26.5 0 0 1 6.83-7.573 1 1 0 1 1 1.199 1.6 24.5 24.5 0 0 0-6.315 7.002L9.68 12l.118.198a24.5 24.5 0 0 0 6.315 7.002 1 1 0 0 1 .2 1.4\"/>",
  regular: "",
  light: "",
} as const;

export default function ArrowChevronLeftFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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