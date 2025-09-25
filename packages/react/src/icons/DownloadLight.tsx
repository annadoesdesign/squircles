import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M23.512 11.5a.75.75 0 0 1 .75.75c0 2.307-.114 4.204-.446 5.744-.334 1.549-.9 2.787-1.836 3.724-.937.936-2.175 1.502-3.724 1.836-1.54.332-3.437.446-5.744.446s-4.204-.114-5.744-.446c-1.549-.334-2.787-.9-3.724-1.836-.936-.937-1.501-2.175-1.836-3.724-.332-1.54-.446-3.437-.446-5.744a.75.75 0 0 1 1.5 0c0 2.277.115 4.046.413 5.428.296 1.373.763 2.312 1.43 2.98.667.667 1.606 1.133 2.98 1.429 1.381.298 3.15.413 5.427.413s4.046-.115 5.428-.413c1.373-.296 2.312-.762 2.98-1.43.667-.667 1.133-1.606 1.43-2.98.297-1.38.412-3.15.412-5.427a.75.75 0 0 1 .75-.75\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512.25a.75.75 0 0 1 .75.75v15.095a15.14 15.14 0 0 0 4.58-5.43.75.75 0 0 1 1.341.67 16.65 16.65 0 0 1-6.065 6.67l-.208.13a.75.75 0 0 1-.795 0l-.208-.13a16.65 16.65 0 0 1-6.066-6.67.75.75 0 0 1 1.342-.67 15.14 15.14 0 0 0 4.58 5.43V1a.75.75 0 0 1 .75-.75\"/>",
} as const;

export default function DownloadLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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