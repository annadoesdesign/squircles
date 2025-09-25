import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.115 6.364a.75.75 0 1 1 .795 1.272 8.9 8.9 0 0 0-3.262 3.612c1.713-.004 3.218-.078 4.57-.115 1.362-.037 2.587-.036 3.603.15 1.03.189 1.941.585 2.571 1.411.617.81.87 1.912.87 3.306a.75.75 0 0 1-1.5 0c0-1.244-.23-1.961-.562-2.396-.32-.42-.822-.694-1.65-.845-.843-.155-1.923-.164-3.292-.126-1.31.036-2.87.111-4.611.115a8.9 8.9 0 0 0 3.263 3.616.75.75 0 1 1-.795 1.272 10.37 10.37 0 0 1-4.134-4.944l-.165-.414a.75.75 0 0 1 0-.556l.165-.414a10.37 10.37 0 0 1 4.134-4.944\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m0 1.5c-2.47 0-4.342.125-5.777.435-1.418.305-2.307.77-2.912 1.376-.606.605-1.07 1.494-1.376 2.912-.31 1.435-.435 3.307-.435 5.777s.125 4.342.435 5.777c.306 1.418.77 2.307 1.376 2.912.605.606 1.494 1.07 2.912 1.376 1.435.31 3.307.435 5.777.435s4.343-.125 5.778-.435c1.418-.305 2.306-.77 2.912-1.376s1.07-1.494 1.376-2.912c.31-1.435.434-3.307.434-5.777s-.125-4.342-.434-5.777c-.306-1.418-.77-2.307-1.376-2.912-.606-.606-1.494-1.07-2.912-1.376-1.435-.31-3.308-.435-5.778-.435\" clip-rule=\"evenodd\"/>",
} as const;

export default function ReplyEmailLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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