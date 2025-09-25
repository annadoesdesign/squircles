import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.122.005C17.724.08 19.58 1.069 20.22 4.79l-.069-.02c3.486 1.125 4.362 3.719 4.362 9.23l-.006.762C24.38 22.436 22.2 24 12.513 24l-.914-.005C2.389 23.89.513 22.073.513 14v-.04c.004-5.571.912-8.148 4.528-9.242q-.12.035-.234.071C5.475.91 7.463 0 12.513 0zm2.34 14.076C15.292 15.651 14.6 16 12.513 16l-.445-.006c-1.742-.053-2.348-.46-2.507-1.913a61 61 0 0 0-7.04.758c.073 3.595.629 5.005 1.523 5.75.508.423 1.319.798 2.73 1.052 1.414.254 3.272.359 5.74.359 2.467 0 4.325-.105 5.74-.36 1.41-.253 2.222-.628 2.73-1.051.893-.745 1.447-2.155 1.52-5.75a61 61 0 0 0-7.04-.758M12.513 12c-.453 0-.753.02-.952.047-.028.199-.047.499-.047.953s.02.753.047.952c.199.027.499.048.953.048s.753-.02.952-.048c.027-.199.048-.499.048-.952 0-.454-.02-.754-.048-.953a7 7 0 0 0-.952-.047m-3 1 .002.137zm3-7c-2.467 0-4.325.105-5.74.36-1.41.253-2.221.628-2.729 1.051-.865.72-1.412 2.062-1.513 5.4a63 63 0 0 1 7.015-.73l-.003.035c.136-1.739.799-2.116 2.97-2.116l.446.006c1.805.055 2.387.49 2.52 2.074 2.347.112 4.689.354 7.015.73-.1-3.337-.646-4.678-1.51-5.399-.508-.423-1.32-.798-2.73-1.052C16.838 6.105 14.98 6 12.513 6m0-4c-3.39 0-4.46.466-4.969 1.07-.204.242-.412.615-.585 1.234l-.164.026c1.53-.239 3.411-.33 5.719-.33l.914.005c1.86.021 3.42.114 4.726.312l-.087-.013c-.173-.619-.38-.992-.584-1.235C16.974 2.466 15.902 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function ToolBoxStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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