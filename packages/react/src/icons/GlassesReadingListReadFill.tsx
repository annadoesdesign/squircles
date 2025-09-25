import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M18.012 6c3.112 0 4.31 1.275 4.478 5h1.022a1 1 0 1 1 0 2H22.49c-.169 3.725-1.366 5-4.478 5s-4.309-1.275-4.477-5H11.49c-.169 3.725-1.366 5-4.478 5s-4.309-1.275-4.477-5H1.512a1 1 0 1 1 0-2h1.023C2.703 7.275 3.9 6 7.012 6s4.31 1.275 4.478 5h2.045c.168-3.725 1.366-5 4.477-5m-11 2c-1.439 0-1.772.32-1.916.513-.278.37-.584 1.273-.584 3.487s.306 3.117.584 3.487c.144.192.477.513 1.916.513s1.772-.32 1.916-.513c.278-.37.584-1.273.584-3.487s-.306-3.116-.584-3.487C8.784 8.32 8.451 8 7.012 8m11 0c-1.439 0-1.772.32-1.916.513-.278.37-.584 1.273-.584 3.487s.306 3.117.584 3.487c.144.192.477.513 1.916.513s1.772-.32 1.916-.513c.278-.37.584-1.273.584-3.487s-.306-3.116-.584-3.487C19.784 8.32 19.451 8 18.012 8\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function GlassesReadingListReadFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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