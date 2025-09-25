import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M11.513 23.992c-3.43-.053-5.834-.395-7.5-1.313 2.614-1.44 3.409-4.298 3.49-9.678h4.01zM17.52 13c.082 5.381.878 8.239 3.492 9.68-1.666.917-4.07 1.26-7.5 1.312V13zM5.504 13c-.031 1.966-.159 3.485-.415 4.672-.293 1.36-.724 2.148-1.24 2.664-.351.351-.829.659-1.525.915C1.034 19.583.581 16.984.521 13zM24.504 13c-.06 3.984-.513 6.584-1.804 8.25-.695-.255-1.173-.563-1.523-.914-.516-.515-.947-1.304-1.24-2.664-.257-1.187-.385-2.706-.417-4.671zM2.323 2.749c.697.255 1.175.565 1.526.916.515.516.947 1.304 1.24 2.664.256 1.188.384 2.706.415 4.672H.52c.06-3.984.511-6.586 1.802-8.252M13.513.007c3.43.053 5.834.395 7.5 1.313-2.615 1.44-3.41 4.299-3.493 9.68h-4.007zM22.7 2.749c1.291 1.666 1.743 4.268 1.804 8.252H19.52c.032-1.966.16-3.484.416-4.672.294-1.36.725-2.148 1.24-2.664.351-.351.828-.66 1.524-.916M11.513 11h-4.01c-.081-5.382-.877-8.24-3.492-9.68C5.677.4 8.082.06 11.513.007z\"/>",
  regular: "",
  light: "",
} as const;

export default function BasketballFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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