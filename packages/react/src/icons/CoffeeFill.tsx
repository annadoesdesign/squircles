import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M10.512 8c3.722 0 8.215-.05 9.584 3.283l.325.052c3.287.566 4.092 1.98 4.092 5.165l-.005.419c-.084 3.362-1.255 4.589-5.807 4.95-1.46 1.633-3.984 2.13-8.189 2.13-8.182 0-10-1.882-10-10.353C.512 7.93 6.064 8 10.512 8m10 5.646c0 2.604-.173 4.586-.65 6.081.916-.14 1.472-.323 1.812-.51.321-.177.471-.361.586-.655.15-.38.253-.998.253-2.062s-.104-1.682-.253-2.063c-.115-.293-.265-.477-.586-.654-.251-.138-.62-.275-1.166-.394q.004.126.004.257\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M6.141.071a1 1 0 0 1 1.3.558l.169.424a5.98 5.98 0 0 1-.203 4.894 1 1 0 0 1-1.79-.894 3.98 3.98 0 0 0 .136-3.258l-.17-.424a1 1 0 0 1 .558-1.3M13.141.071a1 1 0 0 1 1.3.558l.169.424a5.98 5.98 0 0 1-.203 4.894 1 1 0 0 1-1.79-.894 3.98 3.98 0 0 0 .136-3.258l-.17-.424a1 1 0 0 1 .558-1.3\"/>",
  regular: "",
  light: "",
} as const;

export default function CoffeeFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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