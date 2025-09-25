import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.062 7.4a.75.75 0 0 1 .9 1.2 24.8 24.8 0 0 0-6.38 7.073l-.426.713a.75.75 0 0 1-1.174.144l-3-3a.75.75 0 0 1 1.06-1.06l2.322 2.321a26.3 26.3 0 0 1 6.698-7.39\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c1.477 0 2.952.486 4.07 2.17 1.984-.4 3.371.3 4.416 1.345 1.044 1.044 1.743 2.43 1.342 4.414 1.686 1.119 2.172 2.594 2.172 4.071s-.486 2.951-2.172 4.07c.401 1.983-.298 3.37-1.342 4.414-1.045 1.045-2.431 1.744-4.414 1.343C15.464 23.513 13.99 24 12.512 24c-1.477 0-2.953-.486-4.072-2.173-1.983.4-3.369-.298-4.413-1.342s-1.745-2.431-1.344-4.415C.998 14.951.513 13.477.513 12s.485-2.952 2.17-4.071c-.4-1.983.3-3.37 1.344-4.414C5.07 2.47 6.457 1.77 8.44 2.17 9.56.486 11.035 0 12.512 0m0 1.5c-1.082 0-2.035.317-2.821 1.501a1.5 1.5 0 0 1-1.547.64c-1.393-.28-2.291.169-3.057.934-.765.766-1.215 1.664-.933 3.057a1.5 1.5 0 0 1-.64 1.547c-1.11.737-1.459 1.62-1.498 2.62L2.012 12c0 1.082.317 2.034 1.501 2.82a1.5 1.5 0 0 1 .64 1.547c-.28 1.394.169 2.292.934 3.058.765.764 1.662 1.213 3.056.931a1.5 1.5 0 0 1 1.547.642c.786 1.185 1.74 1.502 2.822 1.502s2.035-.317 2.822-1.502l.066-.093a1.5 1.5 0 0 1 1.48-.549c1.394.282 2.292-.167 3.057-.932s1.214-1.663.933-3.057c-.121-.598.132-1.21.64-1.547 1.185-.786 1.502-1.739 1.502-2.82 0-1.082-.317-2.035-1.5-2.821a1.5 1.5 0 0 1-.642-1.547c.281-1.394-.168-2.292-.933-3.057s-1.664-1.215-3.058-.933A1.5 1.5 0 0 1 15.332 3c-.786-1.184-1.738-1.501-2.82-1.501\" clip-rule=\"evenodd\"/>",
} as const;

export default function VerifyLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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