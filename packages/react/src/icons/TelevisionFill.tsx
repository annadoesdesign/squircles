import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M14.805.293a1 1 0 1 1 1.414 1.414l-1.33 1.33c7.948.262 9.623 2.1 9.623 8.963 0 5.165-.948 7.483-4.805 8.427l.753 2.256a1 1 0 1 1-1.896.633l-.85-2.547c-1.43.165-3.147.23-5.202.23s-3.772-.065-5.203-.23l-.849 2.547a1 1 0 1 1-1.896-.633l.752-2.256C1.46 19.483.512 17.164.512 12c0-6.863 1.675-8.701 9.622-8.964L8.805 1.707A1 1 0 1 1 10.22.293l2.292 2.292z\"/>",
  regular: "",
  light: "",
} as const;

export default function TelevisionFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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