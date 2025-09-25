import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M1.515 13.502c.438.151.886.249 1.318.315 1.117.173 2.486.192 4.023.18 1.362-.01 2.859-.045 4.656-.056v10.05c-8.301-.127-10-1.97-10-9.991q0-.254.003-.498M23.512 14c0 8.02-1.698 9.864-10 9.991v-10.05c1.797.011 3.294.045 4.657.056 1.536.012 2.906-.007 4.023-.18a7.6 7.6 0 0 0 1.316-.315q.004.245.004.498\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M16.512 0c4 0 5 2.239 5 5q-.001.178-.014.353l-.026-.005c2.279.427 3.04 1.38 3.04 3.506 0 1.27-.328 2.034-1.087 2.493h.001l-.011.007c-.699.417-1.759.577-3.266.626q-.345.01-.723.014-.19.003-.39.004h-.267q-.563 0-1.191-.009c-.835-.01-1.756-.024-2.772-.036a190 190 0 0 0-2.294-.015c-.997 0-1.92.01-2.773.021q-1.027.014-1.921.025a133 133 0 0 1-1.854.014q-.216-.001-.423-.005-.24-.004-.465-.01C1.764 11.9.512 11.343.512 8.853c0-2.128.763-3.08 3.046-3.506l-.032.006A5 5 0 0 1 3.512 5c0-2.761 1-5 5-5 2 0 3.25 1.25 4 2.5.75-1.25 2-2.5 4-2.5m-8 2c-1.63 0-2.214.444-2.46.741-.31.374-.54 1.056-.54 2.259q0 .06.003.117l-.152.012q.116-.008.236-.015a40 40 0 0 1 1.168-.058l.028-.002q.24-.008.493-.014.21-.007.43-.012l.573-.01.228-.002q.82-.01 1.744-.014l1-.001.096-.17q.008-.017.017-.034a6.7 6.7 0 0 0-.579-1.268C10.228 2.581 9.518 2 8.512 2m8 0c-1.006 0-1.716.58-2.285 1.53-.265.442-.453.9-.58 1.267q.01.017.018.034l.094.17h.99a187 187 0 0 1 2.055.019l.559.01.152.004q.954.022 1.753.07l.354.022-.114-.009q.004-.058.004-.117c0-1.203-.23-1.885-.54-2.259-.246-.297-.83-.741-2.46-.741\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function PresentFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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