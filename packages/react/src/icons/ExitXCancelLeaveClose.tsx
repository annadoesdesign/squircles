import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M128 0c70.692 0 128 57.308 128 128s-57.308 128-128 128S0 198.692 0 128 57.308 0 128 0m60.875 67.125c-4.165-4.165-10.918-4.165-15.083 0L128 112.917 82.208 67.125c-4.165-4.165-10.918-4.165-15.083 0s-4.165 10.918 0 15.083L112.917 128l-45.792 45.792c-4.166 4.165-4.165 10.917 0 15.083 4.166 4.166 10.918 4.166 15.083 0L128 143.083l45.792 45.792c4.165 4.166 10.917 4.166 15.083 0 4.165-4.166 4.165-10.918 0-15.083L143.083 128l45.792-45.792c4.165-4.165 4.165-10.918 0-15.083\" clip-rule=\"evenodd\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M163.125 77.792c4.166-4.165 10.918-4.165 15.083 0s4.166 10.917 0 15.083L143.083 128l35.125 35.125c4.166 4.165 4.166 10.918 0 15.083-4.165 4.166-10.917 4.166-15.083 0L128 143.083l-35.125 35.125c-4.166 4.166-10.918 4.166-15.083 0-4.166-4.165-4.166-10.918 0-15.083L112.917 128 77.792 92.875c-4.166-4.166-4.166-10.918 0-15.083 4.165-4.165 10.918-4.165 15.083 0L128 112.917z\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M128 0c70.692 0 128 57.308 128 128s-57.308 128-128 128S0 198.692 0 128 57.308 0 128 0m0 21.333C69.09 21.333 21.333 69.09 21.333 128S69.09 234.667 128 234.667 234.667 186.91 234.667 128 186.91 21.333 128 21.333\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M165.01 79.677a8 8 0 0 1 11.313 11.313L139.313 128l37.01 37.01a8 8 0 1 1-11.313 11.313L128 139.313l-37.01 37.01a8 8 0 0 1-11.312-11.313l37.01-37.01-37.01-37.01A7.999 7.999 0 1 1 90.99 79.677L128 116.688z\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M128 0c70.692 0 128 57.308 128 128s-57.308 128-128 128S0 198.692 0 128 57.308 0 128 0m0 16C66.144 16 16 66.144 16 128s50.144 112 112 112 112-50.144 112-112S189.856 16 128 16\"/>",
} as const;

export default function ExitXCancelLeaveClose(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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