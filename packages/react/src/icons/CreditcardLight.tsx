import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.512 15a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5zM15.512 15a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 2c10 0 12 1.667 12 10l-.006.762C24.38 20.436 22.2 22 12.512 22l-.914-.005C2.686 21.893.641 20.188.518 12.762L.512 12c0-8.333 2-10 12-10m10.429 7.747c-6.937-.66-13.92-.66-20.857 0H2.08c-.045.663-.069 1.41-.069 2.253 0 4.207.552 6.008 1.71 6.973.6.5 1.505.898 2.962 1.16 1.46.262 3.353.367 5.828.367s4.369-.105 5.828-.367c1.457-.262 2.363-.66 2.962-1.16 1.158-.965 1.71-2.766 1.71-6.973 0-.844-.024-1.59-.07-2.253zM12.512 3.5c-2.475 0-4.368.105-5.828.367-1.457.262-2.362.66-2.962 1.16-.727.607-1.216 1.543-1.478 3.199a111.5 111.5 0 0 1 20.536 0c-.263-1.656-.75-2.592-1.478-3.199-.6-.5-1.505-.898-2.962-1.16-1.46-.262-3.352-.367-5.828-.367\" clip-rule=\"evenodd\"/>",
} as const;

export default function CreditcardLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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