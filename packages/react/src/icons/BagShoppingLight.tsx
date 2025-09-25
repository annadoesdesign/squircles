import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512.25a5.75 5.75 0 0 1 5.626 4.563 4.53 4.53 0 0 1 3.882 3.514l.465 2.092c.517 2.325.777 4.7.777 7.083a5.83 5.83 0 0 1-5.353 5.809l-1.07.087c-2.88.236-5.774.236-8.653 0l-1.07-.087a5.83 5.83 0 0 1-5.354-5.809c0-2.382.26-4.758.778-7.083l.464-2.092a4.53 4.53 0 0 1 3.881-3.514A5.75 5.75 0 0 1 12.512.25m4.25 5.941a54 54 0 0 0-8.5 0V9a.75.75 0 0 1-1.5 0V6.354A3.03 3.03 0 0 0 4.47 8.652l-.465 2.092a31 31 0 0 0-.742 6.758c0 2.254 1.73 4.13 3.976 4.314l1.071.087c2.798.23 5.609.23 8.406 0l1.072-.087a4.33 4.33 0 0 0 3.975-4.314c0-2.273-.249-4.54-.742-6.758l-.465-2.092a3.03 3.03 0 0 0-2.293-2.298V9a.75.75 0 0 1-1.5 0zm-4.25-4.441a4.25 4.25 0 0 0-4.037 2.92 55.6 55.6 0 0 1 8.073 0 4.25 4.25 0 0 0-4.036-2.92\" clip-rule=\"evenodd\"/>",
} as const;

export default function BagShoppingLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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