import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.981.187A1 1 0 0 1 15.562 1v7h5.78c.822 0 1.376.841 1.052 1.597a33.5 33.5 0 0 1-8.74 12.025l-2.433 2.131a1 1 0 0 1-1.655-.843l.803-8.91H3.462a1 1 0 0 1-.863-1.506A39 39 0 0 1 13.583.471zm-.419 2.796A37 37 0 0 0 5.258 12h6.204a1 1 0 0 1 .997 1.09l-.677 7.514.556-.487A31.5 31.5 0 0 0 20.012 10h-5.45a1 1 0 0 1-1-1z\"/>",
  light: "",
} as const;

export default function LightningBoltFastQuickStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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