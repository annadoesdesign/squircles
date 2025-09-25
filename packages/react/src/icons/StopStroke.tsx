import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20.512 12c0-2.044-.105-3.54-.346-4.656-.236-1.094-.573-1.685-.943-2.055s-.96-.707-2.054-.943C16.052 4.105 14.556 4 12.512 4s-3.54.105-4.656.346c-1.094.236-1.685.573-2.055.943s-.707.96-.943 2.055C4.618 8.46 4.512 9.956 4.512 12s.105 3.54.346 4.656c.236 1.094.573 1.685.943 2.055s.961.707 2.055.943c1.116.241 2.613.346 4.656.346v2l-.761-.005c-7.427-.102-9.132-1.807-9.234-9.233L2.512 12c0-8.333 1.667-10 10-10l.762.005c7.674.106 9.238 1.922 9.238 9.995l-.005.762C22.402 20.436 20.585 22 12.512 22v-2c2.044 0 3.54-.105 4.657-.346 1.093-.236 1.684-.573 2.054-.943s.707-.96.944-2.055c.24-1.116.345-2.612.345-4.656\"/>",
  light: "",
} as const;

export default function StopStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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