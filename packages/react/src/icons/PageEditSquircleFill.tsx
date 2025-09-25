import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m2.49 8.129a1 1 0 1 0-.98 1.742 8.23 8.23 0 0 1 3.39 3.629 8.23 8.23 0 0 1-3.39 3.629 1 1 0 1 0 .98 1.742 10.23 10.23 0 0 0 4.333-4.76l.091-.205a1 1 0 0 0 0-.812l-.09-.204a10.23 10.23 0 0 0-4.334-4.761m-3.619-2.62a1 1 0 0 0-1.361-.38 10.23 10.23 0 0 0-4.333 4.76l-.09.205a1 1 0 0 0 0 .812l.09.204a10.23 10.23 0 0 0 4.333 4.761 1 1 0 1 0 .98-1.742 8.23 8.23 0 0 1-3.39-3.629 8.23 8.23 0 0 1 3.39-3.629 1 1 0 0 0 .381-1.361\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function PageEditSquircleFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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