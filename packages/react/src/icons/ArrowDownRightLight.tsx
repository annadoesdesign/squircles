import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.365 19.735a.75.75 0 0 1 .295-1.47c1.74.348 3.514.414 5.273.218L4.983 5.53a.75.75 0 0 1 1.06-1.06l12.962 12.963c.206-1.759.125-3.52-.228-5.285a.75.75 0 1 1 1.47-.295 18.2 18.2 0 0 1 0 7.298.75.75 0 0 1-.591.585c-2.41.469-4.876.482-7.291 0\"/>",
} as const;

export default function ArrowDownRightLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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