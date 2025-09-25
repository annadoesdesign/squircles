import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M16.512 15c6.047 0 7.81 3.198 7.985 7.277a.9.9 0 0 1-.59.892c-1.763.621-4.161.831-7.395.831a46 46 0 0 1-3.495-.115q.19-.016.377-.033c-1.137.103-2.424.148-3.881.148l-1.174-.01c-2.46-.045-4.386-.245-5.884-.709l-.338-.112a.9.9 0 0 1-.59-.892C1.703 18.197 3.466 15 9.513 15l.554.01c1.16.04 2.15.207 2.995.48l-.051-.017c.965-.306 2.122-.473 3.5-.473m.98 7.424a1 1 0 0 1 .005-.147zM9.511 17c-2.68 0-4.014.702-4.73 1.472-.63.678-1.03 1.672-1.19 3.047 1.378.332 3.271.481 5.92.481s4.543-.15 5.92-.481c-.159-1.375-.559-2.369-1.19-3.047-.716-.77-2.049-1.472-4.73-1.472\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M17.513 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M8.513 1a5 5 0 1 1-.001 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function UsersNewFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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