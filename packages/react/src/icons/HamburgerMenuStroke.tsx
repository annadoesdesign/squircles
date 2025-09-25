import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M1.422 18.004c7.378-.671 14.803-.671 22.182 0a1.001 1.001 0 0 1-.182 1.992c-7.258-.66-14.56-.66-21.818 0a1 1 0 0 1-.182-1.992M1.422 11.004c7.378-.671 14.803-.671 22.182 0a1.001 1.001 0 0 1-.182 1.992c-7.258-.66-14.56-.66-21.818 0a1 1 0 0 1-.182-1.992M1.422 4.004c7.378-.671 14.803-.671 22.182 0a1.001 1.001 0 0 1-.182 1.992c-7.258-.66-14.56-.66-21.818 0a1 1 0 0 1-.182-1.992\"/>",
  light: "",
} as const;

export default function HamburgerMenuStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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