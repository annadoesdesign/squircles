import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.173 0c2.325 0 4.238.115 5.79.45 1.56.337 2.808.906 3.75 1.849.944.943 1.513 2.19 1.85 3.75.334 1.553.45 3.466.45 5.79 0 3.839-.308 6.61-1.476 8.498-1.222 1.974-3.272 2.827-6.249 3.158a.75.75 0 0 1-.166-1.49c2.797-.311 4.276-1.063 5.14-2.458.917-1.483 1.25-3.845 1.25-7.707 0-2.296-.115-4.08-.415-5.474-.3-1.385-.77-2.333-1.444-3.007s-1.622-1.144-3.007-1.443c-1.393-.3-3.178-.416-5.473-.416-3.862 0-6.225.334-7.707 1.251-1.395.863-2.147 2.343-2.458 5.14a.75.75 0 0 1-1.49-.166c.33-2.977 1.183-5.027 3.158-6.25C5.563.309 8.335 0 12.173 0M.807 18.573a.75.75 0 0 1 .918-.53 6 6 0 0 1 4.244 4.243.75.75 0 0 1-1.45.388 4.5 4.5 0 0 0-3.181-3.182.75.75 0 0 1-.53-.919M1.843 14.71a.75.75 0 0 1 .918-.53 10 10 0 0 1 7.07 7.071.75.75 0 1 1-1.448.388 8.5 8.5 0 0 0-6.01-6.01.75.75 0 0 1-.53-.919\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.878 10.847a.75.75 0 0 1 .918-.532 14 14 0 0 1 9.9 9.9.75.75 0 0 1-1.449.389 12.5 12.5 0 0 0-8.839-8.84.75.75 0 0 1-.53-.917\"/>",
} as const;

export default function CastSendToDeviceLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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