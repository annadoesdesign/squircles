import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M16.212 21c-.337 2.43-1.333 3-3.85 3l-.593-.013C9.686 23.893 8.825 23.23 8.515 21H5.512a5 5 0 0 1-2.877-9.09A29 29 0 0 1 2.512 9c0-7.5 1.667-9 10-9s10 1.5 10 9c0 1.093-.038 2.058-.124 2.91A5 5 0 0 1 19.512 21zm-6.182 0c.098.585.226.886.33 1.043.12.179.368.457 2.003.457s1.883-.278 2.002-.457c.104-.157.232-.458.33-1.043zm2.482-19.5c-2.056 0-3.608.094-4.792.324-1.175.228-1.874.57-2.329.979-.906.816-1.379 2.39-1.379 6.197 0 1.062.036 1.974.115 2.759a1.5 1.5 0 0 1-.627 1.378A3.5 3.5 0 0 0 5.513 19.5h14a3.5 3.5 0 0 0 2.01-6.363 1.5 1.5 0 0 1-.627-1.378c.06-.59.095-1.25.11-1.99L21.011 9c0-3.808-.472-5.381-1.379-6.197-.454-.41-1.153-.75-2.329-.979-1.184-.23-2.735-.324-4.792-.324\" clip-rule=\"evenodd\"/>",
} as const;

export default function BellNotificationChimeAlertLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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