import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.524 11.25C13.65 7.332 14.832 6 18.012 6s4.361 1.332 4.488 5.25h1.012a.75.75 0 0 1 0 1.5H22.5l-.002.059C22.364 16.682 21.177 18 18.013 18s-4.35-1.318-4.486-5.191l-.001-.059h-2.026v.059C11.363 16.682 10.176 18 7.012 18s-4.35-1.318-4.486-5.191l-.001-.059H1.512a.75.75 0 0 1 0-1.5h1.012C2.65 7.332 3.832 6 7.012 6s4.362 1.332 4.488 5.25zM7.012 8c-1.439 0-1.772.32-1.916.513-.278.37-.584 1.273-.584 3.487s.306 3.117.584 3.487c.144.192.477.513 1.916.513s1.772-.32 1.916-.513c.278-.37.584-1.273.584-3.487s-.306-3.116-.584-3.487C8.784 8.32 8.451 8 7.012 8m11 0c-1.439 0-1.772.32-1.916.513-.278.37-.584 1.273-.584 3.487s.306 3.117.584 3.487c.144.192.477.513 1.916.513s1.772-.32 1.916-.513c.278-.37.584-1.273.584-3.487s-.306-3.116-.584-3.487C19.784 8.32 19.451 8 18.012 8\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function GlassesReadingListReadStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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