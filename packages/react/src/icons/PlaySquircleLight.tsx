import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M8.773 6.9a.874.874 0 0 1 1.06-.574l.095.032.397.16a37.1 37.1 0 0 1 8.485 4.768.893.893 0 0 1 0 1.428 37.1 37.1 0 0 1-8.485 4.768l-.397.16a.874.874 0 0 1-1.18-.64 25.5 25.5 0 0 1 0-10.004zm1.31 1.138a24 24 0 0 0 0 7.923A35.6 35.6 0 0 0 17.245 12a35.6 35.6 0 0 0-7.162-3.962\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.426.006C22.636.133 24.512 2.313 24.512 12l-.006.914C24.38 22.123 22.2 24 12.513 24l-.914-.006C2.686 23.872.641 21.826.518 12.914L.512 12c0-10 2-12 12-12zM12.512 1.5c-2.47 0-4.342.125-5.777.435-1.418.305-2.306.77-2.912 1.376s-1.07 1.494-1.376 2.912C2.137 7.658 2.012 9.53 2.012 12s.125 4.342.435 5.777c.306 1.418.77 2.307 1.376 2.912.606.606 1.494 1.07 2.912 1.375 1.435.31 3.307.436 5.777.436s4.343-.126 5.778-.436c1.418-.305 2.306-.769 2.912-1.375.605-.605 1.069-1.494 1.375-2.912.31-1.435.435-3.307.435-5.777s-.126-4.342-.435-5.777c-.306-1.418-.77-2.307-1.375-2.912-.606-.606-1.494-1.07-2.912-1.376-1.435-.31-3.307-.435-5.778-.435\" clip-rule=\"evenodd\"/>",
} as const;

export default function PlaySquircleLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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