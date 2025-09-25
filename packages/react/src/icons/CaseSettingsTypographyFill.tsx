import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M6.512 2c1.66 0 2.954.623 3.882 1.78.883 1.102 1.374 2.612 1.666 4.3.581 3.36.452 7.989.452 12.92a1 1 0 0 1-2 0c0-1.758.013-3.432.01-5H2.503c-.005 1.587.009 3.265.009 5a1 1 0 1 1-2 0c0-4.684-.129-9.309.452-12.73.291-1.715.78-3.266 1.653-4.403C3.535 2.673 4.83 2 6.512 2m0 2c-1.068 0-1.774.39-2.309 1.086-.579.753-.996 1.922-1.267 3.518-.264 1.552-.37 3.378-.411 5.396h7.979c-.038-2.124-.143-4.006-.415-5.58-.27-1.562-.686-2.677-1.256-3.388C8.308 4.377 7.602 4 6.512 4M19.012 11a5.48 5.48 0 0 1 3.686 1.419.999.999 0 0 1 1.814.581v7a1 1 0 0 1-1.814.58A5.5 5.5 0 1 1 19.012 11m0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function CaseSettingsTypographyFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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