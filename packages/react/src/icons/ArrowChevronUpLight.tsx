import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20.962 16.6a.75.75 0 0 0 .15-1.05 26.3 26.3 0 0 0-7.501-6.766l-.713-.428a.75.75 0 0 0-.771 0l-.713.428a26.3 26.3 0 0 0-7.501 6.766.75.75 0 0 0 1.199.9 24.8 24.8 0 0 1 7.073-6.38l.327-.195.327.195a24.8 24.8 0 0 1 7.074 6.38.75.75 0 0 0 1.05.15\"/>",
} as const;

export default function ArrowChevronUpLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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