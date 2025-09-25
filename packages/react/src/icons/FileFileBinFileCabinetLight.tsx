import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.512 18.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 1.75 12 10.5q0 1.31-.068 2.417.069.954.068 2.083l-.006.685C24.38 22.593 22.2 24 12.512 24l-.914-.005C2.686 23.903.641 22.37.518 15.685L.512 15Q.51 13.874.58 12.92a39 39 0 0 1-.067-2.42c0-8.75 2-10.5 12-10.5m0 7.5c-2.478 0-4.382.094-5.854.332-1.475.239-2.394.604-2.995 1.056-1.106.83-1.65 2.35-1.65 6.112s.544 5.283 1.65 6.112c.601.452 1.52.817 2.995 1.056 1.472.238 3.376.332 5.854.332s4.382-.094 5.855-.332c1.475-.239 2.393-.604 2.995-1.056 1.106-.829 1.65-2.35 1.65-6.112s-.544-5.283-1.65-6.112c-.602-.452-1.52-.817-2.995-1.056-1.473-.238-3.376-.332-5.855-.332m0-6c-2.474 0-4.362.11-5.815.384-1.447.273-2.348.689-2.947 1.214-.97.848-1.517 2.303-1.683 5.234l-.015.017C3.652 6.497 6.757 6 12.512 6c5.737 0 8.84.494 10.444 2.331-.167-2.93-.712-4.385-1.681-5.233-.6-.525-1.5-.941-2.947-1.214-1.454-.274-3.341-.384-5.816-.384\" clip-rule=\"evenodd\"/>",
} as const;

export default function FileFileBinFileCabinetLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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