import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 2c7 0 12 6 12 10s-5 10-12 10-12-6-12-10 5-10 12-10m0 2C9.601 4 7.074 5.247 5.258 6.956 3.383 8.721 2.512 10.73 2.512 12s.87 3.279 2.746 5.044C7.074 18.753 9.601 20 12.512 20s5.438-1.247 7.254-2.956c1.876-1.765 2.746-3.774 2.746-5.044s-.87-3.279-2.746-5.044C17.95 5.247 15.423 4 12.512 4\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function EyeOpenEyeViewStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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