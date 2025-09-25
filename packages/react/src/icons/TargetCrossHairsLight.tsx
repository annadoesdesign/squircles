import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.502.25a.75.75 0 0 1 .75.75v2.006c6.608.1 8.143 1.636 8.244 8.244h2.006a.75.75 0 0 1 0 1.5h-2.006c-.1 6.608-1.636 8.142-8.244 8.243V23a.75.75 0 0 1-1.5 0v-2.007c-6.608-.1-8.144-1.635-8.244-8.243H1.502a.75.75 0 0 1 0-1.5h2.006c.1-6.608 1.636-8.143 8.244-8.244V1a.75.75 0 0 1 .75-.75m.75 6.75a.75.75 0 0 1-1.5 0V4.506c-1.474.023-2.613.12-3.504.311-1.02.22-1.611.544-1.998.931s-.711.978-.93 1.998c-.193.891-.288 2.03-.311 3.504h2.493a.75.75 0 0 1 0 1.5H5.009c.023 1.474.118 2.613.31 3.504.22 1.02.544 1.611.93 1.998.388.387.98.71 1.999.93.89.193 2.03.288 3.504.311V17a.75.75 0 0 1 1.5 0v2.493c1.474-.023 2.613-.118 3.504-.31 1.02-.22 1.61-.544 1.998-.931s.71-.978.93-1.998c.192-.891.288-2.03.31-3.504h-2.492a.75.75 0 0 1 0-1.5h2.493c-.023-1.474-.119-2.613-.31-3.504-.22-1.02-.544-1.611-.931-1.998s-.979-.71-1.998-.93c-.891-.193-2.03-.289-3.504-.312z\" clip-rule=\"evenodd\"/>",
} as const;

export default function TargetCrossHairsLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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