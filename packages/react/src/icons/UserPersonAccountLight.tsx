import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 13c6.85 0 9.3 3.283 9.864 7.694.068.539-.108 1.09-.53 1.43l-.172.133C19.865 23.599 16.99 24 12.512 24c-4.624 0-7.537-.428-9.334-1.876-.37-.298-.55-.757-.544-1.227l.013-.203C3.21 16.284 5.662 13 12.512 13m0 1.5c-3.196 0-5.116.765-6.292 1.813s-1.83 2.578-2.085 4.57c-.005.041 0 .072.004.088.639.508 1.55.901 2.923 1.16 1.394.262 3.169.369 5.45.369 2.28 0 4.056-.107 5.45-.37 1.373-.257 2.283-.651 2.922-1.16a.2.2 0 0 0 .004-.086c-.254-1.993-.908-3.523-2.085-4.571-1.176-1.048-3.096-1.813-6.292-1.813M12.512 1a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7\" clip-rule=\"evenodd\"/>",
} as const;

export default function UserPersonAccountLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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