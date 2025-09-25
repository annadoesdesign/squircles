import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M11.512 1c7.4 0 10.02 1.195 10.755 6.477 1.785.606 2.245 1.908 2.245 4.523l-.004.38c-.045 2.363-.545 3.566-2.24 4.143C21.531 21.805 18.911 23 11.511 23c-9.166 0-11-1.833-11-11s1.834-11 11-11m0 1.5c-2.262 0-3.967.115-5.27.396-1.285.277-2.074.694-2.607 1.227s-.95 1.322-1.227 2.607c-.281 1.303-.396 3.008-.396 5.27s.115 3.967.396 5.27c.277 1.285.694 2.074 1.227 2.607s1.322.95 2.608 1.228c1.302.28 3.007.395 5.27.395 2.261 0 3.967-.115 5.269-.395 1.285-.278 2.074-.695 2.607-1.228s.95-1.322 1.228-2.607c.28-1.303.395-3.008.395-5.27s-.114-3.967-.395-5.27c-.277-1.285-.695-2.074-1.228-2.607s-1.322-.95-2.607-1.227c-1.302-.281-3.008-.396-5.27-.396m10.925 6.749q.076 1.25.075 2.751a45 45 0 0 1-.075 2.749c.309-.288.575-.891.575-2.749 0-1.86-.266-2.463-.575-2.751\" clip-rule=\"evenodd\"/>",
} as const;

export default function BatteryLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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