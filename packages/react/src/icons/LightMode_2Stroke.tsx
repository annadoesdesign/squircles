import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 21a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M4.734 18.364a1 1 0 1 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414zM18.877 18.364a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.415 1.414l-.706-.707a1 1 0 0 1 0-1.414\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 4c4.8 0 8 3.2 8 8 0 4.418-3.2 8-8 8s-8-3.2-8-8 3.2-8 8-8m0 2c-1.945 0-3.411.64-4.386 1.614-.974.975-1.614 2.44-1.614 4.386 0 1.945.64 3.411 1.614 4.386.975.974 2.44 1.614 4.386 1.614 3.633 0 6-2.623 6-6 0-1.945-.64-3.411-1.614-4.386C15.924 6.64 14.458 6 12.512 6\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.512 11a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM23.512 11a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4.027 3.515a1 1 0 0 1 1.414 0l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414M19.584 3.515a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 1 1-1.415-1.414zM12.512 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1\"/>",
  light: "",
} as const;

export default function LightMode_2Stroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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