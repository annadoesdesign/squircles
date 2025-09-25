import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 13c6.85 0 9.302 3.283 9.864 7.694.069.539-.108 1.09-.53 1.43l-.172.133C19.866 23.599 16.991 24 12.512 24c-4.623 0-7.537-.428-9.333-1.876-.422-.34-.6-.891-.531-1.43C3.21 16.284 5.662 13 12.512 13m0 2c-3.12 0-4.904.745-5.959 1.686-1.016.906-1.627 2.237-1.89 4.05.547.371 1.326.684 2.493.904 1.347.253 3.086.36 5.356.36s4.01-.107 5.357-.36c1.167-.22 1.946-.533 2.493-.905-.263-1.812-.873-3.143-1.89-4.05-1.055-.94-2.84-1.685-5.96-1.685M12.512 1a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function UserPersonAccountStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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