import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 21.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M4.91 18.541a.75.75 0 1 1 1.061 1.06l-.707.708a.75.75 0 0 1-1.06-1.061zM19.053 18.541a.75.75 0 0 1 1.06 0l.708.707a.75.75 0 0 1-1.06 1.06l-.708-.706a.75.75 0 0 1 0-1.061\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.902 5.008c3.983.168 6.61 2.923 6.61 6.992l-.008.36C19.336 16.06 16.581 19 12.512 19l-.39-.008c-3.854-.163-6.44-2.748-6.602-6.602L5.512 12c0-4.2 2.8-7 7-7zm-.39 1.492c-1.759 0-3.109.58-4.014 1.485S7.012 10.241 7.012 12c0 1.76.58 3.109 1.486 4.015.905.906 2.255 1.485 4.014 1.485 3.325 0 5.5-2.415 5.5-5.5 0-1.76-.58-3.109-1.485-4.015S14.27 6.5 12.512 6.5\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.512 11.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5zM23.512 11.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5zM4.204 3.691a.75.75 0 0 1 1.06 0l.707.707a.75.75 0 1 1-1.06 1.061l-.707-.707a.75.75 0 0 1 0-1.06M19.76 3.691a.75.75 0 0 1 1.06 1.061l-.706.707a.75.75 0 1 1-1.06-1.06zM12.512.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V1a.75.75 0 0 1 .75-.75\"/>",
} as const;

export default function LightMode_1Light(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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