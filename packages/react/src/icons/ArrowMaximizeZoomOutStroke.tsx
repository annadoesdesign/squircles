import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.805 13.292a1 1 0 0 1 1.414 1.414L5.41 20.515a4.4 4.4 0 0 0 2.655-.41 1 1 0 0 1 .894 1.789 6.4 6.4 0 0 1-4.885.347l-.878-.293a1 1 0 0 1-.59-.524l-.042-.108-.293-.88a6.4 6.4 0 0 1 .346-4.884 1 1 0 0 1 1.79.895 4.4 4.4 0 0 0-.41 2.654zM13.805 13.292a1 1 0 0 1 1.414 0l5.809 5.809a4.4 4.4 0 0 0-.41-2.654 1 1 0 0 1 1.788-.895 6.4 6.4 0 0 1 .347 4.885l-.293.879-.043.108a1 1 0 0 1-.589.524l-.879.293a6.4 6.4 0 0 1-4.884-.347 1 1 0 0 1 .894-1.79 4.4 4.4 0 0 0 2.654.411l-5.808-5.809a1 1 0 0 1 0-1.414M4.074 1.758a6.4 6.4 0 0 1 4.885.347 1 1 0 0 1-.894 1.789 4.4 4.4 0 0 0-2.655-.41l5.809 5.808a1 1 0 1 1-1.414 1.414L3.996 4.898a4.4 4.4 0 0 0 .41 2.654 1 1 0 0 1-1.789.895 6.4 6.4 0 0 1-.346-4.885l.293-.88.043-.107a1 1 0 0 1 .588-.524zM16.065 2.105a6.4 6.4 0 0 1 4.884-.347l.88.293c.25.084.459.264.577.501a6.4 6.4 0 0 1 .347 4.885l-.293.879a1 1 0 1 1-1.896-.633l.292-.879a4.4 4.4 0 0 0 .193-1.928l-5.83 5.83a1 1 0 1 1-1.414-1.414l5.808-5.808a4.4 4.4 0 0 0-2.654.41 1 1 0 0 1-.894-1.79\"/>",
  light: "",
} as const;

export default function ArrowMaximizeZoomOutStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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