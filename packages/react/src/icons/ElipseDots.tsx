import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M32 106.666c17.778 0 21.334 3.556 21.334 21.333 0 17.778-3.556 21.334-21.334 21.334s-21.333-3.556-21.333-21.334S14.223 106.666 32 106.666M128 106.666c17.778 0 21.334 3.556 21.334 21.333 0 17.778-3.556 21.334-21.334 21.334s-21.333-3.556-21.333-21.334 3.556-21.333 21.333-21.333M224 106.666c17.778 0 21.334 3.556 21.334 21.333 0 17.778-3.556 21.334-21.334 21.334s-21.333-3.556-21.333-21.334 3.556-21.333 21.333-21.333\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M32 106.666c17.777 0 21.333 3.556 21.333 21.333 0 17.778-3.556 21.334-21.334 21.334s-21.333-3.556-21.333-21.334 3.556-21.333 21.333-21.333M127.999 106.666c17.778 0 21.334 3.556 21.334 21.333 0 17.778-3.556 21.334-21.334 21.334s-21.333-3.556-21.333-21.334 3.556-21.333 21.333-21.333M223.999 106.666c17.778 0 21.334 3.556 21.334 21.333 0 17.778-3.556 21.334-21.334 21.334s-21.333-3.556-21.333-21.334 3.556-21.333 21.333-21.333\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M32 112c13.333 0 16 2.667 16 16s-2.667 16-16 16-16-2.667-16-16 2.667-16 16-16M128 112c13.333 0 16 2.667 16 16s-2.667 16-16 16-16-2.667-16-16 2.667-16 16-16M224 112c13.333 0 16 2.667 16 16s-2.667 16-16 16-16-2.667-16-16 2.667-16 16-16\"/>",
} as const;

export default function ElipseDots(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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