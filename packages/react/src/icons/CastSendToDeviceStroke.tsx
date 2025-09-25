import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.423 0c2.33 0 4.264.116 5.842.456 1.59.343 2.887.928 3.875 1.916s1.573 2.285 1.916 3.875c.34 1.579.456 3.513.456 5.843 0 3.834-.303 6.673-1.512 8.628-1.282 2.071-3.427 2.942-6.434 3.276a1 1 0 0 1-.222-1.988c2.767-.308 4.151-1.042 4.954-2.34.876-1.415 1.214-3.71 1.214-7.576 0-2.29-.116-4.054-.41-5.421-.293-1.356-.747-2.254-1.376-2.883S19.2 2.704 17.843 2.411C16.476 2.116 14.713 2 12.423 2c-3.867 0-6.162.338-7.577 1.214-1.297.803-2.032 2.187-2.34 4.954a1 1 0 0 1-1.988-.222C.853 4.94 1.723 2.795 3.795 1.513 5.749.303 8.589 0 12.423 0M.75 19.001a1 1 0 0 1 1.225-.707 6 6 0 0 1 4.243 4.243 1 1 0 0 1-1.932.518 4 4 0 0 0-2.828-2.828A1 1 0 0 1 .75 19M1.786 15.138a1 1 0 0 1 1.224-.707 10 10 0 0 1 7.072 7.071 1 1 0 0 1-1.932.518 8 8 0 0 0-5.657-5.658 1 1 0 0 1-.707-1.224\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.82 11.274a1 1 0 0 1 1.226-.708 14 14 0 0 1 9.9 9.9 1.001 1.001 0 0 1-1.933.518A12 12 0 0 0 3.528 12.5a1 1 0 0 1-.707-1.225\"/>",
  light: "",
} as const;

export default function CastSendToDeviceStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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