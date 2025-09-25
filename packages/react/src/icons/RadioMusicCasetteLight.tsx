import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M8.512 11a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.39 11.26a.75.75 0 0 1 .862.617 19 19 0 0 1 0 6.246.75.75 0 0 1-1.48-.246c.317-1.905.317-3.85 0-5.754a.75.75 0 0 1 .617-.863M19.39 11.26a.75.75 0 0 1 .862.617 19 19 0 0 1 0 6.246.75.75 0 0 1-1.48-.246c.317-1.905.317-3.85 0-5.754a.75.75 0 0 1 .617-.863\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M4.762.25a.75.75 0 0 1 .75.75v5.528c1.722-.39 4.001-.528 7-.528 10 0 12 1.5 12 9s-2 9-12 9-12-1.5-12-9c0-4.545.736-6.884 3.54-8.023l-.04.015V1a.75.75 0 0 1 .75-.75m7.75 7.25c-2.478 0-4.382.094-5.854.332-1.475.239-2.394.604-2.995 1.056-1.106.83-1.65 2.35-1.65 6.112s.544 5.283 1.65 6.112c.601.452 1.52.817 2.995 1.056 1.472.238 3.376.332 5.854.332s4.382-.094 5.855-.332c1.475-.239 2.393-.604 2.995-1.056 1.106-.829 1.65-2.35 1.65-6.112s-.544-5.283-1.65-6.112c-.602-.452-1.52-.817-2.995-1.056-1.473-.238-3.376-.332-5.855-.332\" clip-rule=\"evenodd\"/>",
} as const;

export default function RadioMusicCasetteLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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