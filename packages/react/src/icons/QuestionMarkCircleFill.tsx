import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c6.628 0 12 5.373 12 12s-5.372 12-12 12c-6.627 0-12-5.373-12-12s5.373-12 12-12m0 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2m1.762-13.68a5 5 0 0 0-6.592 3.386 1 1 0 0 0 1.933.518A3 3 0 1 1 12.512 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-1.102a5 5 0 0 0 3.485-2.686 5 5 0 0 0-2.723-6.892\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function QuestionMarkCircleFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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