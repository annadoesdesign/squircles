import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M17.066 15.01c5.601.191 7.26 3.315 7.43 7.267a.9.9 0 0 1-.589.892l-.338.112c-1.728.535-4.025.719-7.057.719l-1.31-.013a39 39 0 0 1-2.19-.102q.165-.014.325-.03c-1.122.1-2.391.145-3.824.145l-1.174-.01c-2.46-.045-4.386-.245-5.884-.709l-.338-.112a.9.9 0 0 1-.59-.892C1.703 18.197 3.466 15 9.513 15l.554.01c1.154.04 2.14.205 2.98.475l-.036-.012c.965-.306 2.122-.473 3.5-.473zm.425 7.414a1 1 0 0 1 .006-.147zM9.513 17c-2.68 0-4.015.702-4.73 1.472-.632.678-1.032 1.672-1.191 3.047 1.378.332 3.271.481 5.92.481s4.543-.15 5.92-.481c-.159-1.375-.559-2.369-1.19-3.047-.716-.77-2.049-1.472-4.73-1.472m6.999 0q-.468 0-.883.028c1.216 1.255 1.729 2.998 1.851 4.963 2.151-.033 3.748-.182 4.952-.472-.16-1.375-.56-2.369-1.19-3.047-.717-.77-2.05-1.472-4.73-1.472M17.513 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M8.513 1a5 5 0 1 1-.001 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function UsersNewStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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