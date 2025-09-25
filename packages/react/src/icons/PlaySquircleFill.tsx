import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m-2.49 6.127a1.123 1.123 0 0 0-1.486.696l-.033.126a25.8 25.8 0 0 0 0 10.102 1.123 1.123 0 0 0 1.518.822l.397-.158a37.4 37.4 0 0 0 8.543-4.8 1.143 1.143 0 0 0 0-1.83 37.4 37.4 0 0 0-8.543-4.8z\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function PlaySquircleFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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