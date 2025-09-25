import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.512 20a2 2 0 1 1 0 4 2 2 0 0 1 0-4M17.512 20a2 2 0 1 1 0 4 2 2 0 0 1 0-4M10.512 8a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1M14.512 8a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1M18.512 8a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M1.512 0a5 5 0 0 1 4.656 3.179C7.528 2.314 10.004 2 14.512 2l.908.005c9.092.096 9.092 1.717 9.092 7.207 0 5.667-2.222 9.788-10 9.788l-.713-.012c-7.201-.247-9.287-4.286-9.287-9.776V5a3 3 0 0 0-3-3 1 1 0 0 1 0-2m13 4c-2.473 0-4.215.097-5.454.303-1.255.208-1.762.493-1.978.682-.158.138-.327.365-.439 1.036-.123.743-.129 1.715-.129 3.19 0 2.63.526 4.494 1.586 5.7C9.113 16.066 10.961 17 14.512 17c3.552 0 5.4-.934 6.414-2.089 1.06-1.206 1.586-3.07 1.586-5.7 0-1.475-.005-2.447-.129-3.19-.111-.671-.281-.898-.438-1.036-.216-.189-.723-.474-1.979-.682C18.727 4.097 16.986 4 14.512 4\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function ShoppingCartStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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