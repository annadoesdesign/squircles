import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M22.805 3.293a1 1 0 1 1 1.414 1.414l-5.572 5.571c4.747.607 5.865 2.36 5.865 6.722 0 5.833-2 7-12 7s-12-1.167-12-7c0-4.362 1.119-6.115 5.864-6.722L.806 4.707a1 1 0 1 1 1.413-1.414l6.775 6.774A79 79 0 0 1 12.512 10c1.304 0 2.473.02 3.518.067zM5.512 16a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M12.512 4a5 5 0 0 1 3.535 1.465 1 1 0 1 1-1.414 1.414 3 3 0 0 0-4.242 0 1 1 0 0 1-1.414-1.414A5 5 0 0 1 12.512 4\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M12.512 0a9 9 0 0 1 6.365 2.636 1 1 0 0 1-1.415 1.414 7 7 0 0 0-7.628-1.517A7 7 0 0 0 7.562 4.05a1 1 0 1 1-1.414-1.414A9 9 0 0 1 12.512 0\"/>",
  regular: "",
  light: "",
} as const;

export default function RouterStraightFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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