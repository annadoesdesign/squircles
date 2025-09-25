import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0a6 6 0 0 1 5.831 4.587 4.78 4.78 0 0 1 3.921 3.685l.465 2.092c.52 2.343.783 4.738.783 7.138a6.08 6.08 0 0 1-5.583 6.059l-1.07.087c-2.893.236-5.8.236-8.693 0l-1.07-.087a6.08 6.08 0 0 1-5.584-6.059c0-2.4.263-4.794.783-7.138l.465-2.092a4.78 4.78 0 0 1 3.92-3.685A6 6 0 0 1 12.512 0m-4 9a1 1 0 0 1-2 0V7.27a1.998 1.998 0 0 0 1 3.73 2 2 0 0 0 1-3.73zm10 0a1 1 0 1 1-2 0V7.27a1.998 1.998 0 0 0 1 3.73 2 2 0 0 0 1-3.73zm-6-7a4 4 0 0 0-3.664 2.395 56 56 0 0 1 7.327 0A4 4 0 0 0 12.512 2\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function BagShoppingFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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