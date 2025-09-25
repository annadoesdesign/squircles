import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m-3.4 6.005a1 1 0 0 0-1.095.895 51.3 51.3 0 0 0 0 10.2 1 1 0 0 0 1.99-.2 49.3 49.3 0 0 1 0-9.8 1 1 0 0 0-.895-1.095m6.8 0a1 1 0 0 0-.895 1.095 49.3 49.3 0 0 1 0 9.8 1 1 0 0 0 1.99.2c.34-3.392.34-6.808 0-10.2a1 1 0 0 0-1.094-.895\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function PauseSquircleFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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