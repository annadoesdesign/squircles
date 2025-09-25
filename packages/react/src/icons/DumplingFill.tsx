import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M11.285.274a5.3 5.3 0 0 1 2.455 0c7.524 1.79 10.772 4.85 10.772 13.19 0 8.78-2 10.536-12 10.536s-12-1.756-12-10.536c0-8.34 3.248-11.4 10.773-13.19M12.512 7a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1m-3.5-3a1 1 0 0 0-.995.898l-.01.205A1 1 0 0 1 7.012 6h-.5a1 1 0 0 0 0 2h.5a3 3 0 0 0 3-3 1 1 0 0 0-1-1m7.5 0a1 1 0 0 0-1 1 3 3 0 0 0 3 3h.5a1 1 0 1 0 0-2h-.5a1 1 0 0 1-.995-.897l-.01-.205A1 1 0 0 0 16.512 4\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function DumplingFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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