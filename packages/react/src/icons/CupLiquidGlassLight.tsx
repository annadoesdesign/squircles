import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M2.512 2c2.5-2.5 16.5-2.5 20 0 2 2 1.517 6.11 1 10l-.113.768c-.614 3.776-1.972 6.577-4.887 9.232l-.358.314C16.39 23.793 14.968 24 12.512 24l-.478-.003c-2.17-.03-3.518-.303-5.164-1.683L6.512 22c-2.915-2.655-4.272-5.456-4.886-9.231L1.512 12c-.5-3.77-.97-7.744.82-9.807zm15.724 9.048a8.3 8.3 0 0 0-3.358.134 9.75 9.75 0 0 1-4.73 0 8.25 8.25 0 0 0-3.36-.134l-3.805.634.016.12c.515 3.882 1.718 6.534 4.523 9.09.845.77 1.5 1.133 2.165 1.333.706.212 1.535.275 2.825.275s2.118-.063 2.825-.275c.665-.2 1.32-.564 2.165-1.333 2.805-2.556 4.008-5.208 4.523-9.09l.015-.12zm-6.099-9.423c-2.06 0-4.061.152-5.669.444-.804.147-1.479.322-1.999.516-.544.203-.805.384-.896.476-.592.591-.945 1.638-1.005 3.285-.043 1.168.065 2.47.227 3.845l3.747-.623a9.8 9.8 0 0 1 3.968.159 8.26 8.26 0 0 0 4.004 0 9.8 9.8 0 0 1 3.97-.159l3.744.623c.162-1.375.271-2.677.229-3.845-.058-1.57-.382-2.593-.924-3.198-.618-.39-1.816-.787-3.522-1.076-1.744-.295-3.815-.447-5.874-.447\" clip-rule=\"evenodd\"/>",
} as const;

export default function CupLiquidGlassLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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