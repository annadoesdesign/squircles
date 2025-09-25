import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.012 21a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17.012 21a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M10.512 8.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75M14.512 8.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75M18.512 8.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M1.262.25a4.75 4.75 0 0 1 4.5 3.23C7.012 2.386 9.512 2 14.512 2l.908.005c9.092.096 9.092 1.717 9.092 7.207 0 5.667-2.222 9.788-10 9.788l-.713-.012c-7.201-.247-9.287-4.286-9.287-9.776V5a3.25 3.25 0 0 0-3.25-3.25.75.75 0 1 1 0-1.5m13.25 3.25c-2.48 0-4.255.097-5.536.31-1.293.214-1.907.52-2.226.8-.274.24-.48.591-.602 1.33-.131.793-.136 1.81-.136 3.272 0 2.68.533 4.69 1.71 6.03 1.143 1.3 3.154 2.258 6.79 2.258s5.647-.958 6.79-2.259c1.177-1.34 1.71-3.349 1.71-6.03 0-1.46-.004-2.478-.136-3.27-.122-.74-.328-1.092-.602-1.332-.319-.278-.933-.585-2.226-.8-1.28-.212-3.056-.309-5.536-.309\" clip-rule=\"evenodd\"/>",
} as const;

export default function ShoppingCartLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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