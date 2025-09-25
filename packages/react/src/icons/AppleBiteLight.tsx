import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M16.33.272a.75.75 0 0 1 .364 1.456l-.12.03a4.37 4.37 0 0 0-3.243 3.469c1.657-1.11 3.556-1.526 5.387-1.003 2.147.612 3.927 2.446 4.925 4.838a2.57 2.57 0 0 0-1.704.21l-.227.113a1.93 1.93 0 0 0-.966 2.334l.075.224a1 1 0 0 1-.054.764l-.052.103a1.93 1.93 0 0 0 0 1.723l.052.102a1 1 0 0 1 .054.763l-.075.226a1.93 1.93 0 0 0 .966 2.334l.227.113c.477.239 1 .315 1.502.245-1.935 4.15-6.123 6.453-9.642 5.45a6 6 0 0 1-1.287-.541 6 6 0 0 1-1.287.54C7.17 24.923 2.222 21.688.864 16.292S2.25 5.381 6.306 4.224c1.872-.534 3.815-.089 5.498 1.076A5.87 5.87 0 0 1 16.21.303zm1.977 5.394c-1.552-.443-3.28.006-4.821 1.32a1.5 1.5 0 0 1-1.947 0c-1.542-1.314-3.27-1.763-4.822-1.32-1.505.43-2.912 1.723-3.802 3.635-.883 1.895-1.188 4.27-.596 6.624 1.215 4.828 5.484 7.257 8.495 6.398q.498-.144.963-.406l.175-.084c.419-.169.896-.14 1.296.084q.464.262.963.406c2.183.623 5.016-.463 6.891-2.993l-.06-.03a3.43 3.43 0 0 1-1.72-4.15l.01-.033a3.43 3.43 0 0 1 0-2.891l-.01-.03v-.004a3.43 3.43 0 0 1 1.72-4.149l.226-.113.03-.016c-.832-1.148-1.884-1.932-2.99-2.248\" clip-rule=\"evenodd\"/>",
} as const;

export default function AppleBiteLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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