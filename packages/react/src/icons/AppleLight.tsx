import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M16.33.272a.75.75 0 0 1 .364 1.456l-.12.03a4.37 4.37 0 0 0-3.243 3.469c1.657-1.11 3.556-1.526 5.387-1.003 4.056 1.156 6.802 6.67 5.444 12.067-1.359 5.396-6.307 8.631-10.363 7.475a6 6 0 0 1-1.287-.541 6 6 0 0 1-1.287.54C7.17 24.923 2.222 21.688.864 16.292S2.25 5.381 6.306 4.224c1.872-.534 3.815-.089 5.498 1.076A5.87 5.87 0 0 1 16.21.303zm1.977 5.394c-1.552-.443-3.28.006-4.821 1.32a1.5 1.5 0 0 1-1.947 0c-1.542-1.314-3.27-1.763-4.822-1.32-1.505.43-2.912 1.723-3.802 3.635-.883 1.895-1.188 4.27-.596 6.624 1.215 4.828 5.484 7.257 8.495 6.398q.498-.144.963-.406l.175-.084a1.5 1.5 0 0 1 1.296.084q.464.262.963.406c3.01.859 7.28-1.57 8.496-6.398.592-2.353.287-4.729-.596-6.624-.89-1.913-2.298-3.205-3.804-3.635\" clip-rule=\"evenodd\"/>",
} as const;

export default function AppleLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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