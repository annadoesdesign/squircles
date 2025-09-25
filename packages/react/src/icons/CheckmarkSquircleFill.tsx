import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m6.858 6.485a1 1 0 0 0-1.372-.342 26.9 26.9 0 0 0-8.449 8.002 9 9 0 0 0-2.482-2.477 1 1 0 1 0-1.11 1.664 7 7 0 0 1 2.126 2.228l.572.955a1 1 0 0 0 1.69.04l.765-1.149a24.9 24.9 0 0 1 7.917-7.549 1 1 0 0 0 .343-1.372\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function CheckmarkSquircleFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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