import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 14a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 1-1\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.045.005c3.836.075 5.49 1.023 6.123 4.498a14 14 0 0 0-.52-.105c4.746.867 5.864 3.37 5.864 9.602l-.006.762C24.38 22.436 22.2 24 12.512 24l-.914-.005C2.686 23.893.641 22.188.518 14.762L.512 14c0-6.235 1.12-8.738 5.872-9.604q-.272.05-.529.107C6.516.87 8.295 0 12.512 0zm9.332 11.012q-2.429.238-4.865.358V12a1 1 0 1 1-2 0v-.548q-3 .09-6 0V12a1 1 0 1 1-2 0v-.625q-2.436-.12-4.866-.358A28 28 0 0 0 2.512 14c0 4.221.57 5.788 1.53 6.589.508.423 1.32.798 2.73 1.052 1.415.254 3.273.359 5.74.359s4.325-.105 5.74-.36c1.411-.253 2.222-.628 2.73-1.051.96-.8 1.53-2.368 1.53-6.589a28 28 0 0 0-.135-2.983M12.512 6c-2.467 0-4.325.105-5.74.36-1.41.253-2.222.628-2.73 1.051-.417.348-.76.84-1.015 1.632q2.24.215 4.485.33V9a1 1 0 0 1 2 0v.451q3 .09 6 0V9a1 1 0 0 1 2 0v.372a100 100 0 0 0 4.485-.329c-.256-.792-.598-1.284-1.015-1.632-.508-.423-1.319-.798-2.73-1.052C16.837 6.105 14.98 6 12.512 6m0-4c-2.899 0-3.658.464-4.049 1.021-.17.243-.34.605-.489 1.16l-.071.007C9.209 4.055 10.733 4 12.513 4c1.771 0 3.292.054 4.595.187l-.059-.006c-.148-.555-.318-.917-.488-1.16C16.171 2.464 15.411 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function FirstAidKitStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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