import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M8.64.202a1 1 0 0 1 1.205 1.596c-.902.68-1.904 1.592-3.065 2.754C5.274 6.058 4.194 7.29 3.493 8.377c-.695 1.077-.98 1.954-.98 2.764s.285 1.688.98 2.765c.701 1.087 1.78 2.32 3.287 3.826s2.739 2.586 3.826 3.287c1.078.696 1.954.98 2.765.98.81 0 1.687-.285 2.764-.98 1.087-.701 2.32-1.78 3.825-3.287 1.162-1.16 2.074-2.163 2.754-3.065a1 1 0 1 1 1.596 1.205c-.761 1.008-1.746 2.085-2.935 3.274-1.535 1.534-2.887 2.735-4.156 3.554-1.279.825-2.53 1.3-3.848 1.3s-2.57-.475-3.849-1.3c-1.27-.819-2.622-2.02-4.156-3.554C3.83 17.612 2.63 16.26 1.812 14.99c-.825-1.279-1.3-2.53-1.3-3.849 0-1.318.475-2.57 1.3-3.848.819-1.27 2.02-2.621 3.554-4.156C6.555 1.948 7.632.963 8.64.202\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M16.348 1.013c2.095-.349 4.233-.349 6.328 0l.007.001a1 1 0 0 1 .14.036l.016.005a1 1 0 0 1 .472.344l.01.015q.09.121.135.26l.005.013a1 1 0 0 1 .035.139l.003.01a19.3 19.3 0 0 1 0 6.328 1 1 0 0 1-1.973-.328c.201-1.207.27-2.431.213-3.65l-6.52 6.52a1 1 0 0 1-1.414-1.413l6.52-6.52a17.3 17.3 0 0 0-3.649.213 1 1 0 0 1-.328-1.973\"/>",
  regular: "",
  light: "",
} as const;

export default function ComponentGoFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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