import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.274.005c7.26.09 9.05 1.558 9.223 7.871l-.023-.019c1.578 1.334 2.038 3.55 2.038 7.143 0 7.5-2 9-12 9s-12-1.5-12-9c0-3.596.46-5.812 2.041-7.146l-.025.022C2.705 1.348 4.613 0 12.512 0zM12.512 7.5c-2.478 0-4.382.094-5.854.332-1.475.239-2.394.604-2.995 1.056-1.106.83-1.65 2.35-1.65 6.112s.544 5.283 1.65 6.112c.601.452 1.52.817 2.995 1.056 1.472.238 3.376.332 5.854.332s4.382-.094 5.855-.332c1.475-.239 2.393-.604 2.995-1.056 1.106-.829 1.65-2.35 1.65-6.112s-.544-5.283-1.65-6.112c-.602-.452-1.52-.817-2.995-1.056-1.473-.238-3.376-.332-5.855-.332m0-6c-2.056 0-3.608.094-4.792.324-1.175.228-1.874.57-2.329.979-.725.652-1.172 1.79-1.322 4.167C5.892 6.234 8.584 6 12.512 6s6.62.234 8.443.97c-.15-2.377-.597-3.515-1.322-4.167-.454-.41-1.154-.75-2.329-.979-1.184-.23-2.735-.324-4.792-.324\" clip-rule=\"evenodd\"/>",
} as const;

export default function TimelineLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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