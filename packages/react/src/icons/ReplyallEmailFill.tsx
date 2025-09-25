import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12M9.22 6.293a1 1 0 0 0-1.414 0 12.5 12.5 0 0 0-2.763 4.19l-.458 1.146a1 1 0 0 0 0 .742l.458 1.146a12.5 12.5 0 0 0 2.763 4.19 1 1 0 1 0 1.414-1.414 10.5 10.5 0 0 1-2.32-3.52L6.59 12l.309-.773a10.5 10.5 0 0 1 2.32-3.52 1 1 0 0 0 0-1.414m6.14.177a1 1 0 0 0-1.377-.318 10.62 10.62 0 0 0-4.232 5.063l-.159.393a1.001 1.001 0 0 0-.02.73l.013.033.166.414a10.62 10.62 0 0 0 4.232 5.063 1 1 0 0 0 1.06-1.696 8.6 8.6 0 0 1-2.994-3.173c.901-.02 1.727-.048 2.415-.057 1.125-.016 1.946.021 2.557.174.569.142.875.364 1.078.694.233.379.414 1.036.414 2.211a1 1 0 0 0 2 0c0-1.324-.194-2.419-.71-3.259-.547-.888-1.366-1.354-2.298-1.587-.888-.222-1.943-.248-3.068-.232-.75.01-1.52.037-2.365.056a8.6 8.6 0 0 1 2.972-3.131 1 1 0 0 0 .317-1.378\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function ReplyallEmailFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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