import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M16.388 3.008a1 1 0 0 1 1.116.868q.177 1.418.291 2.84 1.424.115 2.841.292a1 1 0 1 1-.248 1.984 64 64 0 0 0-2.46-.258 66 66 0 0 1 0 6.53q1.23-.104 2.46-.256a1 1 0 1 1 .248 1.984q-1.418.176-2.84.291a65 65 0 0 1-.292 2.841 1 1 0 1 1-1.984-.248q.152-1.23.257-2.46a66 66 0 0 1-6.53 0q.104 1.23.257 2.46a1 1 0 1 1-1.984.248 66 66 0 0 1-.292-2.84 66 66 0 0 1-2.84-.292 1 1 0 1 1 .248-1.984q1.23.152 2.46.257a66 66 0 0 1 0-6.53q-1.23.104-2.46.257a1 1 0 0 1-.248-1.984 66 66 0 0 1 2.84-.292q.115-1.422.292-2.84a1 1 0 0 1 1.984.248 64 64 0 0 0-.257 2.46 66 66 0 0 1 6.53 0 63 63 0 0 0-.257-2.46 1 1 0 0 1 .868-1.116m-.47 5.587a64 64 0 0 0-6.811 0 64 64 0 0 0 0 6.81c2.269.122 4.542.122 6.81 0a64 64 0 0 0 0-6.81\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function HashtagPoundStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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