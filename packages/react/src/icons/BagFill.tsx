import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M24.274 10.07c.17 1.108.238 2.408.238 3.93 0 8.333-2 10-12 10s-12-1.667-12-10c0-1.522.068-2.822.238-3.93A22.2 22.2 0 0 0 6.512 12.6V14a1 1 0 0 0 2 0v-.943c2.644.48 5.356.48 8 0V14a1 1 0 0 0 2 0v-1.401a22.2 22.2 0 0 0 5.762-2.529\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c3.554 0 5.084.843 5.673 4.322 3.074.472 4.734 1.542 5.572 3.703a20.3 20.3 0 0 1-5.354 2.522.999.999 0 0 0-1.89.453v.02c-2.64.529-5.361.529-8 0V11a1 1 0 0 0-1.892-.453 20.3 20.3 0 0 1-5.354-2.522c.838-2.16 2.498-3.23 5.57-3.703C7.425.842 8.957 0 12.511 0m0 2c-2.394 0-2.873.426-3.16.904-.152.253-.304.63-.435 1.198A54 54 0 0 1 12.512 4c1.335 0 2.528.03 3.592.102-.13-.569-.28-.945-.432-1.198-.287-.478-.766-.904-3.16-.904\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function BagFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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