import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M128 0c70.692 0 128 57.308 128 128s-57.308 128-128 128S0 198.692 0 128 57.308 0 128 0m0 170.667c-8.889 0-10.667 1.778-10.667 10.666S119.111 192 128 192s10.667-1.778 10.667-10.667-1.778-10.666-10.667-10.666M128 64c-5.89 0-10.667 4.776-10.667 10.667v64c0 5.89 4.777 10.666 10.667 10.666 5.891 0 10.667-4.775 10.667-10.666v-64C138.667 68.776 133.891 64 128 64\" clip-rule=\"evenodd\"/>",
  regular: "<circle fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\"  cx=\"128\" cy=\"128\" r=\"112\"/><path fill=\"currentColor\" stroke=\"none\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\"  d=\"M128 74.667v64\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M117.333 181.333c0-8.888 1.778-10.666 10.667-10.666s10.667 1.778 10.667 10.666S136.889 192 128 192s-10.667-1.778-10.667-10.667\"/>",
  light: "<circle fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\"  cx=\"128\" cy=\"128\" r=\"112\"/><path fill=\"currentColor\" stroke=\"none\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\"  d=\"M128 74.667v64\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M117.333 181.333c0-8.888 1.778-10.666 10.667-10.666s10.667 1.778 10.667 10.666S136.889 192 128 192s-10.667-1.778-10.667-10.667\"/>",
} as const;

export default function AlertCircle(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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