import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M9.512 1c5.38 0 7.672.944 8.538 4.86q0-.005-.002-.01.226-.09.464-.188c5-2.112 6 1.056 6 6.338s-1 8.45-6 6.338q-.237-.099-.464-.189l.001-.005C17.182 22.057 14.89 23 9.512 23c-7.5 0-9-1.833-9-11s1.5-11 9-11M18.5 13.191q.004-.12.006-.245l.001-.108q-.003.18-.007.353m.006-2.052v-.085q-.002-.125-.006-.247.004.164.006.332\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function VideoCameraFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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