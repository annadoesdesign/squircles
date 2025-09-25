import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M8.793 1.995c.12-.803-.628-1.517-1.352-1.15a12 12 0 0 0-3.044 2.212c-4.686 4.686-4.686 12.284 0 16.97 4.686 4.687 12.284 4.686 16.97 0a12 12 0 0 0 2.212-3.044c.367-.724-.348-1.471-1.15-1.352a11.98 11.98 0 0 1-10.254-3.382A11.98 11.98 0 0 1 8.793 1.995M18.635 3.584a.827.827 0 0 0-1.169 0q-.165.166-.25.384l-.299.778a.2.2 0 0 1-.12.12l-.778.3a1.1 1.1 0 0 0-.384.25.826.826 0 0 0 0 1.168 1.1 1.1 0 0 0 .384.25l.778.299a.2.2 0 0 1 .12.12l.3.778c.055.144.14.275.25.384a.827.827 0 0 0 1.168 0c.11-.109.194-.24.25-.384l.3-.778a.2.2 0 0 1 .12-.12l.777-.3c.144-.055.275-.14.384-.249a.827.827 0 0 0 0-1.169 1.1 1.1 0 0 0-.384-.249l-.778-.3a.2.2 0 0 1-.12-.12l-.3-.778a1.1 1.1 0 0 0-.249-.384\"/>",
  regular: "",
  light: "",
} as const;

export default function DarkModeFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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