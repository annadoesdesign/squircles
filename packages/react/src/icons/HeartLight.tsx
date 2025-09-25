import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.13 2.534a6.98 6.98 0 0 1 9.822 1.093c2.41 3.019 1.876 9.28-.44 12.373l-.231.297c-2.461 3.049-7.154 5.472-9.002 6.349-.432.205-.917.23-1.362.076l-.188-.077c-1.845-.878-6.526-3.3-8.986-6.348L2.513 16C.196 12.907-.328 6.646 2.084 3.627a6.98 6.98 0 0 1 9.822-1.093l.597.466zm8.65 2.03a5.48 5.48 0 0 0-7.712-.859l-.021.017-.022.015-.626.466a1.5 1.5 0 0 1-1.818-.02l-.597-.466-.015-.012a5.48 5.48 0 0 0-7.711.859C2.372 5.672 1.915 7.567 2.024 9.71c.108 2.124.758 4.148 1.689 5.39 1.036 1.385 2.691 2.705 4.406 3.82a38 38 0 0 0 4.255 2.37.3.3 0 0 0 .262 0 38 38 0 0 0 4.263-2.369c1.719-1.115 3.377-2.437 4.412-3.82.932-1.244 1.584-3.27 1.696-5.393.112-2.143-.343-4.037-1.227-5.144\"/>",
} as const;

export default function HeartLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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