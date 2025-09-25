import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c4.438 0 6.807 2.97 7.644 7.143.069.342.216.665.423.946A9.96 9.96 0 0 1 22.512 14c0 8-2.222 10-10 10s-10-2-10-10c0-2.211.717-4.255 1.932-5.91.207-.282.355-.604.423-.947C5.705 2.97 8.074 0 12.512 0m0 11a4 4 0 1 0 0 8 4 4 0 0 0 0-8\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function AvacadoFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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