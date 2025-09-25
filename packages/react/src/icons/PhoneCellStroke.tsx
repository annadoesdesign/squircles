import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.257 18a1 1 0 1 1-.001 2 1 1 0 0 1 0-2M10.014 3.53a9.25 9.25 0 0 1 4.485 0 1 1 0 0 1-.485 1.94 7.25 7.25 0 0 0-3.515 0 1 1 0 1 1-.485-1.94\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.257 0c6.715 0 9.099 1.3 9.772 7.037a1 1 0 0 1 .72.799 19.3 19.3 0 0 1 0 6.328 1 1 0 0 1-.555.736c-.296 6.101-1.753 8.298-6.3 8.906l-.4.047c-.947.104-2.021.147-3.237.147-7.104 0-9.362-1.453-9.874-8.076a1 1 0 0 1-.515-.477 3.24 3.24 0 0 1 0-2.894 1 1 0 0 1 .389-.416V12q0-.585.008-1.133a1 1 0 0 1-.397-.42 3.24 3.24 0 0 1 0-2.894 1 1 0 0 1 .613-.513C3.154 1.3 5.54 0 12.257 0m0 2c-4.221 0-5.789.57-6.59 1.53-.422.508-.797 1.32-1.051 2.73-.254 1.415-.36 3.272-.36 5.74s.106 4.325.36 5.74c.254 1.41.629 2.222 1.052 2.73.8.96 2.368 1.53 6.589 1.53 1.344 0 2.452-.054 3.372-.177 1.153-.154 1.919-.404 2.45-.713.495-.287.867-.671 1.17-1.26.69-1.337 1.008-3.645 1.008-7.85 0-2.468-.105-4.325-.36-5.74-.253-1.41-.628-2.222-1.051-2.73-.801-.96-2.369-1.53-6.59-1.53\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function PhoneCellStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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