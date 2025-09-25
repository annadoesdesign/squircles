import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M16.681 13.2a37 37 0 0 1-.082 10.66c-1.185.099-2.541.14-4.087.14-1.513 0-2.843-.04-4.01-.134l-.003-.03a35.5 35.5 0 0 1-.156-10.637c2.742.623 5.596.623 8.338 0M.833 9.589A18.7 18.7 0 0 0 6.4 12.646a37.5 37.5 0 0 0 .04 10.966C1.64 22.757.512 20.26.512 14c0-1.749.09-3.203.321-4.411M24.19 9.589c.232 1.208.322 2.662.322 4.411 0 6.228-1.117 8.73-5.855 9.599a39 39 0 0 0-.032-10.953 18.7 18.7 0 0 0 5.565-3.057\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c3.554 0 5.084.843 5.673 4.321 2.827.435 4.459 1.375 5.355 3.206-6.312 5.52-15.745 5.52-22.056 0 .895-1.83 2.526-2.771 5.352-3.206C7.426.842 8.96.001 12.512 0m0 1.5c-2.42 0-3.155.424-3.589 1.146-.2.334-.38.808-.525 1.495l-.075.006C9.533 4.043 10.92 4 12.513 4c1.588 0 2.975.043 4.184.147l-.072-.006c-.145-.687-.324-1.161-.524-1.495-.434-.722-1.169-1.146-3.589-1.146\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function BagBriefCaseFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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