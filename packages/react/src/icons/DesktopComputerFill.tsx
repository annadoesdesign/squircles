import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.512 0c10 0 12 1.667 12 10 0 8.048-1.865 9.877-11 9.993v1.544c1.09.063 2.176.227 3.242.493a1 1 0 1 1-.484 1.94 15.5 15.5 0 0 0-7.516 0 1 1 0 1 1-.484-1.94 17.5 17.5 0 0 1 3.242-.493v-1.544c-9.134-.116-11-1.945-11-9.993 0-8.333 2-10 12-10\"/>",
  regular: "",
  light: "",
} as const;

export default function DesktopComputerFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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