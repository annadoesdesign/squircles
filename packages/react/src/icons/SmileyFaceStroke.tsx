import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.564 14.683a1 1 0 0 1 1.896.633L17.512 15l.948.316v.002l-.003.01-.005.015-.017.044-.055.136c-.047.11-.116.258-.212.431a5.7 5.7 0 0 1-.949 1.253c-.925.925-2.424 1.793-4.707 1.793s-3.782-.868-4.707-1.793a5.7 5.7 0 0 1-.948-1.253 5 5 0 0 1-.268-.567l-.016-.044-.006-.016-.003-.009s0-.002.948-.318l-.948.316a1 1 0 0 1 1.896-.633l.022.052c.023.054.063.14.123.248.12.217.317.513.614.81.575.575 1.576 1.207 3.293 1.207s2.718-.632 3.293-1.207c.297-.297.494-.593.614-.81a3 3 0 0 0 .145-.3M8.012 5c1.25 0 1.5.583 1.5 3.5l-.003.52C9.477 11.487 9.184 12 8.012 12l-.222-.007c-.988-.07-1.245-.67-1.275-2.973l-.003-.52c0-2.917.25-3.5 1.5-3.5M17.012 5c1.25 0 1.5.583 1.5 3.5l-.003.52c-.032 2.467-.325 2.98-1.497 2.98l-.222-.007c-.988-.07-1.245-.67-1.275-2.973l-.003-.52c0-2.917.25-3.5 1.5-3.5\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m0 2c-2.46 0-4.29.126-5.672.424-1.36.293-2.148.724-2.664 1.24S3.23 4.97 2.936 6.328C2.638 7.71 2.512 9.54 2.512 12s.126 4.29.424 5.672c.293 1.36.724 2.148 1.24 2.664s1.305.947 2.664 1.24c1.382.298 3.212.424 5.672.424s4.29-.126 5.672-.424c1.36-.293 2.148-.724 2.664-1.24s.947-1.304 1.24-2.664c.298-1.382.424-3.212.424-5.672s-.126-4.29-.424-5.672c-.293-1.36-.724-2.148-1.24-2.664s-1.304-.947-2.664-1.24C16.802 2.126 14.972 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function SmileyFaceStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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