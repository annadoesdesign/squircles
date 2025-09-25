import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M14.982.47a.751.751 0 0 1 1.062 1.06l-1.498 1.495c8.243.222 9.966 2.014 9.966 8.975l-.006.685c-.087 4.79-1.163 6.932-5.043 7.797l.761 2.28a.75.75 0 0 1-1.424.475l-.833-2.499c-1.48.189-3.278.262-5.455.262l-.914-.005c-1.772-.018-3.273-.096-4.54-.258l-.834 2.5a.75.75 0 0 1-1.424-.474l.76-2.28c-3.88-.865-4.954-3.01-5.042-7.798L.512 12c0-6.96 1.723-8.753 9.965-8.975L8.982 1.53a.75.75 0 0 1 1.06-1.06l2.47 2.47zm-2.47 4.03c-2.478 0-4.382.094-5.854.332-1.475.239-2.394.604-2.995 1.056-1.106.829-1.65 2.35-1.65 6.112s.544 5.283 1.65 6.112c.601.452 1.52.817 2.995 1.056 1.472.238 3.376.332 5.854.332s4.382-.094 5.855-.332c1.475-.239 2.393-.604 2.995-1.056 1.106-.83 1.65-2.35 1.65-6.112s-.544-5.283-1.65-6.112c-.602-.452-1.52-.817-2.995-1.056-1.473-.238-3.376-.332-5.855-.332\" clip-rule=\"evenodd\"/>",
} as const;

export default function TelevisionLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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