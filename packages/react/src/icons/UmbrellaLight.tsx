import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0a.75.75 0 0 1 .75.75v1.004l-.75-.004c10 0 12 2 12 12 0 .83-1.319 1.234-2.082.865l-.144-.084c-1.86-1.293-4.715-1.733-9.024-1.777v7.524a3.222 3.222 0 0 1-6.104 1.44l-.317-.633a.75.75 0 0 1 1.342-.67l.317.633a1.724 1.724 0 0 0 3.262-.77v-7.524c-4.309.044-7.164.483-9.024 1.777l-.145.084c-.763.37-2.08-.036-2.08-.865 0-10 2-12 12-12q-.384 0-.75.004V.75a.75.75 0 0 1 .75-.75m0 3.25c-2.47 0-4.342.125-5.777.435-1.418.305-2.307.77-2.912 1.376-.606.605-1.07 1.494-1.376 2.912-.287 1.328-.414 3.03-.432 5.236 2.396-1.592 5.89-1.959 10.497-1.959s8.1.368 10.496 1.959c-.017-2.205-.144-3.908-.43-5.236-.306-1.418-.77-2.307-1.376-2.912-.606-.606-1.494-1.07-2.912-1.376-1.435-.31-3.308-.435-5.778-.435\" clip-rule=\"evenodd\"/>",
} as const;

export default function UmbrellaLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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