import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.512 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12q-.001.54-.01 1.05.01.46.01.95l-.003.285q.002.107.003.215c0 1.81-.107 3.29-.389 4.494h-.059C23.053 23.05 20.064 24 12.512 24l-.914-.005C2.686 23.893.641 22.188.518 14.762L.512 14q.001-.488.01-.944Q.514 12.543.513 12c0-10 2-12 12-12m0 6c-2.467 0-4.325.105-5.74.36-1.41.253-2.222.628-2.73 1.051-.96.8-1.53 2.368-1.53 6.589s.57 5.788 1.53 6.589c.508.423 1.32.798 2.73 1.052 1.415.254 3.273.359 5.74.359s4.325-.105 5.74-.36c1.411-.253 2.222-.628 2.73-1.051.412-.344.75-.83 1.005-1.606-6.183-.123-7.475-1.116-7.475-4.983s1.292-4.861 7.475-4.984c-.254-.776-.593-1.261-1.005-1.605-.508-.423-1.319-.798-2.73-1.052C16.837 6.105 14.98 6 12.512 6m9.776 5.009c-1.266.02-2.284.073-3.108.172-1.091.13-1.684.324-2.009.505-.247.137-.354.269-.443.499-.123.316-.216.854-.216 1.815l.004.34c.02.752.104 1.198.212 1.475.09.23.196.362.443.5.325.18.918.374 2.01.504.842.101 1.888.153 3.195.171.08-.744.126-1.63.133-2.693-.006-1.368-.078-2.44-.221-3.288M12.512 2c-2.46 0-4.29.126-5.672.424-1.36.293-2.148.724-2.664 1.24-.416.416-.774 1.01-1.051 1.936C4.916 4.363 7.842 4 12.512 4s7.595.364 9.387 1.6c-.278-.926-.635-1.52-1.05-1.936-.517-.516-1.305-.947-2.665-1.24C16.802 2.126 14.972 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function WalletMoneyStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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