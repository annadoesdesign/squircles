import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 2c1.971 0 3.631.067 5.027.234a50 50 0 0 1 0 19.53c-1.396.168-3.056.236-5.027.236s-3.632-.067-5.027-.235a50 50 0 0 1 0-19.53C8.88 2.066 10.54 2 12.512 2m-2 14c-.833 0-1 .167-1 1s.167 1 1 1 1-.167 1-1-.167-1-1-1m4 0c-.833 0-1 .167-1 1s.167 1 1 1 1-.167 1-1-.167-1-1-1m-4-5c-.833 0-1 .167-1 1s.167 1 1 1 1-.167 1-1-.167-1-1-1m4 0c-.833 0-1 .167-1 1s.167 1 1 1 1-.167 1-1-.167-1-1-1m-4-5c-.833 0-1 .167-1 1s.167 1 1 1 1-.167 1-1-.167-1-1-1m4 0c-.833 0-1 .167-1 1s.167 1 1 1 1-.167 1-1-.167-1-1-1\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M5.375 2.621a52 52 0 0 0 0 18.757C1.471 20.34.512 17.768.512 12c0-5.767.958-8.34 4.863-9.379M19.648 2.621C23.554 3.66 24.512 6.232 24.512 12s-.959 8.34-4.864 9.378a52 52 0 0 0 0-18.757\"/>",
  regular: "",
  light: "",
} as const;

export default function BandaidFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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