import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c7.899 0 9.807 1.348 9.985 7.876l-.02-.017c1.576 1.334 2.035 3.549 2.035 7.141 0 7.5-2 9-12 9s-12-1.5-12-9c0-3.597.46-5.813 2.042-7.146l-.026.022C2.705 1.348 4.613 0 12.512 0m0 8c-2.47 0-4.342.095-5.774.326-1.436.232-2.265.578-2.776.961-.89.668-1.45 1.948-1.45 5.713s.56 5.045 1.45 5.713c.511.383 1.34.729 2.776.96 1.432.233 3.303.327 5.774.327s4.343-.095 5.775-.326c1.435-.232 2.264-.578 2.775-.961.891-.668 1.45-1.948 1.45-5.713s-.559-5.045-1.45-5.713c-.51-.383-1.34-.729-2.775-.96C16.855 8.094 14.983 8 12.512 8m0-2q.715 0 1.376.012-.208-.005-.42-.007z\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function TimelineFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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