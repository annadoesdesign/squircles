import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M24.397 11.086c.08.867.115 1.834.115 2.914 0 8.333-2 10-12 10s-12-1.667-12-10c0-1.08.034-2.047.114-2.914q3.441.256 6.886.364V12a1 1 0 0 0 2 0v-.499q3 .057 6 0V12a1 1 0 0 0 2 0v-.55q3.446-.108 6.885-.364M12.512 15a1 1 0 0 0-1 1v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 0 0-1-1M13.045.005c3.836.075 5.49 1.023 6.123 4.498q-.105-.022-.212-.043c3.02.62 4.49 1.967 5.13 4.644q-3.285.24-6.574.345V9a1 1 0 1 0-2 0v.501q-3 .057-6 0V9a1 1 0 0 0-2 0v.45a158 158 0 0 1-6.574-.346c.635-2.66 2.09-4.008 5.07-4.632l-.153.03C6.516.873 8.295 0 12.512 0zM12.512 2c-2.899 0-3.658.464-4.049 1.021-.17.243-.34.604-.489 1.159C9.264 4.05 10.766 4 12.512 4c1.745 0 3.247.052 4.536.18-.148-.554-.317-.916-.487-1.159C16.171 2.464 15.411 2 12.512 2\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function FirstAidKitFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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