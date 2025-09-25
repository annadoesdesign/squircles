import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M7.958 6.168a1 1 0 1 1 1.109 1.664l-.213.142A15.8 15.8 0 0 0 5.489 11h16.023a1 1 0 1 1 0 2H5.49a15.8 15.8 0 0 0 3.365 3.026l.213.142a1 1 0 1 1-1.11 1.664l-.212-.142a17.8 17.8 0 0 1-4.923-4.922l-.142-.213a1 1 0 0 1 0-1.11l.142-.213A17.8 17.8 0 0 1 7.745 6.31z\"/>",
  regular: "",
  light: "",
} as const;

export default function ArrowLeftArrowFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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