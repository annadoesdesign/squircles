import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 8a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1M10.012 5a1 1 0 0 1 1 1 3 3 0 0 1-3 3h-.5a1 1 0 1 1 0-2h.5a1 1 0 0 0 .995-.897l.01-.206A1 1 0 0 1 10.012 5M15.512 5a1 1 0 0 1 .995.897l.01.206a1 1 0 0 0 .995.897h.5a1 1 0 1 1 0 2h-.5a3 3 0 0 1-3-3 1 1 0 0 1 1-1\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c8.4 1.756 12 4.683 12 13.464l-.006.803C24.38 22.352 22.2 24 12.512 24S.645 22.352.518 14.267l-.006-.803c0-8.78 3.6-11.708 12-13.464m0 2.046c-3.872.845-6.241 1.897-7.701 3.43-1.447 1.52-2.299 3.844-2.299 7.988 0 4.46.573 6.182 1.57 7.057.508.447 1.311.837 2.709 1.102 1.406.266 3.255.377 5.721.377s4.316-.11 5.722-.377c1.397-.265 2.2-.655 2.709-1.102.996-.875 1.57-2.597 1.57-7.057 0-4.144-.853-6.467-2.3-7.987-1.46-1.534-3.829-2.586-7.7-3.431\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function DumplingStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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