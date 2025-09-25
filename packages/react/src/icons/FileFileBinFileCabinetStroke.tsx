import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.512 18a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 1.75 12 10.5q0 1.31-.068 2.417.069.954.068 2.083l-.006.685C24.38 22.593 22.2 24 12.512 24l-.914-.005C2.686 23.903.641 22.37.518 15.685L.512 15q-.001-1.126.068-2.077A39 39 0 0 1 .512 10.5c0-8.75 2-10.5 12-10.5m0 8c-2.47 0-4.342.095-5.774.326-1.436.232-2.265.578-2.776.961-.89.668-1.45 1.948-1.45 5.713s.56 5.045 1.45 5.713c.511.383 1.34.729 2.776.96 1.432.233 3.303.327 5.774.327s4.343-.095 5.775-.326c1.435-.232 2.264-.578 2.775-.961.891-.668 1.45-1.948 1.45-5.713s-.559-5.045-1.45-5.713c-.51-.383-1.34-.729-2.775-.96C16.855 8.094 14.983 8 12.512 8m0-6c-2.466 0-4.316.11-5.722.375-1.398.264-2.202.654-2.71 1.099-.763.667-1.276 1.828-1.475 4.336q-.034.028-.067.058C4.25 6.41 7.29 6 12.512 6c5.18 0 8.212.403 9.933 1.833l-.026-.023c-.2-2.508-.712-3.67-1.474-4.336-.508-.445-1.312-.835-2.71-1.099C16.828 2.11 14.978 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function FileFileBinFileCabinetStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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