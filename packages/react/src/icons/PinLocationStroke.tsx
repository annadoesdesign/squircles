import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.519 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.514 0c8.333 0 10.995 5 10 12-.796 5.6-6.719 9.92-9.056 11.424l-.11.066a1.73 1.73 0 0 1-1.667 0l-.112-.066C9.234 21.919 3.318 17.6 2.514 12c-1.005-7 1.666-12 10-12m0 2C8.738 2 6.698 3.118 5.615 4.57c-1.135 1.524-1.588 3.9-1.122 7.146.317 2.209 1.68 4.32 3.424 6.153 1.65 1.734 3.482 3.053 4.597 3.781 1.115-.728 2.95-2.046 4.6-3.78 1.744-1.833 3.105-3.944 3.42-6.151.461-3.248.01-5.626-1.126-7.15C18.327 3.117 16.29 2 12.514 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function PinLocationStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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