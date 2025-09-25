import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.182 4.311A2.306 2.306 0 0 1 4.824 1.67l.62.1A50.4 50.4 0 0 1 23.46 8.347c1.106.665.89 2.327-.347 2.69l-7.242 2.114a3.25 3.25 0 0 0-2.208 2.208l-2.115 7.242c-.362 1.238-2.024 1.452-2.69.347A50.4 50.4 0 0 1 2.283 4.932zm2.404-1.16a.806.806 0 0 0-.923.923l.1.62a48.9 48.9 0 0 0 6.358 17.442l2.103-7.197a4.75 4.75 0 0 1 3.227-3.227l7.197-2.103A48.9 48.9 0 0 0 5.206 3.251z\"/>",
} as const;

export default function CursorLeftLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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