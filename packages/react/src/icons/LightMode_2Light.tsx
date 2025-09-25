import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 21.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M4.91 18.541a.75.75 0 1 1 1.061 1.06l-.707.708a.75.75 0 0 1-1.06-1.061zM19.053 18.541a.75.75 0 0 1 1.06 0l.708.707a.75.75 0 0 1-1.06 1.06l-.708-.706a.75.75 0 0 1 0-1.061\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 4c4.8 0 8 3.2 8 8 0 4.418-3.2 8-8 8s-8-3.2-8-8 3.2-8 8-8m0 1.5c-2.059 0-3.658.68-4.74 1.76-1.08 1.082-1.76 2.68-1.76 4.74s.68 3.658 1.761 4.74c1.08 1.08 2.68 1.76 4.74 1.76 3.924 0 6.5-2.862 6.5-6.5 0-2.06-.68-3.658-1.762-4.74-1.08-1.08-2.68-1.76-4.739-1.76\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.512 11.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5zM23.512 11.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5zM4.204 3.691a.75.75 0 0 1 1.06 0l.707.707a.75.75 0 1 1-1.06 1.061l-.707-.707a.75.75 0 0 1 0-1.06M19.76 3.691a.75.75 0 0 1 1.06 1.061l-.706.707a.75.75 0 1 1-1.06-1.06zM12.512.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V1a.75.75 0 0 1 .75-.75\"/>",
} as const;

export default function LightMode_2Light(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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