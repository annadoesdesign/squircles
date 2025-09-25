import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12M11.36 6.47a1 1 0 0 0-1.378-.318 10.62 10.62 0 0 0-4.232 5.063l-.167.414a1 1 0 0 0 0 .742l.167.414a10.62 10.62 0 0 0 4.232 5.063 1 1 0 0 0 1.06-1.696 8.6 8.6 0 0 1-2.986-3.158c1.582-.014 3.01-.079 4.21-.111 1.37-.038 2.425-.027 3.24.122.793.145 1.227.4 1.494.75.285.372.512 1.026.512 2.245a1 1 0 1 0 2 0c0-1.419-.256-2.585-.92-3.457-.682-.894-1.662-1.31-2.726-1.505-1.045-.191-2.294-.191-3.655-.154-1.248.034-2.612.097-4.149.11a8.6 8.6 0 0 1 2.98-3.146 1 1 0 0 0 .318-1.378\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function ReplyEmailFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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