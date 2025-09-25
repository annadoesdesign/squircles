import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 2a1 1 0 0 1 1 1v2.045c2.242.198 4.225 1.05 5.823 2.217l.97-.969a1 1 0 1 1 1.414 1.414l-.867.866c1.072 1.096 1.855 2.323 2.284 3.5a1 1 0 0 1 1.083 1.634l-.731.73C23.142 18.022 18.674 23 12.512 23c-6.161 0-10.63-4.98-10.976-8.562l-.73-.731a1 1 0 0 1 1.081-1.635c.396-1.085 1.093-2.214 2.04-3.243L2.805 7.707A1 1 0 1 1 4.22 6.293l1.183 1.183c1.644-1.277 3.733-2.22 6.11-2.431V3a1 1 0 0 1 1-1m0 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function EyeOpenLashesFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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