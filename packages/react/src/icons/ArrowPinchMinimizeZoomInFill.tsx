import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M4.065 14.105a6.4 6.4 0 0 1 4.885-.346l.879.293a1 1 0 0 1 .588.523l.043.109.293.878a6.4 6.4 0 0 1-.346 4.885 1 1 0 0 1-1.79-.894 4.4 4.4 0 0 0 .41-2.655L3.22 22.707a1 1 0 1 1-1.414-1.414l5.809-5.809a4.4 4.4 0 0 0-2.655.41 1 1 0 0 1-.894-1.789M16.075 13.759a6.4 6.4 0 0 1 4.884.346 1 1 0 0 1-.894 1.79 4.4 4.4 0 0 0-2.654-.41l5.808 5.808a1 1 0 0 1-1.414 1.414l-5.808-5.809c-.143.9-.003 1.829.41 2.655a1 1 0 0 1-1.79.894 6.4 6.4 0 0 1-.346-4.885l.293-.878.043-.109a1 1 0 0 1 .589-.523zM1.805 1.293a1 1 0 0 1 1.414 0L9.028 7.1c.142-.9.002-1.828-.41-2.654a1 1 0 0 1 1.789-.894 6.4 6.4 0 0 1 .346 4.884l-.293.88-.043.108a1 1 0 0 1-.588.523l-.88.293a6.4 6.4 0 0 1-4.884-.347 1 1 0 0 1 .894-1.789 4.4 4.4 0 0 0 2.655.41L1.805 2.708a1 1 0 0 1 0-1.414M21.805 1.293a1 1 0 1 1 1.414 1.414l-5.808 5.809c.9.142 1.828.002 2.654-.41a1 1 0 0 1 .894 1.788 6.4 6.4 0 0 1-4.884.347l-.88-.293a1 1 0 0 1-.588-.523l-.043-.109-.293-.879a6.4 6.4 0 0 1 .347-4.884 1 1 0 0 1 1.789.894 4.4 4.4 0 0 0-.41 2.654z\"/>",
  regular: "",
  light: "",
} as const;

export default function ArrowPinchMinimizeZoomInFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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