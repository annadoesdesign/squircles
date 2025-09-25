import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M10.619 2.07c.597-1.043 1.876-1.674 2.95-1.136C17.233 2.771 24.512 7.266 24.512 14c0 6.51-5.183 9.876-11.647 9.994h.012q-.18.005-.365.006-.184 0-.366-.007l.013.001C5.695 23.876.512 20.51.512 14c0-2 2-6 6-8 1.967-.983 3.208-2.45 3.962-3.687zm2.066.685a.6.6 0 0 0-.172.113.8.8 0 0 0-.16.196c-.87 1.516-2.399 3.451-4.946 4.725-1.644.822-2.894 2.065-3.73 3.32-.874 1.31-1.165 2.425-1.165 2.89 0 2.498.908 4.315 2.36 5.59q.056.163.12.318c-.31-.755-.48-1.613-.48-2.574 0-1.333 1.334-4 4-5.333a6.4 6.4 0 0 0 2.328-1.988c.706-.972 1.99-1.614 3.044-1.04 2.562 1.393 6.628 4.251 6.628 8.36 0 .83-.126 1.581-.36 2.257 1.451-1.276 2.36-3.092 2.36-5.59 0-2.602-1.404-4.923-3.485-6.929-2.055-1.98-4.566-3.448-6.312-4.326z\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" d=\"m12.512 24-.335-.005h-.018q.176.003.353.005M12.865 23.994q-.176.005-.353.006.177-.002.353-.006\"/>",
  regular: "",
  light: "",
} as const;

export default function FireFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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