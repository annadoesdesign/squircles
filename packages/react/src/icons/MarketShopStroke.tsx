import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M4.414 1.5c4-2 12-2 16 0 2.934 1.467 5.166 7.238 3.092 10.21l.006.791-.006.876c-.111 8.437-1.943 10.45-9.864 10.611l-.058.001q-.519.011-1.072.012l-.838-.006c-8.17-.117-10.044-2.078-10.156-10.618l-.006-.876q0-.272.003-.537C-.834 9.14 1.302 3.26 4.228 1.6zM12.513 17c-.606 0-.854.085-.95.134-.038.02-.146.07-.295.392-.174.373-.352 1.011-.487 2.092a31 31 0 0 0-.182 2.344q.88.038 1.913.038 1.031 0 1.912-.038c-.043-.915-.1-1.689-.18-2.344-.135-1.081-.315-1.72-.488-2.093-.15-.321-.257-.373-.295-.392-.084-.043-.284-.112-.737-.129zm3.384-4.895a5.02 5.02 0 0 1-3.483 1.395l-.253-.006a5 5 0 0 1-3.231-1.389A4.98 4.98 0 0 1 5.46 13.5c-.765 0-1.427-.1-1.997-.277q.026.009.054.018c.022 1.99.14 3.514.383 4.696.27 1.306.664 2.05 1.12 2.525.447.468 1.133.865 2.345 1.139.374.084.785.15 1.239.207C8.868 16.255 9.816 15 12.513 15s3.64 1.255 3.905 6.808c.454-.057.866-.123 1.24-.207 1.212-.274 1.898-.671 2.346-1.139.455-.476.85-1.22 1.119-2.525.246-1.195.362-2.739.383-4.76-.601.207-1.31.323-2.139.323l-.252-.006a4.98 4.98 0 0 1-3.218-1.389M12.414 2c-2.847 0-5.496.485-7.105 1.29-.526.262-1.192.905-1.77 1.92-.563.988-.933 2.141-1.012 3.19-.08 1.065.148 1.814.503 2.258.306.383.945.842 2.43.842.817 0 1.548-.32 2.081-.834a2 2 0 0 1 2.773-.004 3.02 3.02 0 0 0 2.1.838c.823 0 1.56-.32 2.099-.837l.15-.13a2 2 0 0 1 2.623.133 2.98 2.98 0 0 0 2.081.834c1.485 0 2.124-.459 2.43-.842.355-.444.583-1.193.503-2.259-.079-1.049-.448-2.201-1.011-3.19-.578-1.014-1.244-1.657-1.77-1.92C17.912 2.485 15.263 2 12.415 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function MarketShopStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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