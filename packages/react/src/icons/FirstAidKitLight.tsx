import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 14.25a.75.75 0 0 1 .75.75v1.25h1.25a.75.75 0 0 1 0 1.5h-1.25V19a.75.75 0 0 1-1.5 0v-1.25h-1.25a.75.75 0 0 1 0-1.5h1.25V15a.75.75 0 0 1 .75-.75\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.045.005c3.836.075 5.49 1.023 6.123 4.498a13 13 0 0 0-.482-.097c4.714.873 5.826 3.38 5.826 9.594l-.006.762C24.38 22.436 22.2 24 12.512 24l-.914-.005C2.686 23.893.641 22.188.518 14.762L.512 14c0-6.22 1.115-8.726 5.84-9.597q-.256.046-.497.1C6.516.87 8.295 0 12.512 0zm9.797 10.664a.7.7 0 0 1-.256.077q-2.657.264-5.324.389V12a.75.75 0 0 1-1.5 0v-.807q-3.25.105-6.5 0V12a.75.75 0 0 1-1.5 0v-.865a101 101 0 0 1-5.324-.389.7.7 0 0 1-.257-.077c-.113.901-.169 1.995-.169 3.331 0 4.207.552 6.008 1.71 6.973.6.5 1.505.898 2.962 1.16 1.46.262 3.353.367 5.828.367s4.369-.105 5.828-.367c1.457-.262 2.363-.66 2.962-1.16 1.158-.965 1.71-2.766 1.71-6.973 0-1.336-.057-2.43-.17-3.331M12.512 5.5c-2.475 0-4.368.105-5.828.367-1.457.262-2.362.66-2.962 1.16-.57.476-.993 1.155-1.276 2.226a1 1 0 0 1 .14 0 100 100 0 0 0 5.176.38V9a.75.75 0 0 1 1.5 0v.693q3.25.106 6.5 0V9a.75.75 0 0 1 1.5 0v.634a100 100 0 0 0 5.176-.38 1 1 0 0 1 .14-.001c-.283-1.07-.705-1.75-1.276-2.226-.6-.5-1.505-.898-2.962-1.16-1.46-.262-3.352-.367-5.828-.367M7.444 4.24C8.848 4.067 10.52 4 12.512 4s3.663.068 5.067.24c-.168-.698-.375-1.173-.608-1.505-.548-.782-1.555-1.235-4.459-1.235s-3.911.453-4.459 1.235c-.232.332-.441.806-.61 1.504\" clip-rule=\"evenodd\"/>",
} as const;

export default function FirstAidKitLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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