import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M186.511 76.189c5.051-3.03 11.604-1.394 14.635 3.656 3.031 5.051 1.395 11.604-3.656 14.636A265.95 265.95 0 0 0 113.042 175l-8.166 12.25a10.67 10.67 0 0 1-9.125 4.75 10.68 10.68 0 0 1-8.896-5.177l-6.104-10.177a74.9 74.9 0 0 0-22.667-23.771c-4.902-3.267-6.226-9.89-2.958-14.791 3.267-4.902 9.89-6.226 14.791-2.959a96.2 96.2 0 0 1 26.48 26.417 287.2 287.2 0 0 1 90.114-85.354\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M186.51 76.189c5.051-3.03 11.604-1.394 14.635 3.656 3.031 5.051 1.395 11.604-3.656 14.636A265.95 265.95 0 0 0 113.041 175l-8.166 12.25a10.67 10.67 0 0 1-9.125 4.75 10.68 10.68 0 0 1-8.896-5.177l-6.104-10.177a74.9 74.9 0 0 0-22.667-23.771c-4.902-3.267-6.226-9.89-2.958-14.791 3.267-4.902 9.89-6.226 14.791-2.959a96.2 96.2 0 0 1 26.48 26.417 287.2 287.2 0 0 1 90.114-85.354\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M187.885 78.47c3.788-2.271 8.707-1.038 10.979 2.75s1.038 8.706-2.75 10.978a268.6 268.6 0 0 0-85.291 81.323l-8.167 12.25a8 8 0 0 1-6.844 3.563 8.02 8.02 0 0 1-6.677-3.885l-6.104-10.178a77.5 77.5 0 0 0-23.469-24.614 8 8 0 0 1 8.875-13.313 93.5 93.5 0 0 1 27.896 29.052l1.177-1.75a284.6 284.6 0 0 1 90.375-86.177\"/>",
} as const;

export default function Checkmark(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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