import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M19.012 11c1.51 0 2.876.61 3.87 1.594a.75.75 0 0 1 1.38.406h-.012v7.126a.749.749 0 0 1-1.368.28A5.5 5.5 0 1 1 19.012 11m0 1.5a4 4 0 1 0 3.75 5.392v-2.785a4 4 0 0 0-3.75-2.607M6.512 2.25c1.588 0 2.81.593 3.686 1.688.844 1.052 1.326 2.513 1.616 4.184.576 3.333.448 7.93.448 12.878a.75.75 0 0 1-1.5 0c0-1.85.016-3.615.01-5.263a1 1 0 0 1-.127.013H2.253c-.008 1.665.009 3.43.009 5.25a.75.75 0 0 1-1.5 0c0-4.7-.128-9.295.448-12.688.289-1.7.769-3.203 1.606-4.292.87-1.133 2.091-1.77 3.696-1.77m0 1.5c-1.145 0-1.924.425-2.507 1.184-.616.8-1.043 2.018-1.316 3.63-.277 1.63-.383 3.559-.42 5.686h8.376q.057 0 .112.009c-.034-2.241-.136-4.23-.422-5.881-.273-1.579-.697-2.743-1.306-3.503-.576-.718-1.356-1.125-2.517-1.125\" clip-rule=\"evenodd\"/>",
} as const;

export default function CaseSettingsTypographyLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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