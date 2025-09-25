import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.801 14.762a.75.75 0 0 1 1.423.475L17.512 15c.712.237.711.238.711.238v.003l-.003.005-.004.014-.014.039-.051.126c-.044.103-.11.243-.202.408-.183.33-.473.764-.907 1.197-.88.881-2.318 1.72-4.53 1.72s-3.649-.838-4.53-1.72a5.4 5.4 0 0 1-.906-1.197 5 5 0 0 1-.253-.534l-.015-.04-.004-.013-.002-.005v-.002s-.001-.002.71-.239l-.712.237a.75.75 0 0 1 1.423-.475l.003.007.026.064c.027.061.07.155.134.271.13.233.34.55.656.866.62.618 1.682 1.28 3.47 1.28s2.851-.662 3.47-1.28c.317-.317.527-.633.656-.866a3 3 0 0 0 .16-.335zM8.012 5c1.25 0 1.5.583 1.5 3.5l-.003.52C9.477 11.487 9.184 12 8.012 12l-.222-.007c-.988-.07-1.245-.67-1.275-2.973l-.003-.52c0-2.917.25-3.5 1.5-3.5M17.012 5c1.25 0 1.5.583 1.5 3.5l-.003.52c-.032 2.467-.325 2.98-1.497 2.98l-.222-.007c-.988-.07-1.245-.67-1.275-2.973l-.003-.52c0-2.917.25-3.5 1.5-3.5\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m0 1.5c-2.47 0-4.342.125-5.777.435-1.418.305-2.307.77-2.912 1.376-.606.605-1.07 1.494-1.376 2.912-.31 1.435-.435 3.307-.435 5.777s.125 4.342.435 5.777c.306 1.418.77 2.307 1.376 2.912.605.606 1.494 1.07 2.912 1.376 1.435.31 3.307.435 5.777.435s4.343-.125 5.778-.435c1.418-.305 2.306-.77 2.912-1.376s1.07-1.494 1.376-2.912c.31-1.435.434-3.307.434-5.777s-.125-4.342-.434-5.777c-.306-1.418-.77-2.307-1.376-2.912-.606-.606-1.494-1.07-2.912-1.376-1.435-.31-3.308-.435-5.778-.435\" clip-rule=\"evenodd\"/>",
} as const;

export default function SmileyFaceLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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