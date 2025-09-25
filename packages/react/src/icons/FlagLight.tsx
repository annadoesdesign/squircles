import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M10.626.886a15.5 15.5 0 0 1 8.32-.506l2.943.63c.29.062.521.279.603.563a27.8 27.8 0 0 1 .24 14.392l-.242.966a.75.75 0 0 1-1.024.508l-2.823-1.21a10.22 10.22 0 0 0-7.821-.095 13.4 13.4 0 0 1-7.17.775l-1.64-.273v6.114a.75.75 0 0 1-1.5 0V1.792a.75.75 0 0 1 .88-.74l2.24.392c2.34.41 4.747.218 6.994-.558m8.005.96c-2.5-.536-5.1-.377-7.516.458a15.5 15.5 0 0 1-7.742.618l-1.36-.239v12.431l1.887.316a11.9 11.9 0 0 0 6.364-.689 11.72 11.72 0 0 1 8.97.11l2.014.862.029-.112a26.3 26.3 0 0 0-.12-13.214z\" clip-rule=\"evenodd\"/>",
} as const;

export default function FlagLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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