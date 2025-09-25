import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.887 11.219a1 1 0 0 1 1.25 1.562 17.8 17.8 0 0 0-3.973 4.464l-.804 1.285a1 1 0 0 1-1.648.07l-.418-.558a9.5 9.5 0 0 0-2.336-2.21 1 1 0 1 1 1.109-1.664c.878.585 1.669 1.29 2.354 2.089l.046-.072a19.8 19.8 0 0 1 4.42-4.966\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M17.512 0a1 1 0 0 1 1 1v.432c4.86.97 6 3.834 6 11.068l-.006.876C24.38 22.201 22.2 24 12.512 24l-.914-.006C2.686 23.877.641 21.917.518 13.376L.512 12.5c0-7.234 1.14-10.098 6-11.068V1a1 1 0 1 1 2 0v.151c1.165-.107 2.492-.151 4-.151s2.835.044 4 .151V1a1 1 0 0 1 1-1m4.927 9.828a60.5 60.5 0 0 0-19.855 0c-.048.79-.072 1.676-.072 2.672 0 2.354.126 4.093.42 5.4.288 1.28.709 2.015 1.214 2.5.512.49 1.305.908 2.678 1.192 1.39.287 3.226.408 5.688.408s4.299-.12 5.689-.408c1.372-.284 2.165-.701 2.677-1.193.505-.484.926-1.219 1.214-2.499.295-1.307.42-3.046.42-5.4a44 44 0 0 0-.073-2.672M12.512 3c-1.573 0-2.89.05-4 .16V4a1 1 0 0 1-2 0v-.52c-1.183.28-1.894.668-2.366 1.12-.505.485-.926 1.22-1.214 2.5q-.07.316-.128.667a62.5 62.5 0 0 1 19.415 0q-.058-.351-.127-.667c-.288-1.28-.709-2.015-1.214-2.5-.472-.452-1.183-.84-2.366-1.12V4a1 1 0 1 1-2 0v-.84c-1.109-.11-2.427-.16-4-.16\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function CalendarCheckStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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