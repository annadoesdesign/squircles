import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m.447 4.105a1 1 0 0 0-.787-.045l-.107.045-1.172.586a8.63 8.63 0 0 0-4.329 4.993 1 1 0 1 0 1.896.632 6.64 6.64 0 0 1 3.052-3.69V19a1 1 0 1 0 2 0V6.627a6.64 6.64 0 0 1 3.052 3.69 1 1 0 1 0 1.896-.633 8.63 8.63 0 0 0-4.329-4.993z\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function ArrowUpSquircleFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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