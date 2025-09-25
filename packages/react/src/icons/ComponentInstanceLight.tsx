import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 2c.966 0 10 9.034 10 10s-9.034 10-10 10-10-9.034-10-10 9.035-10 10-10m0 1.736c-.264.205-.595.48-.98.819A74 74 0 0 0 8.21 7.698a74 74 0 0 0-3.143 3.322 22 22 0 0 0-.818.98c.204.265.48.595.818.98.833.95 1.968 2.146 3.143 3.322a74 74 0 0 0 3.322 3.143c.385.338.716.613.98.818.265-.205.596-.48.98-.818a74 74 0 0 0 3.322-3.143 74 74 0 0 0 3.143-3.322c.338-.384.613-.716.818-.98-.205-.264-.48-.596-.817-.98a74 74 0 0 0-3.144-3.322 74 74 0 0 0-3.321-3.143 22 22 0 0 0-.98-.819\" clip-rule=\"evenodd\"/>",
} as const;

export default function ComponentInstanceLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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