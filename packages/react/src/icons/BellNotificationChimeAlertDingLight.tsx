import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 3c6.666 0 8 1.5 8 9q0 .387-.006.755A4.5 4.5 0 0 1 18.012 21h-1.8c-.338 2.43-1.334 3-3.85 3l-.594-.013c-2.082-.095-2.944-.759-3.253-2.987H7.012a4.5 4.5 0 0 1-2.496-8.245A56 56 0 0 1 4.512 12c0-7.5 1.333-9 8-9m-2.483 18c.098.585.227.886.331 1.043.12.178.368.457 2.002.457 1.635 0 1.883-.279 2.002-.457.105-.157.232-.458.33-1.043zm2.483-16.5c-3.388 0-4.709.43-5.38 1.183-.338.382-.634.984-.834 2.029-.202 1.053-.286 2.439-.286 4.288q0 .378.004.734c.007.508-.244.986-.667 1.269A3 3 0 0 0 7.011 19.5h11a3 3 0 0 0 1.662-5.497 1.5 1.5 0 0 1-.667-1.269q.005-.36.006-.734c0-1.849-.085-3.235-.287-4.288-.2-1.045-.495-1.647-.835-2.029C17.22 4.93 15.9 4.5 12.513 4.5\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5.7.238a.75.75 0 0 1 .388 1.45 5.5 5.5 0 0 0-3.889 3.888.75.75 0 0 1-1.45-.388A7 7 0 0 1 5.7.238M18.405.768a.75.75 0 0 1 .918-.53 7 7 0 0 1 4.95 4.95.75.75 0 0 1-1.449.388 5.5 5.5 0 0 0-3.889-3.889.75.75 0 0 1-.53-.919\"/>",
} as const;

export default function BellNotificationChimeAlertDingLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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