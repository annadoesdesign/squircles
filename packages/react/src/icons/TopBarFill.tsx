import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M.598 8.924a168.5 168.5 0 0 1 23.827 0c.06.93.087 1.952.087 3.076 0 10-2 12-12 12s-12-2-12-12c0-1.124.027-2.146.086-3.076M7.756.243c.38 2.096.322 4.25-.17 6.328q-3.393.1-6.782.332C1.446 2.577 3.296.823 7.756.243M12.512 0c7.996 0 10.875 1.279 11.708 6.903a171 171 0 0 0-14.578-.377c.439-2.13.476-4.32.112-6.46A51 51 0 0 1 12.512 0\"/>",
  regular: "",
  light: "",
} as const;

export default function TopBarFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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