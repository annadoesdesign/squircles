import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M14.805.293a1 1 0 1 1 1.414 1.414l-1.33 1.33c7.948.262 9.623 2.1 9.623 8.963l-.006.685c-.086 4.687-1.118 6.839-4.799 7.74l.753 2.258a1 1 0 1 1-1.896.633l-.85-2.547c-1.43.165-3.147.23-5.202.23l-.914-.004c-1.656-.017-3.075-.085-4.289-.226l-.849 2.547a1 1 0 1 1-1.896-.633l.753-2.26c-3.68-.9-4.713-3.051-4.799-7.737L.512 12c0-6.863 1.675-8.701 9.622-8.964L8.805 1.707A1 1 0 1 1 10.22.293l2.292 2.292zM12.512 5c-2.47 0-4.342.094-5.774.326-1.436.232-2.265.578-2.776.961-.89.668-1.45 1.948-1.45 5.713s.56 5.044 1.45 5.713c.511.383 1.34.729 2.776.96 1.432.232 3.303.327 5.774.327s4.343-.095 5.775-.326c1.435-.232 2.264-.578 2.775-.961.891-.669 1.45-1.948 1.45-5.713s-.559-5.045-1.45-5.713c-.51-.383-1.34-.729-2.775-.96C16.855 5.093 14.983 5 12.512 5\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function TelevisionStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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