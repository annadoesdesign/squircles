import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14.127.39a.75.75 0 0 1 1.185.61v7.25h6.03a.896.896 0 0 1 .823 1.248 33.3 33.3 0 0 1-8.674 11.937l-2.435 2.13a.75.75 0 0 1-1.241-.632l.827-9.183h-7.18a.75.75 0 0 1-.647-1.129A38.75 38.75 0 0 1 13.727.675zm-.315 2.084a37.2 37.2 0 0 0-9.01 9.776h6.66a.75.75 0 0 1 .748.817l-.734 8.136 1.026-.897A31.8 31.8 0 0 0 20.41 9.75h-5.848a.75.75 0 0 1-.75-.75z\"/>",
} as const;

export default function LightningBoltFastQuickLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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