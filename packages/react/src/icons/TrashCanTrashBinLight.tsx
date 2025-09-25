import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.586 8.254a.75.75 0 0 1 .672.82l-.161 1.617c-.22 2.2-.22 4.417 0 6.618l.161 1.617a.75.75 0 0 1-1.492.148l-.162-1.616c-.23-2.3-.23-4.617 0-6.916l.162-1.616a.75.75 0 0 1 .82-.672M15.438 8.254a.75.75 0 0 1 .82.672l.162 1.616c.23 2.3.23 4.617 0 6.916l-.162 1.616a.75.75 0 0 1-1.492-.148l.161-1.617c.22-2.2.22-4.417 0-6.618l-.161-1.617a.75.75 0 0 1 .672-.82\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.046.005c3.905.077 5.547 1.058 6.154 4.69q1.736.225 3.46.57a.75.75 0 0 1-.295 1.47q-.6-.12-1.203-.225c1.036 1.514 1.35 3.874 1.35 7.49 0 6.943-1.157 9.259-6.363 9.838l-.399.04a36 36 0 0 1-3.238.122c-8.333 0-10-1.667-10-10 0-3.616.314-5.976 1.35-7.49q-.602.105-1.202.225a.75.75 0 0 1-.295-1.47q1.72-.345 3.458-.57C6.457.901 8.223 0 12.513 0zm5.013 6.061a50.2 50.2 0 0 0-11.095 0c-.7.23-1.172.525-1.516.87-.46.46-.83 1.15-1.08 2.302-.252 1.17-.356 2.709-.356 4.762s.104 3.592.357 4.762c.248 1.152.619 1.843 1.079 2.302s1.15.831 2.302 1.08c1.17.252 2.709.356 4.762.356 1.362 0 2.505-.046 3.47-.153 2.423-.27 3.444-.892 4.025-1.83.69-1.115 1.005-3.021 1.005-6.517 0-2.053-.104-3.592-.356-4.762-.249-1.152-.62-1.843-1.08-2.302-.344-.345-.817-.64-1.517-.87M6.661 4.592l.005-.001q.095-.03.194-.058zm11.696-.001h.006l-.17-.049zM12.513 1.5c-2.904 0-3.911.453-4.459 1.235-.25.357-.473.877-.646 1.661q-.23.051-.445.108C8.362 4.13 10.175 4 12.513 4c2.219 0 3.965.121 5.333.452q-.113-.029-.23-.056c-.173-.784-.395-1.304-.644-1.66-.548-.783-1.555-1.236-4.459-1.236\" clip-rule=\"evenodd\"/>",
} as const;

export default function TrashCanTrashBinLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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