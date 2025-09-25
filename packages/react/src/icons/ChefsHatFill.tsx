import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.512 0c1.838 0 3.48.827 4.581 2.129a8.002 8.002 0 0 0-4.238 2.214 1.001 1.001 0 0 0 1.415 1.415 6 6 0 0 1 10.22 3.747 6 6 0 0 1-3.98 5.152l.002.343c0 7.5-1.333 9-8 9-6.112 0-7.74-1.26-7.97-7.25a8 8 0 0 0 2.494.232 8 8 0 0 0 3.476-1.054 1 1 0 1 0-1-1.732 6 6 0 0 1-7.908-1.747l-.046-.066A6 6 0 0 1 .516 9.219l-.002-.081a6.044 6.044 0 0 1 .113-1.309 6 6 0 0 1 6.66-4.778A6 6 0 0 1 12.512 0\"/>",
  regular: "",
  light: "",
} as const;

export default function ChefsHatFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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