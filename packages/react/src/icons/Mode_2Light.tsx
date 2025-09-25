import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M128 226.666a8 8 0 0 1 8 8v10.667a8 8 0 1 1-16 0v-10.667a8 8 0 0 1 8-8M46.917 197.77a8 8 0 1 1 11.313 11.313l-7.542 7.541a8 8 0 0 1-11.313 0 8 8 0 0 1 0-11.312zM197.771 197.77a8 8 0 0 1 11.313 0l7.541 7.542a8 8 0 0 1-11.312 11.312l-7.542-7.541a8 8 0 0 1 0-11.313\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M128 42.666c51.2 0 85.334 34.133 85.334 85.333 0 47.129-34.134 85.334-85.334 85.334s-85.333-34.134-85.333-85.334S76.8 42.666 128 42.666m0 16c-21.964 0-39.023 7.252-50.552 18.781S58.667 106.035 58.667 128s7.252 39.024 18.781 50.552c11.53 11.529 28.588 18.782 50.552 18.782 41.863 0 69.334-30.532 69.334-69.334 0-21.964-7.253-39.023-18.782-50.552S149.964 58.666 128 58.666\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M21.334 119.999a8 8 0 0 1 0 16H10.667a8 8 0 0 1 0-16zM245.334 119.999a8 8 0 0 1 0 16h-10.667a8 8 0 1 1 0-16zM39.375 39.374a8 8 0 0 1 11.313 0l7.541 7.542a8 8 0 0 1 0 11.313 8 8 0 0 1-11.312 0l-7.542-7.542a8 8 0 0 1 0-11.313M205.313 39.374a8 8 0 0 1 11.312 11.313l-7.541 7.541a8 8 0 1 1-11.313-11.312zM128 2.666a8 8 0 0 1 8 8v10.667a8 8 0 0 1-16 0V10.666a8 8 0 0 1 8-8\"/>",
} as const;

export default function Mode_2Light(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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