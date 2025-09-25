import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.512 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.274.006C20.948.133 22.512 2.312 22.512 12l-.005.914C22.402 22.123 20.585 24 12.512 24l-.761-.006C4.076 23.867 2.512 21.688 2.512 12c0-10 1.667-12 10-12zM12.512 2c-4.22 0-5.788.57-6.589 1.53-.423.508-.798 1.32-1.051 2.73-.255 1.415-.36 3.272-.36 5.74s.105 4.325.36 5.74c.253 1.41.628 2.222 1.051 2.73.8.96 2.368 1.53 6.59 1.53 4.22 0 5.788-.57 6.588-1.53.423-.508.798-1.32 1.052-2.73.254-1.415.36-3.272.36-5.74s-.106-4.325-.36-5.74c-.254-1.41-.629-2.222-1.052-2.73-.8-.96-2.368-1.53-6.589-1.53\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function MouseStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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