import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 8.25a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V9a.75.75 0 0 1 .75-.75M10.012 5.142a.75.75 0 0 1 .75.75 2.75 2.75 0 0 1-2.75 2.75h-.5a.75.75 0 0 1 0-1.5h.5c.69 0 1.25-.56 1.25-1.25a.75.75 0 0 1 .75-.75M15.512 5.142a.75.75 0 0 1 .75.75c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 0 1 0 1.5h-.5a2.75 2.75 0 0 1-2.75-2.75.75.75 0 0 1 .75-.75\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M11.489.117a4.5 4.5 0 0 1 2.047 0c7.67 1.784 10.976 4.823 10.976 13.238l-.006.803c-.127 8.086-2.306 9.734-11.994 9.734S.645 22.244.518 14.158l-.006-.803c0-8.152 3.104-11.259 10.27-13.067zm1.707 1.461a3 3 0 0 0-1.367 0C8.085 2.448 5.72 3.564 4.25 5.24c-1.444 1.646-2.239 4.083-2.239 8.116 0 4.443.555 6.393 1.74 7.434.6.527 1.5.943 2.946 1.217 1.453.275 3.34.386 5.814.386s4.362-.111 5.815-.386c1.446-.274 2.346-.69 2.946-1.217 1.185-1.04 1.74-2.991 1.74-7.434 0-4.033-.796-6.47-2.24-8.116-1.47-1.675-3.834-2.79-7.577-3.66\" clip-rule=\"evenodd\"/>",
} as const;

export default function DumplingLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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