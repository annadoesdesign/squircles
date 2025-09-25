import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.012 16.25a.75.75 0 0 1 0 1.5h-13.5a.75.75 0 0 1 0-1.5zM6.387 11c.938 0 1.125.125 1.125.75s-.187.75-1.125.75-1.125-.125-1.125-.75S5.45 11 6.387 11M11.012 11c.625 0 .75.125.75.75s-.125.75-.75.75-.75-.125-.75-.75.125-.75.75-.75M15.012 11c.625 0 .75.125.75.75s-.125.75-.75.75-.75-.125-.75-.75.125-.75.75-.75M19.012 11c.625 0 .75.125.75.75s-.125.75-.75.75-.75-.125-.75-.75.125-.75.75-.75M6.012 7c.625 0 .75.125.75.75s-.125.75-.75.75-.75-.125-.75-.75.125-.75.75-.75M10.012 7c.625 0 .75.125.75.75s-.125.75-.75.75-.75-.125-.75-.75.125-.75.75-.75M14.012 7c.625 0 .75.125.75.75s-.125.75-.75.75-.75-.125-.75-.75.125-.75.75-.75M18.387 7c.938 0 1.125.125 1.125.75s-.187.75-1.125.75-1.125-.125-1.125-.75S17.45 7 18.387 7\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 2c10 0 12 1.667 12 10l-.006.762C24.38 20.436 22.2 22 12.512 22l-.914-.005C2.686 21.893.641 20.188.518 12.762L.512 12c0-8.333 2-10 12-10m0 1.5c-2.475 0-4.368.105-5.828.367-1.457.262-2.362.66-2.962 1.16-1.158.965-1.71 2.766-1.71 6.973s.552 6.008 1.71 6.973c.6.5 1.505.898 2.962 1.16 1.46.262 3.353.367 5.828.367s4.369-.105 5.828-.367c1.457-.262 2.363-.66 2.962-1.16 1.158-.965 1.71-2.766 1.71-6.973s-.552-6.008-1.71-6.973c-.6-.5-1.505-.898-2.962-1.16-1.46-.262-3.352-.367-5.828-.367\" clip-rule=\"evenodd\"/>",
} as const;

export default function KeyboardLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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