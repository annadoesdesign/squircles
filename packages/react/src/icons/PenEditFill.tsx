import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M22.512 22a1 1 0 0 1 0 2h-20a1 1 0 1 1 0-2zM19.036 11.938l-4.606 4.605a7.06 7.06 0 0 1-3.83 1.972l-2.748.458A2.01 2.01 0 0 1 5.54 16.66l.458-2.748a7.06 7.06 0 0 1 1.971-3.83l4.605-4.606zM19.01 1.014c.924.083 2.165.388 3.133 1.355.968.968 1.273 2.21 1.355 3.134.126 1.41-.62 2.593-1.426 3.4l-1.622 1.62-6.462-6.461L15.61 2.44c.807-.807 1.989-1.553 3.4-1.427\"/>",
  regular: "",
  light: "",
} as const;

export default function PenEditFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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