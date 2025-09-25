import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.255 14.006c3.525.064 4.257.65 4.257 2.994l-.01.445C17.395 19.56 16.419 20 12.512 20l-.743-.006c-3.524-.064-4.257-.65-4.257-2.994 0-2.5.834-3 5-3zm-.743 1.494c-1.024 0-1.78.031-2.347.104-.577.075-.836.18-.944.245-.051.03-.07.044-.102.135-.055.153-.107.446-.107 1.016s.052.863.107 1.015c.032.091.05.105.102.136.108.065.367.17.944.244.567.074 1.323.105 2.347.105s1.78-.031 2.347-.105c.577-.074.836-.18.944-.244.052-.03.07-.044.103-.136.054-.152.106-.446.106-1.015 0-.57-.051-.863-.106-1.016-.033-.09-.051-.105-.103-.136-.108-.064-.367-.169-.944-.244-.566-.073-1.322-.104-2.347-.104\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M22.982 3.47a.751.751 0 0 1 1.062 1.06l-5.714 5.712c5.014.57 6.182 2.3 6.182 6.758l-.006.533C24.38 22.905 22.2 24 12.512 24l-.914-.004C2.686 23.924.641 22.732.518 17.533L.512 17c0-4.458 1.168-6.189 6.182-6.758L.982 4.53a.75.75 0 0 1 1.061-1.06l6.5 6.5a1 1 0 0 1 .093.116A74 74 0 0 1 12.512 10c1.455 0 2.74.026 3.874.086a1 1 0 0 1 .096-.116zm-10.47 8.03c-2.483 0-4.408.073-5.906.262-1.51.19-2.467.484-3.088.846-.564.33-.902.742-1.13 1.358-.25.678-.376 1.633-.376 3.034s.125 2.355.376 3.034c.228.616.566 1.029 1.13 1.358.621.362 1.577.656 3.088.846 1.498.189 3.423.262 5.906.262s4.408-.073 5.907-.262c1.51-.19 2.466-.484 3.087-.846.564-.33.903-.742 1.13-1.358.251-.678.376-1.633.376-3.034 0-1.402-.125-2.356-.376-3.034-.227-.616-.566-1.029-1.13-1.358-.62-.362-1.577-.656-3.087-.846-1.499-.189-3.424-.262-5.907-.262\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.177 6.329a9.7 9.7 0 0 1 8.67 0 .75.75 0 0 1-.67 1.342 8.2 8.2 0 0 0-7.33 0 .75.75 0 0 1-.67-1.342M6.177 2.329a14.17 14.17 0 0 1 12.67 0 .75.75 0 0 1-.67 1.342 12.67 12.67 0 0 0-11.33 0 .75.75 0 0 1-.67-1.342\"/>",
} as const;

export default function RouterRoundLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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