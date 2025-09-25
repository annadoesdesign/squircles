import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.512 0c8.334 0 10 .833 10 5 0 2.545-.622 3.844-3.006 4.472q.006.256.006.528c0 4.7-1.03 5.865-6 5.987V23a1 1 0 1 1-2 0v-7.013c-4.969-.123-6-1.287-6-5.987q0-.271.005-.528C3.134 8.844 2.512 7.545 2.512 5c0-4.167 1.667-5 10-5\"/>",
  regular: "",
  light: "",
} as const;

export default function PinLocationSaveFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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