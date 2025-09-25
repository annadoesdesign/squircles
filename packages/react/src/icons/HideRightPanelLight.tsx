import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.841 8.665a.75.75 0 0 1 1.006-.336 7.46 7.46 0 0 1 3.336 3.336l.01.024a.8.8 0 0 1 .07.311.75.75 0 0 1-.07.31l-.01.025a7.46 7.46 0 0 1-3.336 3.336.75.75 0 0 1-.67-1.342 5.95 5.95 0 0 0 1.963-1.579H6.512a.75.75 0 0 1 0-1.5h5.628a5.95 5.95 0 0 0-1.963-1.58.75.75 0 0 1-.336-1.005\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m0 1.5c-2.47 0-4.342.125-5.777.435-1.418.305-2.307.77-2.912 1.376-.606.605-1.07 1.494-1.376 2.912-.31 1.435-.435 3.307-.435 5.777s.125 4.342.435 5.777c.306 1.418.77 2.307 1.376 2.912.605.606 1.494 1.07 2.912 1.376 1.435.31 3.307.435 5.777.435 1.682 0 3.086-.062 4.264-.196.645-6.855.645-13.754 0-20.609-1.178-.134-2.582-.195-4.264-.195m5.792.438c.607 6.694.607 13.43 0 20.124 1.41-.306 2.294-.769 2.898-1.373.605-.605 1.07-1.494 1.376-2.912.31-1.435.434-3.307.434-5.777s-.125-4.342-.434-5.777c-.306-1.418-.77-2.307-1.376-2.912-.604-.604-1.488-1.068-2.898-1.373\" clip-rule=\"evenodd\"/>",
} as const;

export default function HideRightPanelLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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