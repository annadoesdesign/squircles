import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 24c-10 0-12-2-12-12s2-12 12-12c1.515 0 2.845.048 4.014.16v.004a72 72 0 0 1 0 23.672v.005c-1.168.112-2.5.159-4.014.159m-3.894-8.553a1 1 0 0 0 1.341.448 7.7 7.7 0 0 0 3.448-3.448l.008-.016.035-.082.006-.017a1 1 0 0 0 .056-.332q0-.104-.02-.201l-.006-.027-.006-.023-.024-.078q-.004-.01-.006-.019l-.035-.082-.008-.017a7.7 7.7 0 0 0-3.448-3.448 1 1 0 0 0-.894 1.79A5.7 5.7 0 0 1 10.58 11H5.512a1 1 0 1 0 0 2h5.069a5.7 5.7 0 0 1-1.516 1.105 1 1 0 0 0-.447 1.342\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M18.601 23.533a74 74 0 0 0 0-23.065c4.785 1.03 5.911 4.03 5.911 11.532 0 7.503-1.125 10.503-5.91 11.533\"/>",
  regular: "",
  light: "",
} as const;

export default function HideRightPanelFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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