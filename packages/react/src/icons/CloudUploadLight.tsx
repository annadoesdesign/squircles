import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.257 9.045a.75.75 0 0 1 .59.034l.736.367a9.5 9.5 0 0 1 2.46 1.774.75.75 0 1 1-1.061 1.06 8 8 0 0 0-1.72-1.304v5.774a.75.75 0 0 1-1.5 0v-5.774a8 8 0 0 0-1.72 1.304.75.75 0 0 1-1.06-1.06 9.5 9.5 0 0 1 2.46-1.774l.735-.367z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M10.262 1a7.75 7.75 0 0 1 7.556 6.024 6.75 6.75 0 0 1 6.194 6.726c0 2.892-1.835 5.765-4.5 6.707a21.73 21.73 0 0 1-14.5 0c-2.664-.942-4.5-3.815-4.5-6.707 0-1.877.767-3.577 2.003-4.8l-.003-.2A7.75 7.75 0 0 1 10.262 1m0 1.5A6.25 6.25 0 0 0 4.03 9.207a.75.75 0 0 1-.25.615 5.24 5.24 0 0 0-1.767 3.928c0 2.333 1.504 4.587 3.5 5.293a20.23 20.23 0 0 0 13.5 0c1.996-.706 3.5-2.96 3.5-5.293 0-2.9-2.35-5.25-5.25-5.25H17.2a.75.75 0 0 1-.751-.644A6.25 6.25 0 0 0 10.262 2.5\" clip-rule=\"evenodd\"/>",
} as const;

export default function CloudUploadLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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