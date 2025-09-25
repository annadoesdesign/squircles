import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 14c1 0 4 3 4 4s-3 4-4 4-4-3-4-4 3-4 4-4m0 2.197a9 9 0 0 0-.96.842c-.338.337-.63.676-.842.961.211.285.504.624.841.96.337.338.677.63.961.842a9 9 0 0 0 .961-.841 9 9 0 0 0 .841-.961 9 9 0 0 0-.84-.96 9 9 0 0 0-.962-.843M6.512 8c1 0 4 3 4 4s-3 4-4 4-4-3-4-4 3-4 4-4m0 2.197a9 9 0 0 0-.96.842c-.338.337-.63.676-.843.961.212.285.505.624.842.96.337.338.677.63.961.842.285-.212.624-.504.961-.841s.63-.676.841-.961a9 9 0 0 0-.84-.96 9 9 0 0 0-.962-.843M18.512 8c1 0 4 3 4 4s-3 4-4 4-4-3-4-4 3-4 4-4m0 2.197a9 9 0 0 0-.96.842c-.338.337-.63.676-.843.961.212.285.505.624.842.96.337.338.677.63.961.842a9 9 0 0 0 .961-.841 9 9 0 0 0 .841-.961 9 9 0 0 0-.84-.96 9 9 0 0 0-.962-.843M12.512 2c1 0 4 3 4 4s-3 4-4 4-4-3-4-4 3-4 4-4m0 2.197a9 9 0 0 0-.96.842c-.338.337-.63.676-.842.961.211.285.504.624.841.96.337.338.677.63.961.842.285-.212.624-.504.961-.841s.63-.676.841-.961a9 9 0 0 0-.84-.96 9 9 0 0 0-.962-.843\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function ComponentStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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