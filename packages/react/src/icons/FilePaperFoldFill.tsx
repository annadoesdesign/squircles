import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.516.125c.191 3.052.74 5.624 2.476 7.358 1.754 1.754 4.272 2.208 7.11 2.306a.4.4 0 0 1 .386.389q.024.862.024 1.822c0 10-1.666 12-10 12s-10-2-10-12c0-9.947 1.65-11.979 9.867-12 .07 0 .132.054.137.125M7.512 16a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm0-4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm0-4a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2z\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M14.585.926c-.034-.353.322-.594.575-.347l.028.028 6.683 6.82c.137.14.017.352-.179.342a22 22 0 0 1-.422-.025 14 14 0 0 1-2.06-.278c-2.423-.536-3.684-1.79-4.29-4.38a16 16 0 0 1-.335-2.16\"/>",
  regular: "",
  light: "",
} as const;

export default function FilePaperFoldFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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