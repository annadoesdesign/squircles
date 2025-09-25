import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M11.906 2.534a6.98 6.98 0 0 0-9.822 1.093C-.327 6.647.195 12.907 2.51 16c2.386 3.187 7.312 5.739 9.217 6.645a1.8 1.8 0 0 0 1.55 0c1.907-.905 6.846-3.457 9.233-6.645 2.315-3.093 2.85-9.354.44-12.373a6.98 6.98 0 0 0-9.822-1.093L12.503 3z\"/>",
  regular: "",
  light: "",
} as const;

export default function HeartFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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