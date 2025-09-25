import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M23.512 11a1 1 0 0 1 1 1c0 2.312-.114 4.23-.452 5.797-.34 1.578-.922 2.866-1.903 3.848-.982.981-2.27 1.563-3.848 1.903-1.567.338-3.485.452-5.797.452s-4.23-.114-5.797-.452c-1.578-.34-2.866-.922-3.847-1.903-.982-.982-1.563-2.27-1.904-3.848C.626 16.23.512 14.312.512 12a1 1 0 0 1 2 0c0 2.272.115 4.02.407 5.375.29 1.344.74 2.233 1.363 2.856.622.622 1.511 1.072 2.855 1.362 1.355.292 3.103.407 5.375.407s4.02-.115 5.375-.407c1.344-.29 2.233-.74 2.856-1.362s1.072-1.512 1.362-2.856c.292-1.355.407-3.103.407-5.375a1 1 0 0 1 1-1\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.106.086c.258-.115.554-.115.813 0l.595.266a11.2 11.2 0 0 1 5.935 6.297 1 1 0 0 1-1.873.703 9.2 9.2 0 0 0-4.064-4.763V17a1 1 0 1 1-2 0V2.59A9.2 9.2 0 0 0 7.45 7.351a1 1 0 0 1-1.873-.703A11.2 11.2 0 0 1 11.51.352z\"/>",
  light: "",
} as const;

export default function UploadStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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