import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 11a3 3 0 1 1 0 6 3 3 0 0 1 0-6\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 2a1 1 0 0 1 1 1v2.045c2.242.198 4.225 1.05 5.823 2.217l.97-.969a1 1 0 1 1 1.414 1.414l-.867.866c1.072 1.096 1.855 2.323 2.284 3.5a1 1 0 0 1 1.083 1.634l-.731.73C23.142 18.022 18.674 23 12.512 23l-.3-.004c-6.006-.158-10.336-5.033-10.676-8.558l-.73-.731a1 1 0 0 1 1.081-1.635c.396-1.085 1.093-2.214 2.04-3.243L2.805 7.707A1 1 0 1 1 4.22 6.293l1.183 1.183c1.644-1.277 3.733-2.22 6.11-2.431V3a1 1 0 0 1 1-1m0 5C9.881 7 7.6 8.107 5.963 9.62c-1.699 1.57-2.45 3.325-2.45 4.38s.751 2.81 2.45 4.38C7.6 19.894 9.881 21 12.513 21c2.63 0 4.912-1.107 6.548-2.62 1.7-1.57 2.451-3.325 2.451-4.38s-.752-2.81-2.451-4.38C17.425 8.106 15.144 7 12.512 7\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function EyeOpenLashesStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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