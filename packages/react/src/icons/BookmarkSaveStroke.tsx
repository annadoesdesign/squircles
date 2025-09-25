import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 0c1.918 0 3.823.178 5.728.447 2.514.356 4.43 2.333 4.875 4.778a41.5 41.5 0 0 1-.137 15.543l-.038.193c-.352 1.76-2.406 2.565-3.861 1.515l-6.052-4.37a.88.88 0 0 0-1.03 0l-6.051 4.37c-1.455 1.05-3.51.245-3.861-1.515l-.039-.193A41.5 41.5 0 0 1 1.91 5.225C2.354 2.78 4.27.803 6.785.447 8.689.178 10.595 0 12.512 0m0 2c-1.795 0-3.602.166-5.447.427-1.608.227-2.887 1.504-3.188 3.155a39.5 39.5 0 0 0 .13 14.793l.038.193a.466.466 0 0 0 .73.287l6.052-4.37a2.88 2.88 0 0 1 3.37 0l6.053 4.37a.466.466 0 0 0 .729-.287l.038-.193a39.5 39.5 0 0 0 .13-14.793c-.3-1.65-1.58-2.928-3.187-3.155C16.115 2.166 14.307 2 12.511 2\"/>",
  light: "",
} as const;

export default function BookmarkSaveStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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