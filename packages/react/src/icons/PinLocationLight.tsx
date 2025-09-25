import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.514 0c8.333 0 10.995 5 10 12-.796 5.6-6.719 9.92-9.056 11.424l-.11.066a1.73 1.73 0 0 1-1.667 0l-.112-.066C9.234 21.919 3.318 17.6 2.514 12c-1.005-7 1.666-12 10-12m0 1.5c-3.874 0-6.091 1.151-7.3 2.771-1.247 1.674-1.691 4.206-1.216 7.516.338 2.357 1.781 4.56 3.557 6.427 1.758 1.848 3.712 3.231 4.827 3.95a.24.24 0 0 0 .132.04c.038 0 .084-.01.133-.04 1.115-.719 3.071-2.102 4.83-3.95 1.776-1.867 3.216-4.07 3.551-6.425.471-3.311.027-5.843-1.22-7.518-1.206-1.62-3.42-2.771-7.294-2.771\" clip-rule=\"evenodd\"/>",
} as const;

export default function PinLocationLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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