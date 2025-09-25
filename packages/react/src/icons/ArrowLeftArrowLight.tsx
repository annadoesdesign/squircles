import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.096 6.376a.75.75 0 1 1 .832 1.248l-.213.142a16 16 0 0 0-3.75 3.484h16.547a.75.75 0 0 1 0 1.5H4.965a16 16 0 0 0 3.75 3.484l.213.142a.75.75 0 0 1-.832 1.248l-.213-.141a17.5 17.5 0 0 1-4.853-4.854l-.142-.213a.75.75 0 0 1 0-.832l.142-.213a17.5 17.5 0 0 1 4.853-4.853z\"/>",
} as const;

export default function ArrowLeftArrowLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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