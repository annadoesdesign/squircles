import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.258 4.295a.75.75 0 0 1 .59.034l1.171.586a8.39 8.39 0 0 1 4.205 4.848.751.751 0 0 1-1.424.474 6.88 6.88 0 0 0-3.452-3.98l-.086-.044V19a.75.75 0 0 1-1.5 0V6.213l-.085.044a6.88 6.88 0 0 0-3.453 3.98.75.75 0 0 1-1.423-.474 8.39 8.39 0 0 1 4.205-4.848l1.172-.586z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.427.006C22.636.133 24.513 2.312 24.513 12l-.006.914C24.38 22.123 22.2 24 12.512 24l-.914-.006C2.39 23.867.512 21.688.512 12c0-10 2-12 12-12zM12.512 1.5c-2.47 0-4.342.125-5.777.435-1.418.305-2.306.77-2.912 1.376s-1.07 1.494-1.376 2.912C2.137 7.658 2.012 9.53 2.012 12s.126 4.342.435 5.777c.306 1.418.77 2.307 1.376 2.912.606.606 1.494 1.07 2.912 1.376 1.435.31 3.307.435 5.777.435s4.343-.125 5.778-.435c1.418-.305 2.306-.77 2.912-1.376s1.07-1.494 1.376-2.912c.31-1.435.434-3.307.434-5.777s-.125-4.342-.434-5.777c-.306-1.418-.77-2.307-1.376-2.912-.606-.606-1.494-1.07-2.912-1.376-1.435-.31-3.307-.435-5.777-.435\" clip-rule=\"evenodd\"/>",
} as const;

export default function ArrowUpSquircleLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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