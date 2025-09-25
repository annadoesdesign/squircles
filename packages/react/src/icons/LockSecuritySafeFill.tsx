import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c4 0 8 1.5 8 9q0 .204-.003.401c1.563 1.152 2.003 3.17 2.003 6.599 0 6.667-1.666 8-10 8s-10-1.333-10-8c0-3.438.443-5.457 2.015-6.607l-.013.008L4.512 9c0-7.5 4-9 8-9m0 13c-2.5 0-3 .5-3 3s.5 3 3 3 3-.5 3-3-.5-3-3-3M6.52 8.507C7.973 8.128 9.92 8 12.512 8s4.539.13 5.991.508c-.082-3.075-.939-4.555-1.808-5.316C15.73 2.35 14.318 2 12.512 2s-3.218.349-4.182 1.192c-.87.76-1.727 2.24-1.81 5.315\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function LockSecuritySafeFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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