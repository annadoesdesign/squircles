import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M234.667 32c5.891 0 10.667 4.776 10.667 10.667V64c0 5.891-4.776 10.667-10.667 10.667S224 69.89 224 64V53.333h-85.333v160c5.891 0 10.667 4.776 10.667 10.667s-4.776 10.667-10.667 10.667h-21.333c-5.891 0-10.667-4.776-10.667-10.667 0-5.522 4.196-10.067 9.573-10.615l1.094-.052v-160H32V64c0 5.891-4.775 10.667-10.666 10.667S10.667 69.89 10.667 64V42.667C10.667 36.776 15.443 32 21.334 32z\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M234.666 32c5.891 0 10.667 4.776 10.667 10.667V64c0 5.891-4.776 10.667-10.667 10.667S223.999 69.89 223.999 64V53.333h-85.333v160c5.891 0 10.667 4.776 10.667 10.667s-4.776 10.667-10.667 10.667h-21.333c-5.891 0-10.667-4.776-10.667-10.667 0-5.522 4.196-10.067 9.573-10.615l1.094-.052v-160H31.999V64c0 5.891-4.775 10.667-10.666 10.667S10.666 69.89 10.666 64V42.667C10.666 36.776 15.442 32 21.333 32z\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M232 32a8 8 0 0 1 8 8v21.333a8 8 0 0 1-16 0V48h-90.666v165.333H136a8 8 0 0 1 8 8 8 8 0 0 1-8 8h-21.333a8 8 0 1 1 0-16h2.667V48H26.667v13.333a8 8 0 1 1-16 0V40a8 8 0 0 1 8-8z\"/>",
} as const;

export default function Type(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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