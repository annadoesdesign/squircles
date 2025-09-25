import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.776 1.254c1.985-.048 3.875.321 5.026 1.472 1.153 1.152 1.513 3.046 1.454 5.031-.06 2.027-.558 4.343-1.337 6.55-.778 2.208-1.85 4.35-3.085 6.022-1.214 1.643-2.68 2.96-4.285 3.28-2.99.598-5.199-.807-6.6-2.27a11.6 11.6 0 0 1-1.95-2.78l-.008-.019-.018-.008a11.16 11.16 0 0 1-2.797-1.91C1.7 15.233.297 13.025.908 9.976 1.234 8.343 2.55 6.862 4.2 5.64c1.675-1.242 3.82-2.31 6.028-3.08s4.522-1.257 6.548-1.306m.036 1.5c-1.833.045-3.99.49-6.09 1.223-2.1.732-4.101 1.736-5.629 2.868C3.54 7.997 2.595 9.192 2.38 10.27c-.474 2.369.577 4.085 1.826 5.262a9.7 9.7 0 0 0 2.189 1.534l3.552-3.55a.75.75 0 0 1 1.06 1.06l-3.545 3.542q.09.17.216.384c.303.51.755 1.171 1.356 1.798 1.2 1.253 2.918 2.3 5.221 1.839 1.043-.209 2.224-1.145 3.373-2.701 1.129-1.527 2.137-3.53 2.877-5.63.741-2.102 1.2-4.261 1.253-6.095.055-1.874-.315-3.227-1.015-3.927-.703-.701-2.057-1.077-3.93-1.032\"/>",
} as const;

export default function EmailSendOutLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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