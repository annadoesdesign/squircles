import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.512 13.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12q-.001.537-.01 1.044.01.462.01.956l-.003.285q.002.107.003.215c0 1.81-.107 3.29-.389 4.494h-.059C23.053 23.05 20.064 24 12.512 24l-.914-.005C2.686 23.893.641 22.188.518 14.762L.512 14q0-.494.01-.956Q.514 12.537.513 12c0-10 2-12 12-12m0 5.5c-2.475 0-4.368.105-5.828.367-1.457.262-2.362.66-2.962 1.16-1.158.965-1.71 2.766-1.71 6.973s.552 6.008 1.71 6.973c.6.5 1.505.898 2.962 1.16 1.46.262 3.353.367 5.828.367s4.369-.105 5.828-.367c1.457-.262 2.363-.66 2.962-1.16.526-.439.925-1.05 1.206-1.982-6.631-.078-7.996-1.017-7.996-4.991s1.364-4.913 7.996-4.992c-.28-.93-.68-1.542-1.206-1.98-.6-.5-1.505-.899-2.962-1.16-1.46-.263-3.352-.368-5.828-.368M22.7 10.506c-1.47.014-2.642.066-3.58.179-1.117.133-1.784.338-2.192.564-.349.194-.534.416-.666.755-.156.403-.25 1.015-.25 1.996l.004.35c.02.78.11 1.293.246 1.646.132.339.317.561.666.755.408.226 1.075.43 2.193.564.963.116 2.172.167 3.699.18.12-.88.183-1.95.19-3.262-.01-1.569-.108-2.78-.31-3.727M12.512 1.5c-2.47 0-4.342.125-5.777.435-1.418.305-2.307.77-2.912 1.376-.595.594-1.052 1.46-1.358 2.834C4.165 4.468 7.217 4 12.512 4s8.346.468 10.046 2.145c-.306-1.373-.762-2.24-1.356-2.834-.606-.606-1.494-1.07-2.912-1.376-1.435-.31-3.308-.435-5.778-.435\" clip-rule=\"evenodd\"/>",
} as const;

export default function WalletMoneyLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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