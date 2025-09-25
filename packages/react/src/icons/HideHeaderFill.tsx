import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M.98 5.912C2.01 1.126 5.01 0 12.512 0c7.503 0 10.503 1.126 11.533 5.912a74 74 0 0 0-23.065 0\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 24c-10 0-12-2-12-12 0-1.514.048-2.845.16-4.013h.004a72 72 0 0 1 23.672 0h.005c.112 1.168.16 2.499.16 4.013 0 10-2 12-12 12m0-4a1 1 0 0 0 1-1v-5.067a5.7 5.7 0 0 1 1.106 1.514 1 1 0 0 0 1.789-.894 7.7 7.7 0 0 0-3.447-3.448l-.017-.006a1 1 0 0 0-.082-.036l-.017-.005a1 1 0 0 0-.23-.053L12.513 11a1 1 0 0 0-.33.058l-.017.005a1 1 0 0 0-.082.036l-.018.006a7.7 7.7 0 0 0-3.447 3.448 1 1 0 0 0 1.789.894 5.7 5.7 0 0 1 1.105-1.514V19a1 1 0 0 0 1 1\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function HideHeaderFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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