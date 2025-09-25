import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"m20.036 15.938-5.606 5.605a7.06 7.06 0 0 1-3.83 1.972l-2.748.458A2.01 2.01 0 0 1 5.54 21.66l.458-2.748a7.06 7.06 0 0 1 1.971-3.83l5.605-5.606zM19.01 6.014c.924.082 2.165.387 3.133 1.355s1.273 2.209 1.355 3.134c.127 1.41-.62 2.592-1.426 3.4l-.622.62-6.462-6.461.622-.622c.807-.807 1.988-1.552 3.4-1.426M5.512 0a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0V6h-3a1 1 0 0 1 0-2h3V1a1 1 0 0 1 1-1\"/>",
  regular: "",
  light: "",
} as const;

export default function PenAddFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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