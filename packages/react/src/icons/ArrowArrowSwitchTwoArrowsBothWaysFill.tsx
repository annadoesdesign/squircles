import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M7.958 11.168a1 1 0 0 1 1.109 1.664c-.795.53-1.696 1.33-2.472 2.168h13.917a1 1 0 0 1 0 2H6.595c.776.838 1.677 1.638 2.472 2.168a1 1 0 0 1-1.11 1.664c-1.51-1.007-3.27-2.767-4.277-4.277a1 1 0 0 1 0-1.11c1.007-1.51 2.767-3.27 4.278-4.277M15.68 3.445a1 1 0 0 1 1.387-.277c1.51 1.007 3.27 2.767 4.277 4.277a1 1 0 0 1 0 1.11c-1.007 1.51-2.767 3.27-4.277 4.277a1 1 0 0 1-1.11-1.664c.795-.53 1.696-1.33 2.472-2.168H4.512a1 1 0 0 1 0-2H18.43c-.776-.838-1.677-1.638-2.471-2.168a1 1 0 0 1-.278-1.387\"/>",
  regular: "",
  light: "",
} as const;

export default function ArrowArrowSwitchTwoArrowsBothWaysFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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