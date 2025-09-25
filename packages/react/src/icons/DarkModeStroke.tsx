import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M8.793 1.997c.12-.803-.628-1.518-1.352-1.15a12 12 0 0 0-3.044 2.21c-4.686 4.686-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0a12 12 0 0 0 1.995-2.635l.216-.41c.368-.723-.347-1.47-1.15-1.352a11.98 11.98 0 0 1-10.253-3.38 11.98 11.98 0 0 1-3.428-9.914zM6.663 3.71a13.96 13.96 0 0 0 4.098 9.954 13.95 13.95 0 0 0 9.952 4.097q-.35.443-.76.852c-3.905 3.905-10.236 3.905-14.141 0s-3.905-10.237 0-14.142q.41-.41.851-.76\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18.635 3.585a.827.827 0 0 0-1.169 0c-.109.109-.194.24-.25.383l-.299.779a.2.2 0 0 1-.12.12l-.778.299a1.1 1.1 0 0 0-.384.25.827.827 0 0 0 0 1.169q.167.164.384.249l.778.3a.2.2 0 0 1 .12.12l.3.778c.055.144.14.275.25.384a.827.827 0 0 0 1.168 0q.166-.166.25-.384l.299-.779a.2.2 0 0 1 .12-.12l.778-.3c.144-.055.275-.14.384-.248a.827.827 0 0 0 0-1.17 1.1 1.1 0 0 0-.384-.25l-.778-.298a.2.2 0 0 1-.12-.12l-.3-.779a1.1 1.1 0 0 0-.249-.383\"/>",
  light: "",
} as const;

export default function DarkModeStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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