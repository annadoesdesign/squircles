import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m0 5a1 1 0 0 0-1 1v10.257c-.67-.454-1.3-.97-1.874-1.545l-.419-.419a1 1 0 1 0-1.414 1.414l.42.419a14.8 14.8 0 0 0 3.84 2.768 1 1 0 0 0 .786.046l.108-.046a14.8 14.8 0 0 0 3.841-2.768l.42-.419a1 1 0 1 0-1.415-1.414l-.419.419a12.8 12.8 0 0 1-1.874 1.545V6a1 1 0 0 0-1-1\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function ArrowDownSquircleFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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