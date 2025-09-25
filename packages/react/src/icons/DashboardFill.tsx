import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M8.084 6.938a70.7 70.7 0 0 1 15.351-.141l.78.078c.212 1.416.297 3.107.297 5.125 0 10-2 12-12 12-1.544 0-2.897-.049-4.082-.166a166 166 0 0 1-.346-16.896M6.402.472a168 168 0 0 0 0 23.055C1.635 22.493.512 19.491.512 12S1.634 1.506 6.402.472M12.512 0c6.895 0 9.986.951 11.241 4.82l-.119-.012a72.7 72.7 0 0 0-15.476.109q.101-2.378.272-4.752C9.615.048 10.968 0 12.512 0\"/>",
  regular: "",
  light: "",
} as const;

export default function DashboardFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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