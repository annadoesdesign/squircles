import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M6.512 13c4.167 0 5 .833 5 5s-.833 5-5 5-5-.833-5-5 .834-5 5-5M18.512 13c4.167 0 5 .833 5 5s-.833 5-5 5-5-.833-5-5 .833-5 5-5M6.512 1c4.167 0 5 .833 5 5s-.833 5-5 5-5-.833-5-5 .834-5 5-5M18.512 1a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0V7h-3a1 1 0 1 1 0-2h3V2a1 1 0 0 1 1-1\"/>",
  regular: "",
  light: "",
} as const;

export default function DashboardAddFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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