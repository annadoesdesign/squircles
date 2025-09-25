import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M23.512 11.251a.75.75 0 0 1 .75.75c0 2.307-.114 4.204-.446 5.744-.334 1.549-.9 2.787-1.836 3.724-.937.937-2.175 1.502-3.724 1.836-1.54.332-3.437.446-5.744.446s-4.204-.114-5.744-.446c-1.549-.334-2.787-.9-3.724-1.836-.937-.937-1.502-2.175-1.836-3.724-.332-1.54-.446-3.437-.446-5.744a.75.75 0 0 1 1.5 0c0 2.277.115 4.046.413 5.428.296 1.373.762 2.312 1.43 2.98.667.667 1.606 1.133 2.98 1.429 1.38.298 3.15.413 5.427.413s4.046-.115 5.428-.413c1.373-.296 2.312-.762 2.98-1.43.667-.667 1.133-1.606 1.429-2.98.298-1.38.413-3.15.413-5.427a.75.75 0 0 1 .75-.75\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.207.315a.75.75 0 0 1 .61 0l.595.265a10.94 10.94 0 0 1 5.802 6.156.75.75 0 0 1-1.404.528 9.44 9.44 0 0 0-4.548-5.094V17a.75.75 0 1 1-1.5 0V2.17a9.44 9.44 0 0 0-4.548 5.094.75.75 0 0 1-1.404-.528A10.94 10.94 0 0 1 11.612.58z\"/>",
} as const;

export default function UploadLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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