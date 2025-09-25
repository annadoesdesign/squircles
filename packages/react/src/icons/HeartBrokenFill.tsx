import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M2.083 3.627a6.98 6.98 0 0 1 9.823-1.093l.283.222.908 3.024a2 2 0 0 1-.353 1.825L11.226 9.5a4 4 0 0 0 0 4.998l1.583 1.98a2 2 0 0 1 .383 1.716l-1.1 4.578a2 2 0 0 1-.364-.128C9.824 21.739 4.898 19.187 2.51 16 .196 12.907-.327 6.646 2.083 3.627\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M14.028 1.921a6.98 6.98 0 0 1 8.923 1.706c2.41 3.019 1.876 9.28-.44 12.373-2.034 2.717-5.924 4.971-8.209 6.139l.835-3.478a4 4 0 0 0-.767-3.432l-1.582-1.98a2 2 0 0 1 0-2.498l1.517-1.897a4 4 0 0 0 .708-3.649z\"/>",
  regular: "",
  light: "",
} as const;

export default function HeartBrokenFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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