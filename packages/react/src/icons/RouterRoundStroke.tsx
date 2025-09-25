import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.255 14.005c3.525.064 4.257.65 4.257 2.994l-.01.445C17.395 19.56 16.419 20 12.512 20l-.743-.006c-3.524-.064-4.257-.65-4.257-2.994 0-2.5.834-3 5-3zm-.743 1.994c-1.019 0-1.748.032-2.282.1-.36.047-.562.104-.664.14-.025.12-.054.35-.054.76s.029.64.054.759c.102.037.303.094.664.14.534.07 1.263.101 2.282.101s1.749-.031 2.282-.1c.36-.047.561-.105.663-.141.026-.12.055-.349.055-.759s-.03-.64-.055-.76a3.3 3.3 0 0 0-.663-.14c-.533-.068-1.263-.1-2.282-.1\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M22.805 3.292a1 1 0 0 1 1.414 1.414l-5.572 5.571c4.747.607 5.865 2.36 5.865 6.722l-.006.533C24.38 22.904 22.2 24 12.512 24l-.914-.004C2.686 23.924.641 22.731.518 17.532L.512 17c0-4.362 1.119-6.115 5.864-6.722l-5.57-5.57a1 1 0 0 1 1.413-1.415l6.775 6.775a79 79 0 0 1 3.518-.068c1.304 0 2.473.02 3.518.067zM12.512 12c-2.477 0-4.377.073-5.844.258-1.482.187-2.362.47-2.898.782-.46.268-.724.588-.913 1.099-.22.595-.345 1.478-.345 2.861s.125 2.267.345 2.861c.189.511.453.83.913 1.099.536.313 1.416.596 2.898.782 1.467.185 3.367.258 5.844.258s4.377-.073 5.844-.258c1.483-.186 2.362-.47 2.898-.782.46-.268.725-.588.913-1.099.22-.594.345-1.478.345-2.86 0-1.384-.125-2.267-.344-2.862-.19-.51-.454-.83-.914-1.099-.536-.313-1.415-.595-2.898-.782-1.467-.185-3.366-.258-5.844-.258\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.065 6.105c2.8-1.4 6.095-1.4 8.894 0a1 1 0 0 1-.894 1.789 7.94 7.94 0 0 0-7.106 0 1 1 0 0 1-.894-1.79M6.196 2.05a19.98 19.98 0 0 1 12.633 0 1 1 0 0 1-.633 1.897 17.98 17.98 0 0 0-11.367 0 1 1 0 0 1-.633-1.896\"/>",
  light: "",
} as const;

export default function RouterRoundStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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