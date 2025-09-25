import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M10.512 7.75c3.722 0 8.215-.049 9.584 3.283l.325.053c3.287.566 4.092 1.98 4.092 5.164l-.005.419c-.084 3.362-1.255 4.589-5.807 4.95-1.46 1.633-3.984 2.131-8.189 2.131-7.926 0-9.88-1.767-9.994-9.578l-.006-.774c0-5.718 5.552-5.648 10-5.648m0 1.5c-2.313 0-4.516.002-6.162.592-.778.279-1.33.658-1.695 1.153-.36.487-.643 1.224-.643 2.403 0 2.082.114 3.66.378 4.87.26 1.196.648 1.938 1.133 2.44.989 1.024 2.859 1.542 6.99 1.542 4.13 0 6-.518 6.989-1.542.484-.502.872-1.244 1.132-2.44.264-1.21.378-2.789.378-4.87 0-1.18-.282-1.916-.642-2.403-.367-.495-.918-.874-1.696-1.153-1.645-.59-3.849-.592-6.162-.592m9.964 3.38q.036.366.036.768l-.006.774c-.038 2.653-.291 4.609-.917 6.035q.044-.096.084-.196c1.1-.148 1.795-.36 2.243-.607.422-.232.652-.506.81-.909.183-.468.287-1.16.287-2.245 0-1.084-.104-1.777-.287-2.245-.158-.403-.388-.677-.81-.91-.328-.18-.788-.341-1.44-.474z\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.234.054a.75.75 0 0 1 .974.418l.17.424a5.73 5.73 0 0 1-.195 4.689.75.75 0 0 1-1.342-.67c.54-1.08.593-2.341.145-3.463l-.17-.424a.75.75 0 0 1 .418-.974M13.234.054a.75.75 0 0 1 .975.418l.17.424a5.73 5.73 0 0 1-.196 4.689.75.75 0 0 1-1.342-.67c.54-1.08.594-2.341.145-3.463l-.17-.424a.75.75 0 0 1 .418-.974\"/>",
} as const;

export default function CoffeeLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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