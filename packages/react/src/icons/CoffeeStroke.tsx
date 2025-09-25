import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M10.512 8c3.722 0 8.215-.05 9.584 3.283l.325.052c3.287.566 4.092 1.98 4.092 5.165l-.005.419c-.084 3.362-1.255 4.589-5.808 4.95-1.46 1.633-3.983 2.13-8.188 2.13-7.926 0-9.88-1.766-9.994-9.577l-.006-.775C.512 7.93 6.064 8 10.512 8m0 2c-2.342 0-4.447.008-5.993.562-.713.256-1.17.586-1.462.98-.284.384-.545 1.01-.545 2.105 0 2.07.114 3.608.366 4.765.249 1.138.604 1.784 1.004 2.198.827.855 2.486 1.39 6.63 1.39s5.804-.535 6.63-1.39c.4-.414.756-1.06 1.004-2.198.252-1.157.366-2.694.366-4.765 0-1.096-.26-1.721-.545-2.105-.291-.394-.748-.724-1.462-.98-1.546-.554-3.65-.562-5.993-.562m10 3.647-.006.775c-.032 2.227-.217 3.963-.644 5.306.916-.14 1.472-.324 1.812-.511.321-.177.471-.361.586-.655.15-.38.253-.998.253-2.062s-.104-1.682-.253-2.063c-.115-.293-.265-.477-.586-.654-.251-.138-.62-.275-1.166-.394q.004.126.004.258\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.141.071a1 1 0 0 1 1.3.558l.169.424a5.98 5.98 0 0 1-.203 4.894 1 1 0 0 1-1.79-.894 3.98 3.98 0 0 0 .136-3.258l-.17-.424a1 1 0 0 1 .558-1.3M13.141.071a1 1 0 0 1 1.3.558l.169.424a5.98 5.98 0 0 1-.203 4.894 1 1 0 0 1-1.79-.894 3.98 3.98 0 0 0 .136-3.258l-.17-.424a1 1 0 0 1 .558-1.3\"/>",
  light: "",
} as const;

export default function CoffeeStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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