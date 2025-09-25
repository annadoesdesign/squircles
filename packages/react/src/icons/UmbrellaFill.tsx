import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.512 0a1 1 0 0 1 1 1v1.007c9.135.139 11 2.336 11 11.993 0 .884-1.5 1.286-2.226.781-1.825-1.268-4.605-1.716-8.774-1.774v7.521a3.472 3.472 0 0 1-6.578 1.553l-.316-.634a1 1 0 0 1 1.789-.894l.316.633a1.473 1.473 0 0 0 2.79-.658v-7.521c-4.17.058-6.95.506-8.775 1.774-.726.505-2.226.103-2.226-.781 0-9.657 1.865-11.854 11-11.993V1a1 1 0 0 1 1-1\"/>",
  regular: "",
  light: "",
} as const;

export default function UmbrellaFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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