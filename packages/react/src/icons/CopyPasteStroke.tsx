import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M11.274.005c5.474.075 7.837 1.022 8.743 4.488l-.036-.009c3.655.94 4.531 3.476 4.531 9.516 0 8.333-1.666 10-10 10-6.02 0-8.56-.87-9.507-4.496C1.54 18.598.592 16.236.517 10.762L.512 10c0-8.333 1.667-10 10-10zM14.512 6c-2.043 0-3.54.105-4.656.346-1.094.236-1.685.573-2.055.943s-.707.96-.943 2.055c-.24 1.116-.346 2.612-.346 4.656s.105 3.54.346 4.656c.236 1.094.573 1.685.943 2.055s.961.707 2.055.943c1.116.241 2.613.346 4.656.346 2.044 0 3.54-.105 4.657-.346 1.093-.236 1.684-.573 2.054-.943s.707-.96.944-2.055c.24-1.116.345-2.612.345-4.656s-.105-3.54-.346-4.656c-.236-1.094-.573-1.685-.943-2.055s-.96-.707-2.054-.943C18.052 6.105 16.556 6 14.512 6m-4-4c-2.043 0-3.54.105-4.656.346-1.094.236-1.685.573-2.055.943s-.707.96-.943 2.055C2.618 6.46 2.512 7.956 2.512 10s.105 3.54.346 4.656c.236 1.094.573 1.685.943 2.055.2.2.465.388.837.558l.004.04c-.091-.965-.13-2.062-.13-3.309 0-8.333 1.667-10 10-10 1.247 0 2.345.039 3.31.13l-.041-.004a2.8 2.8 0 0 0-.558-.837c-.37-.37-.96-.707-2.054-.943C14.052 2.105 12.556 2 10.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function CopyPasteStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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