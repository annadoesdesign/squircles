import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M7.441.847c.724-.368 1.472.347 1.353 1.15l-.047.34a11.98 11.98 0 0 0 3.428 9.913l.266.257a11.98 11.98 0 0 0 9.986 3.124c.803-.12 1.52.628 1.152 1.352l-.218.41a12 12 0 0 1-1.657 2.286l-.336.35c-4.613 4.612-12.048 4.684-16.75.215l-.22-.216C-.217 15.415-.289 7.98 4.18 3.28l.216-.221A12 12 0 0 1 7.441.847M6.663 3.71q-.442.351-.852.76l-.354.374C1.91 8.77 2.028 14.83 5.81 18.613c3.906 3.905 10.238 3.905 14.143 0q.41-.41.76-.851a13.95 13.95 0 0 1-9.952-4.098 13.96 13.96 0 0 1-4.1-9.953\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20.123 9.39a.55.55 0 0 1 .78 0c.072.072.128.16.165.255l.2.519a.14.14 0 0 0 .08.081l.519.2a.7.7 0 0 1 .256.165.55.55 0 0 1 0 .78.7.7 0 0 1-.256.166l-.519.2a.14.14 0 0 0-.08.08l-.2.518a.7.7 0 0 1-.166.256.55.55 0 0 1-.78 0 .7.7 0 0 1-.166-.256l-.2-.518a.14.14 0 0 0-.08-.08l-.518-.2a.7.7 0 0 1-.256-.166.55.55 0 0 1 0-.78.7.7 0 0 1 .256-.166l.518-.199a.14.14 0 0 0 .08-.081l.2-.519a.7.7 0 0 1 .167-.255M20.928.585a.827.827 0 0 1 1.168 0c.11.109.195.24.25.384l.3.778a.21.21 0 0 0 .12.12l.778.299q.218.084.383.25a.827.827 0 0 1 0 1.169c-.109.109-.24.194-.383.249l-.778.3a.2.2 0 0 0-.12.12l-.3.778a1.1 1.1 0 0 1-.25.384.827.827 0 0 1-1.169 0 1.1 1.1 0 0 1-.249-.384l-.3-.778a.2.2 0 0 0-.12-.12l-.778-.3a1.1 1.1 0 0 1-.384-.25.827.827 0 0 1 0-1.168q.166-.166.384-.25l.779-.299a.2.2 0 0 0 .12-.12l.3-.778c.055-.144.14-.275.248-.384M13.123 1.39a.55.55 0 0 1 .78 0c.072.072.128.16.165.255l.2.519a.14.14 0 0 0 .08.081l.519.2a.7.7 0 0 1 .256.165.55.55 0 0 1 0 .78.7.7 0 0 1-.256.167l-.519.199a.14.14 0 0 0-.08.08l-.2.518a.7.7 0 0 1-.166.256.55.55 0 0 1-.78 0 .7.7 0 0 1-.166-.256l-.2-.518a.14.14 0 0 0-.08-.08l-.518-.2a.7.7 0 0 1-.256-.166.55.55 0 0 1 0-.78.7.7 0 0 1 .256-.166l.519-.199a.14.14 0 0 0 .08-.081l.199-.519a.7.7 0 0 1 .167-.255\"/>",
  light: "",
} as const;

export default function DarkModeSparklesStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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