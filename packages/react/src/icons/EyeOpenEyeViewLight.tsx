import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 2c7 0 12 6 12 10s-5 10-12 10-12-6-12-10 5-10 12-10m0 1.5c-3.058 0-5.703 1.31-7.596 3.093C2.978 8.417 2.012 10.548 2.012 12s.966 3.583 2.904 5.407C6.809 19.19 9.454 20.5 12.512 20.5c3.059 0 5.704-1.31 7.597-3.093 1.938-1.824 2.903-3.955 2.903-5.407s-.965-3.583-2.903-5.407C18.216 4.81 15.57 3.5 12.512 3.5\" clip-rule=\"evenodd\"/>",
} as const;

export default function EyeOpenEyeViewLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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