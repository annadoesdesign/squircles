import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.13 2.534a6.98 6.98 0 0 1 9.822 1.093c2.41 3.019 1.876 9.28-.44 12.373l-.231.297c-2.461 3.049-7.154 5.472-9.002 6.349-.432.205-.917.23-1.362.076l-.188-.077c-1.845-.878-6.526-3.3-8.986-6.348L2.513 16C.196 12.907-.328 6.646 2.084 3.627a6.98 6.98 0 0 1 9.822-1.093l.597.466zm-2.162 1.171a5.48 5.48 0 0 0-7.71.859C2.371 5.672 1.914 7.567 2.023 9.71c.108 2.124.758 4.148 1.689 5.39 1.035 1.385 2.691 2.705 4.406 3.82a38 38 0 0 0 3.93 2.21l1.263-3.157a2.25 2.25 0 0 0-.077-1.842l-.727-1.454a3.75 3.75 0 0 1 0-3.354l.727-1.454a2.25 2.25 0 0 0 .077-1.842l-1.474-3.684a1.5 1.5 0 0 1-.257-.16l-.597-.466zm10.812.859a5.48 5.48 0 0 0-7.712-.859l-.021.017-.022.015-.626.466h-.002l1.308 3.268a3.75 3.75 0 0 1-.128 3.07l-.727 1.453a2.25 2.25 0 0 0 0 2.012l.727 1.454a3.75 3.75 0 0 1 .128 3.07l-.866 2.16a37 37 0 0 0 3.06-1.769c1.719-1.115 3.376-2.437 4.412-3.82.931-1.244 1.584-3.27 1.695-5.393.113-2.143-.342-4.037-1.226-5.144\" clip-rule=\"evenodd\"/>",
} as const;

export default function HeartBrokenLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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