import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 11a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M15.512 0a1 1 0 1 1 0 2h-2v2.01c7.468.14 9 2.001 9 9.99l-.005.762C22.402 22.436 20.585 24 12.512 24l-.761-.005c-7.427-.102-9.132-1.807-9.234-9.233L2.512 14c0-7.989 1.532-9.85 9-9.99V2h-2a1 1 0 1 1 0-2zm-3 6c-2.043 0-3.54.105-4.656.346-1.094.236-1.685.573-2.055.943s-.707.96-.943 2.055c-.24 1.116-.346 2.612-.346 4.656s.105 3.54.346 4.656c.236 1.094.573 1.685.943 2.055s.961.707 2.055.943c1.116.241 2.613.346 4.656.346 2.044 0 3.54-.105 4.657-.346 1.093-.236 1.684-.573 2.054-.943s.707-.96.944-2.055c.24-1.116.345-2.612.345-4.656s-.105-3.54-.346-4.656c-.236-1.094-.573-1.685-.943-2.055s-.96-.707-2.054-.943C16.052 6.105 14.556 6 12.512 6\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function TimeTrackerStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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