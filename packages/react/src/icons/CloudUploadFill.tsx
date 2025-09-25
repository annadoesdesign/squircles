import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M10.512 1a8 8 0 0 1 7.756 6.041A7 7 0 0 1 24.512 14c0 2.985-1.89 5.961-4.667 6.942a21.98 21.98 0 0 1-14.666 0C2.403 19.962.512 16.985.512 14a6.98 6.98 0 0 1 2.001-4.898V9a8 8 0 0 1 8-8m2.448 8.105a1 1 0 0 0-.788-.045l-.107.045-.735.368a9.7 9.7 0 0 0-2.525 1.82 1 1 0 1 0 1.414 1.414c.393-.393.827-.74 1.293-1.039V17a1 1 0 1 0 2 0v-5.332c.466.299.9.646 1.293 1.039a1 1 0 1 0 1.414-1.414 9.7 9.7 0 0 0-2.524-1.82z\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function CloudUploadFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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