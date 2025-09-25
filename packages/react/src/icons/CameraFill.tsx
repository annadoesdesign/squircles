import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.5 11c2.5 0 3 .5 3 3s-.5 3-3 3-3-.5-3-3 .5-3 3-3\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.5 1c4.165 0 5.95.68 6.63 3.495q.752.165 1.375.398A1 1 0 0 1 22.5 5v1q0 .042-.004.084c1.56 1.484 2.016 3.941 2.016 7.916 0 8.333-2 10-12 10s-12-1.667-12-10c0-6.003 1.038-8.546 5.356-9.499C6.548 1.681 8.333 1 12.5 1m.012 8c-4.166 0-5 .833-5 5s.834 5 5 5 5-.833 5-5-.833-5-5-5\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function CameraFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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