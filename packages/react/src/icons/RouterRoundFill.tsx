import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M22.805 3.292a1 1 0 0 1 1.414 1.414l-5.572 5.571c4.747.607 5.865 2.36 5.865 6.722 0 5.833-2 7-12 7s-12-1.167-12-7c0-4.362 1.119-6.115 5.864-6.722l-5.57-5.57a1 1 0 0 1 1.413-1.415l6.775 6.775a79 79 0 0 1 3.518-.068c1.304 0 2.473.02 3.518.067zM12.512 15c-3.333 0-4 .334-4 2 0 1.667.667 2 4 2s4-.333 4-2c0-1.666-.667-2-4-2\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M8.065 6.105c2.8-1.4 6.095-1.4 8.894 0a1 1 0 0 1-.894 1.789 7.94 7.94 0 0 0-7.106 0 1 1 0 0 1-.894-1.79M6.196 2.05a19.98 19.98 0 0 1 12.633 0 1 1 0 0 1-.633 1.897 17.98 17.98 0 0 0-11.367 0 1 1 0 0 1-.633-1.896\"/>",
  regular: "",
  light: "",
} as const;

export default function RouterRoundFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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