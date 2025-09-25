import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M13.045.005c3.836.075 5.49 1.023 6.123 4.498a14 14 0 0 0-.52-.105c4.746.867 5.864 3.37 5.864 9.602 0 8.333-2 10-12 10s-12-1.667-12-10c0-6.235 1.12-8.738 5.872-9.604q-.272.05-.529.107C6.516.87 8.295 0 12.512 0zM12.512 10c-1.63 0-1.931.553-1.987 3.013-2.46.056-3.013.357-3.013 1.987s.554 1.931 3.013 1.987c.056 2.46.357 3.013 1.987 3.013s1.93-.554 1.986-3.013c2.46-.055 3.014-.357 3.014-1.987s-.554-1.931-3.014-1.987c-.055-2.46-.356-3.013-1.986-3.013m0-8c-2.899 0-3.658.464-4.049 1.021-.17.243-.34.605-.489 1.16l-.07.007C9.21 4.055 10.734 4 12.512 4c1.772 0 3.293.054 4.596.187l-.059-.006c-.148-.555-.318-.917-.488-1.16C16.171 2.464 15.411 2 12.512 2\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function MedicalCaseFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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