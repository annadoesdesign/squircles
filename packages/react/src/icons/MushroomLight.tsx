import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M17.512 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.512 7.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.285 0c12.358 0 14.419 11.756 10.3 14.694l-.381.258c-.695.448-1.33.727-1.93.883q.106-.027.213-.06C20.28 22.575 18.676 24 12.513 24c-6.105 0-7.737-1.398-7.969-8.033-.767-.093-1.519-.39-2.268-1.015l-.29-.258C-1.104 11.755-.074 0 12.285 0m0 14.694c-2.353 0-4.37.957-6.242 1.232.041 1.15.124 2.104.261 2.897.207 1.198.517 1.91.88 2.364.677.846 1.966 1.313 5.33 1.313 3.362 0 4.652-.467 5.328-1.312.363-.455.674-1.167.88-2.365.134-.776.214-1.707.256-2.825h.003c-2.029-.008-3.784-1.185-6.316-1.296zm1.97-13.079c-.013.322-.078.64-.202.938a2.75 2.75 0 0 1-5.26-.655c-3.332.831-5.177 2.849-6.072 4.938-.393.919-.61 1.87-.681 2.773a3.495 3.495 0 0 1 4.447.416 3.5 3.5 0 0 1 .906 3.381 3.5 3.5 0 0 1-.309.765c.576-.15 1.138-.322 1.924-.519.97-.242 2.071-.458 3.277-.458 1.213 0 2.257.217 3.165.466.445.122.877.258 1.256.374.392.12.74.223 1.076.303.66.157 1.219.21 1.79.116.57-.094 1.26-.352 2.141-.98.592-.423 1.092-1.268 1.25-2.504.155-1.218-.049-2.678-.708-4.09-1.124-2.406-3.609-4.727-8-5.264M4.53 10.568a2 2 0 0 0-2.373 1.185c.188.912.532 1.54.863 1.854.557.53 1.051.75 1.514.84l-.004-.015a2 2 0 0 0 0-3.864M12.285 1.5q-1.077.001-2.017.123a1.247 1.247 0 0 0 1.244 1.127 1.25 1.25 0 0 0 1.156-.771c.061-.15.092-.31.093-.472a18 18 0 0 0-.476-.007\" clip-rule=\"evenodd\"/>",
} as const;

export default function MushroomLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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