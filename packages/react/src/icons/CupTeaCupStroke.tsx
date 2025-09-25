import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M10.512 8c3.722 0 8.215-.049 9.584 3.284l.325.051c3.287.567 4.092 1.98 4.092 5.165l-.005.42c-.084 3.361-1.255 4.588-5.808 4.95-1.46 1.632-3.983 2.13-8.188 2.13-7.926 0-9.88-1.766-9.994-9.578l-.006-.774C.512 7.93 6.064 8 10.512 8m0 5q0 .038-.004.075c.814.168 1.004.665 1.004 1.925 0 1.667-.333 2-2 2-1.666 0-2-.333-2-2 0-1.26.19-1.757 1.003-1.925L8.512 13v-2.983c-1.534.036-2.902.155-3.993.546-.713.255-1.17.585-1.462.98-.284.383-.545 1.009-.545 2.105 0 2.07.114 3.607.366 4.764.249 1.138.604 1.785 1.004 2.199.827.855 2.486 1.39 6.63 1.39s5.804-.535 6.63-1.39c.4-.414.756-1.06 1.004-2.199.252-1.157.366-2.694.366-4.764 0-1.096-.26-1.722-.545-2.106-.291-.394-.748-.723-1.462-.98-1.16-.415-2.633-.524-4.286-.552L10.512 10zm10 .648-.006.774c-.032 2.228-.217 3.963-.644 5.307.916-.14 1.472-.325 1.812-.512.321-.176.471-.361.586-.654.15-.38.253-.999.253-2.063 0-1.063-.104-1.682-.253-2.062-.115-.293-.265-.478-.586-.655-.251-.138-.62-.275-1.166-.394q.004.127.004.259\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.141.072a1 1 0 0 1 1.3.557l.169.424a5.98 5.98 0 0 1-.203 4.895 1 1 0 0 1-1.79-.895 3.98 3.98 0 0 0 .136-3.258l-.17-.424a1 1 0 0 1 .558-1.3M13.141.072a1 1 0 0 1 1.3.557l.169.424a5.98 5.98 0 0 1-.203 4.895 1 1 0 0 1-1.79-.895 3.98 3.98 0 0 0 .136-3.258l-.17-.424a1 1 0 0 1 .558-1.3\"/>",
  light: "",
} as const;

export default function CupTeaCupStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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