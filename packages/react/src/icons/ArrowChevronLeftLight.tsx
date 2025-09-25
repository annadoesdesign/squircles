import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.112 20.45a.75.75 0 0 1-1.05.15 26.3 26.3 0 0 1-6.766-7.502l-.427-.713a.75.75 0 0 1 0-.771l.427-.713a26.3 26.3 0 0 1 6.766-7.5.75.75 0 0 1 .9 1.198 24.8 24.8 0 0 0-6.38 7.074L9.388 12l.196.327a24.8 24.8 0 0 0 6.38 7.073.75.75 0 0 1 .149 1.05\"/>",
} as const;

export default function ArrowChevronLeftLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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