import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.257 0c6.715 0 9.099 1.3 9.772 7.037a1 1 0 0 1 .72.799 19.3 19.3 0 0 1 0 6.328 1 1 0 0 1-.555.736c-.296 6.101-1.753 8.298-6.3 8.906-1.043.139-2.248.194-3.637.194-7.104 0-9.362-1.453-9.874-8.076a1 1 0 0 1-.515-.477 3.24 3.24 0 0 1 0-2.894 1 1 0 0 1 .389-.416V12q0-.585.008-1.133a1 1 0 0 1-.397-.42 3.24 3.24 0 0 1 0-2.894 1 1 0 0 1 .613-.513C3.154 1.3 5.54 0 12.257 0m0 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2.242-14.47a9.25 9.25 0 0 0-4.485 0 1 1 0 1 0 .485 1.94 7.25 7.25 0 0 1 3.515 0 1 1 0 0 0 .485-1.94\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function PhoneCellFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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