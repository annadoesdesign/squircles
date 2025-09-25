import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M14.03.187A1 1 0 0 1 15.613 1v7h5.78c.821 0 1.376.841 1.052 1.597a33.5 33.5 0 0 1-8.74 12.025l-2.433 2.131a1 1 0 0 1-1.655-.843l.802-8.91H3.512a1 1 0 0 1-.863-1.506A39 39 0 0 1 13.632.471z\"/>",
  regular: "",
  light: "",
} as const;

export default function LightningBoltFastQuickFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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