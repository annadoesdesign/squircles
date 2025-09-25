import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0a1 1 0 0 1 1 1v1.007l-.061-.001C22.639 2.136 24.512 4.32 24.512 14c0 .83-1.319 1.234-2.082.865l-.144-.084c-1.825-1.268-4.605-1.716-8.774-1.774v7.521a3.472 3.472 0 0 1-6.578 1.553l-.316-.634a1 1 0 0 1 1.789-.894l.316.633a1.472 1.472 0 0 0 2.79-.658v-7.521c-4.17.058-6.95.506-8.775 1.774l-.145.084c-.763.37-2.08-.036-2.08-.865 0-9.679 1.873-11.864 11.06-11.994h-.06V1a1 1 0 0 1 1-1m0 4c-2.46 0-4.29.126-5.672.424-1.36.293-2.148.724-2.664 1.24S3.23 6.97 2.936 8.328c-.237 1.101-.364 2.487-.406 4.25C5.01 11.288 8.374 11 12.512 11s7.5.29 9.982 1.578c-.043-1.763-.168-3.148-.406-4.25-.293-1.36-.724-2.148-1.24-2.664s-1.304-.947-2.664-1.24C16.802 4.126 14.972 4 12.512 4\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.512 18s1 .643 1 1.714c0 .857-.448 1.286-1 1.286s-1-.429-1-1.286c0-1.071 1-1.714 1-1.714M21.512 18s1 .643 1 1.714c0 .857-.448 1.286-1 1.286s-1-.429-1-1.286c0-1.071 1-1.714 1-1.714M8.512 15s1 .643 1 1.714c0 .857-.448 1.286-1 1.286s-1-.429-1-1.286c0-1.071 1-1.714 1-1.714M16.512 15s1 .643 1 1.714c0 .857-.448 1.286-1 1.286s-1-.429-1-1.286c0-1.071 1-1.714 1-1.714\"/>",
  light: "",
} as const;

export default function UmbrellaRainStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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