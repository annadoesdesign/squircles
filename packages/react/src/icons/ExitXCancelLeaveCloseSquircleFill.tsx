import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m5.707 6.293a1 1 0 0 0-1.414 0l-4.293 4.293L8.22 6.293a1 1 0 0 0-1.414 1.414L11.098 12l-4.293 4.293a1 1 0 1 0 1.414 1.414l4.293-4.293 4.293 4.293a1 1 0 1 0 1.414-1.414L13.926 12l4.293-4.293a1 1 0 0 0 0-1.414\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function ExitXCancelLeaveCloseSquircleFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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