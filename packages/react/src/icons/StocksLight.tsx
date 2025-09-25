import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.995 5.75c.21 0 .412.084.56.232a6.7 6.7 0 0 1 1.61 2.606l.06.175a.75.75 0 0 1-1.425.474l-.057-.175a5.2 5.2 0 0 0-.635-1.275 13.25 13.25 0 0 1-9.847 9.808l-.577.136a.75.75 0 0 1-.344-1.462l.577-.135a11.75 11.75 0 0 0 8.76-8.808q-.71.084-1.403.257l-.58.145a.75.75 0 0 1-.363-1.456l.579-.144a12.7 12.7 0 0 1 3.066-.378z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m0 1.5c-2.47 0-4.342.125-5.777.435-1.418.305-2.307.77-2.912 1.376-.606.605-1.07 1.494-1.376 2.912-.31 1.435-.435 3.307-.435 5.777s.125 4.342.435 5.777c.306 1.418.77 2.307 1.376 2.912.605.606 1.494 1.07 2.912 1.376 1.435.31 3.307.435 5.777.435s4.343-.125 5.778-.435c1.418-.305 2.306-.77 2.912-1.376s1.07-1.494 1.376-2.912c.31-1.435.434-3.307.434-5.777s-.125-4.342-.434-5.777c-.306-1.418-.77-2.307-1.376-2.912-.606-.606-1.494-1.07-2.912-1.376-1.435-.31-3.308-.435-5.778-.435\" clip-rule=\"evenodd\"/>",
} as const;

export default function StocksLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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