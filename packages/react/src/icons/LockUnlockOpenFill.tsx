import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c4 0 8 1.5 8 9q-.001.204-.004.401c1.563 1.152 2.004 3.17 2.004 6.599 0 6.667-1.666 8-10 8s-10-1.333-10-8c0-3.629.496-5.674 2.29-6.788a.8.8 0 0 1 .32-.183C6.639 8.242 8.974 8 12.512 8c2.593 0 4.54.13 5.992.508-.082-3.075-.94-4.555-1.81-5.316C15.732 2.35 14.319 2 12.513 2c-1.805 0-3.218.35-4.182 1.192-.475.415-.944 1.045-1.288 2.032C6.887 5.67 6.482 6 6.01 6c-.64 0-1.128-.589-.934-1.2C6.312.9 9.412 0 12.512 0m0 13c-2.5 0-3 .5-3 3s.5 3 3 3 3-.5 3-3-.5-3-3-3\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function LockUnlockOpenFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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