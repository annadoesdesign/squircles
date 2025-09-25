import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12 0 1.11-.026 2.12-.084 3.04-6.719.279-8.597 2.158-8.876 8.877a49 49 0 0 1-3.04.083c-10 0-12-2-12-12s2-12 12-12m-6 12a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm0-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M24.227 17.05c-.62 4.264-2.401 6.045-6.665 6.666.057-1.152.166-2.097.335-2.88.265-1.227.649-1.916 1.092-2.36.443-.442 1.132-.827 2.36-1.091.782-.17 1.727-.278 2.878-.335\"/>",
  regular: "",
  light: "",
} as const;

export default function NotesWrittenFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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