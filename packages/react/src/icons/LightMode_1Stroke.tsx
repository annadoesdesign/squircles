import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 21a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M4.734 18.364a1 1 0 1 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414zM18.877 18.364a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.415 1.414l-.706-.707a1 1 0 0 1 0-1.414\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.902 5.008c3.983.168 6.61 2.923 6.61 6.992l-.008.36C19.336 16.06 16.581 19 12.512 19l-.39-.008c-3.854-.163-6.44-2.748-6.602-6.602L5.512 12c0-4.2 2.8-7 7-7zM12.512 7c-1.645 0-2.861.54-3.66 1.339-.8.8-1.34 2.015-1.34 3.661s.54 2.862 1.34 3.661c.799.8 2.015 1.339 3.66 1.339 3.033 0 5-2.175 5-5 0-1.646-.54-2.862-1.339-3.661-.8-.8-2.015-1.339-3.66-1.339\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.512 11a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM23.512 11a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4.027 3.515a1 1 0 0 1 1.414 0l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414M19.584 3.515a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 1 1-1.415-1.414zM12.512 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1\"/>",
  light: "",
} as const;

export default function LightMode_1Stroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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