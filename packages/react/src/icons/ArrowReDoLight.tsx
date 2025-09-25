import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.591.415a.75.75 0 0 1 1.006-.336 7.46 7.46 0 0 1 3.327 3.318c.111.222.11.483 0 .705a7.46 7.46 0 0 1-3.327 3.319.75.75 0 0 1-.67-1.342A6 6 0 0 0 12.89 4.5h-.628c-2.279 0-4.056.1-5.448.358-1.389.259-2.335.667-3 1.24-1.316 1.138-1.802 3.17-1.802 7.152s.486 6.014 1.803 7.151c.664.574 1.61.982 2.999 1.24 1.392.26 3.17.359 5.448.359 2.28 0 4.057-.1 5.448-.358 1.39-.26 2.335-.667 3-1.24 1.317-1.138 1.802-3.17 1.802-7.152 0-2.438-.178-4.167-.643-5.411-.445-1.19-1.155-1.946-2.322-2.45a.75.75 0 0 1 .595-1.377c1.547.668 2.547 1.735 3.132 3.301.565 1.512.738 3.472.738 5.937 0 3.933-.431 6.653-2.322 8.286-.94.812-2.172 1.295-3.705 1.58-1.53.285-3.419.384-5.723.384S8.07 23.4 6.54 23.116c-1.533-.285-2.765-.768-3.705-1.58C.944 19.903.512 17.184.512 13.25s.432-6.653 2.322-8.286c.94-.812 2.172-1.295 3.705-1.58C8.069 3.099 9.958 3 12.262 3h.628a6 6 0 0 0-1.963-1.58.75.75 0 0 1-.336-1.005\"/>",
} as const;

export default function ArrowReDoLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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