import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M15.512 6c7.34 0 8.931 1.436 8.996 8.525-.07 7.707-1.764 9.4-9.47 9.471-7.09-.065-8.526-1.657-8.526-8.996 0-7.5 1.5-9 9-9\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M10.512 0c5.905 0 8.456.838 9.444 4.29C18.67 4.07 17.185 4 15.513 4c-1.914 0-3.585.093-4.992.396-1.43.309-2.72.862-3.734 1.877C5.77 7.29 5.217 8.578 4.909 10.008c-.304 1.407-.397 3.077-.397 4.992 0 1.672.07 3.158.29 4.444C1.35 18.456.512 15.904.512 10c0-8.333 1.667-10 10-10\"/>",
  regular: "",
  light: "",
} as const;

export default function CopyPasteFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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