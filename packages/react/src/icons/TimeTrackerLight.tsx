import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 11a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M15.512.25a.75.75 0 0 1 0 1.5h-2.25v2.254h.012c7.674.107 9.238 1.923 9.238 9.996l-.005.762C22.402 22.436 20.585 24 12.512 24l-.761-.005c-7.427-.102-9.132-1.807-9.234-9.233L2.512 14c0-8.077 1.566-9.892 9.25-9.996V1.75h-2.25a.75.75 0 1 1 0-1.5zm-3 5.25c-2.053 0-3.592.104-4.762.356-1.152.249-1.842.62-2.302 1.08s-.83 1.15-1.08 2.302c-.252 1.17-.356 2.709-.356 4.762s.104 3.592.357 4.762c.248 1.152.619 1.843 1.079 2.302s1.15.831 2.302 1.08c1.17.252 2.709.356 4.762.356 2.054 0 3.593-.104 4.762-.356 1.152-.249 1.843-.62 2.303-1.08s.83-1.15 1.079-2.302c.252-1.17.356-2.709.356-4.762s-.104-3.592-.356-4.762c-.249-1.152-.62-1.843-1.08-2.302s-1.15-.831-2.302-1.08c-1.17-.252-2.708-.356-4.762-.356\" clip-rule=\"evenodd\"/>",
} as const;

export default function TimeTrackerLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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