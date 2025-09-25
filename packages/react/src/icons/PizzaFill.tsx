import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M9.512 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c6.111 0 11 2.4 11 6 0 .803-.149 1.795-.38 2.852l-.12.514c-.696 2.816-1.975 5.41-3.601 7.806l-.11.158-.039.057-.141.205q-.295.418-.602.829-.051.065-.102.132l-.307.398q-.136.176-.275.35-.252.319-.512.63h-.002q-.04.049-.08.098a47 47 0 0 1-2.786 3.029l-.21.188a2.74 2.74 0 0 1-1.963.607 2.74 2.74 0 0 1-1.503-.607l-.21-.188c-3.872-3.873-7.247-8.392-8.556-13.692l-.12-.514c-.232-1.057-.38-2.05-.38-2.852 0-3.6 4.888-6 11-6m2.406 6.813a18.8 18.8 0 0 0-4.816 0 12.5 12.5 0 0 0-5.915 2.924 20.4 20.4 0 0 0 1.072 2.805q.336.717.723 1.417c1.526 2.761 3.63 5.312 6.002 7.685a.747.747 0 0 0 1.056 0q1.188-1.187 2.268-2.435l.214-.25a3.5 3.5 0 0 1 3.877-5.672 21 21 0 0 0 1.437-3.55 12.5 12.5 0 0 0-5.917-2.924\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function PizzaFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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