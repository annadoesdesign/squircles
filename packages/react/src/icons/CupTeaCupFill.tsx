import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M10.512 8c3.722 0 8.215-.049 9.584 3.284l.325.051c3.287.567 4.092 1.98 4.092 5.165l-.005.42c-.084 3.361-1.255 4.588-5.807 4.95-1.46 1.633-3.984 2.13-8.189 2.13-8.181 0-10-1.882-10-10.352C.512 7.93 6.064 8 10.512 8m9.996 5.389q.004.127.004.259c0 2.61-.175 4.595-.654 6.092l.005-.011c.915-.14 1.47-.325 1.811-.512.321-.176.471-.361.586-.654.15-.38.253-.999.253-2.063 0-1.063-.104-1.682-.253-2.062-.115-.293-.265-.478-.586-.655-.251-.138-.62-.275-1.166-.394\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M6.141.072a1 1 0 0 1 1.3.557l.169.424a5.98 5.98 0 0 1-.203 4.895 1 1 0 0 1-1.79-.895 3.98 3.98 0 0 0 .136-3.258l-.17-.424a1 1 0 0 1 .558-1.3M13.141.072a1 1 0 0 1 1.3.557l.169.424a5.98 5.98 0 0 1-.203 4.895 1 1 0 0 1-1.79-.895 3.98 3.98 0 0 0 .136-3.258l-.17-.424a1 1 0 0 1 .558-1.3\"/>",
  regular: "",
  light: "",
} as const;

export default function CupTeaCupFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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