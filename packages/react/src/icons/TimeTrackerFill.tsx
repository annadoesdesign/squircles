import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.512 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M15.512 0a1 1 0 1 1 0 2h-2v2.01c7.468.14 9 2.001 9 9.99 0 8.333-1.666 10-10 10s-10-1.667-10-10c0-7.989 1.532-9.85 9-9.99V2h-2a1 1 0 1 1 0-2zm-3 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function TimeTrackerFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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