import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.512 16a1 1 0 1 1 0 2h-14a1 1 0 1 1 0-2z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M22.805 3.293a1 1 0 1 1 1.414 1.414l-5.572 5.571c4.747.607 5.865 2.36 5.865 6.722l-.006.533C24.38 22.905 22.2 24 12.512 24l-.914-.004C2.686 23.924.641 22.732.518 17.533L.512 17c0-4.362 1.119-6.115 5.864-6.722L.806 4.707a1 1 0 1 1 1.413-1.414l6.775 6.774A79 79 0 0 1 12.512 10c1.304 0 2.473.02 3.518.067zM12.512 12c-2.477 0-4.377.073-5.844.258-1.482.186-2.362.47-2.898.782-.46.268-.724.588-.913 1.099-.22.595-.345 1.478-.345 2.861s.125 2.267.345 2.861c.189.511.453.83.913 1.099.536.313 1.416.596 2.898.782 1.467.185 3.367.258 5.844.258s4.377-.073 5.844-.258c1.483-.186 2.362-.47 2.898-.782.46-.268.725-.588.913-1.099.22-.594.345-1.478.345-2.861s-.125-2.267-.344-2.861c-.19-.511-.454-.83-.914-1.099-.536-.313-1.415-.596-2.898-.782-1.467-.185-3.366-.258-5.844-.258\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 4a5 5 0 0 1 3.535 1.465 1 1 0 1 1-1.414 1.414 3 3 0 0 0-4.242 0 1 1 0 0 1-1.414-1.414A5 5 0 0 1 12.512 4\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 0a9 9 0 0 1 6.365 2.636 1 1 0 0 1-1.415 1.414 7 7 0 0 0-7.628-1.517A7 7 0 0 0 7.562 4.05a1 1 0 1 1-1.414-1.414A9 9 0 0 1 12.512 0\"/>",
  light: "",
} as const;

export default function RouterStraightStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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