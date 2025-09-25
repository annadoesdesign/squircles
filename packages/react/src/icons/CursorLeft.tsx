import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M15.188 46.413c-2.933-18.326 12.903-34.161 31.229-31.23l6.615 1.063a540.4 540.4 0 0 1 193.135 70.51c13.783 8.292 11.104 29.018-4.333 33.532l-77.24 22.552a32.01 32.01 0 0 0-21.74 21.75l-22.562 77.24c-4.515 15.436-25.24 18.115-33.531 4.333l-6.552-11.188A540.4 540.4 0 0 1 16.25 53.028z\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M17.811 45.99C15.167 29.457 29.456 15.17 45.988 17.813l6.615 1.063A537.8 537.8 0 0 1 244.79 89.042c11.79 7.095 9.499 24.827-3.708 28.688l-77.239 22.562a34.67 34.67 0 0 0-23.553 23.552l-22.562 77.24c-3.861 13.207-21.593 15.498-28.688 3.708A537.8 537.8 0 0 1 18.874 52.605zm25.646-12.375c-5.776-.921-10.765 4.068-9.844 9.844l1.063 6.615a521.8 521.8 0 0 0 67.823 186.041l22.427-76.76a50.67 50.67 0 0 1 34.427-34.427l76.76-22.427A521.8 521.8 0 0 0 50.072 34.678z\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M15.176 46.415c-2.933-18.326 12.913-34.171 31.24-31.24l6.604 1.063a540.5 540.5 0 0 1 193.145 70.51c13.785 8.293 11.098 29.021-4.343 33.532l-77.23 22.573a31.99 31.99 0 0 0-21.739 21.74l-22.573 77.229c-4.511 15.442-25.24 18.128-33.531 4.343A540.5 540.5 0 0 1 16.239 53.02zM43.04 36.25c-3.987-.638-7.43 2.804-6.791 6.791l1.052 6.615c10.147 63.415 32.003 124.359 64.375 179.781l20.698-70.823a53.34 53.34 0 0 1 36.239-36.239l70.823-20.698C174.014 69.304 113.07 47.448 49.655 37.301z\"/>",
} as const;

export default function CursorLeft(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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