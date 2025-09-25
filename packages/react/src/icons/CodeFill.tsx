import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m5.447 13.106a1 1 0 0 0-.894 1.789A5.7 5.7 0 0 1 19.369 17a5.7 5.7 0 0 1-2.304 2.105 1 1 0 0 0 .894 1.79 7.7 7.7 0 0 0 3.44-3.432 1.04 1.04 0 0 0 0-.926 7.7 7.7 0 0 0-3.44-3.431m1.26-7.813a1 1 0 0 0-1.414 0l-12 12a1 1 0 1 0 1.414 1.414l12-12a1 1 0 0 0 0-1.414M8.407 3.553a1 1 0 0 0-1.342-.448 7.7 7.7 0 0 0-3.44 3.432 1.04 1.04 0 0 0 0 .926 7.7 7.7 0 0 0 3.44 3.432 1 1 0 0 0 .894-1.79A5.7 5.7 0 0 1 5.656 7a5.7 5.7 0 0 1 2.303-2.105 1 1 0 0 0 .448-1.342\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function CodeFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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