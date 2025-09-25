import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14.177 8.33a.75.75 0 0 1 .67 1.34 5.95 5.95 0 0 0-1.963 1.58h5.628a.75.75 0 0 1 0 1.5h-5.628a5.95 5.95 0 0 0 1.963 1.58.75.75 0 0 1-.67 1.34 7.46 7.46 0 0 1-3.336-3.335l-.01-.025a.7.7 0 0 1-.052-.155.75.75 0 0 1-.001-.306l.004-.02a1 1 0 0 1 .049-.14l.01-.024a7.46 7.46 0 0 1 3.336-3.336\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m0 1.5c-1.682 0-3.086.06-4.264.195a110 110 0 0 0 0 20.609c1.178.134 2.582.196 4.264.196 2.47 0 4.343-.125 5.778-.435 1.418-.305 2.306-.77 2.912-1.376s1.07-1.494 1.376-2.912c.31-1.435.434-3.307.434-5.777s-.125-4.342-.434-5.777c-.306-1.418-.77-2.307-1.376-2.912-.606-.606-1.494-1.07-2.912-1.376-1.435-.31-3.308-.435-5.778-.435m-5.793.438c-1.409.305-2.293.769-2.896 1.373-.606.605-1.07 1.494-1.376 2.912-.31 1.435-.435 3.307-.435 5.777s.125 4.342.435 5.777c.306 1.418.77 2.307 1.376 2.912.603.604 1.487 1.067 2.896 1.372a111.5 111.5 0 0 1 0-20.123\" clip-rule=\"evenodd\"/>",
} as const;

export default function HideSidePanelLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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