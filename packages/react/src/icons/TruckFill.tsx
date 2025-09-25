import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M9.012 2c4.521 0 6.73.612 7.74 3h.26c6.25 0 7.5 1.25 7.5 7.5 0 3.758-.453 5.706-2.173 6.664a4.001 4.001 0 0 1-7.327.773 17 17 0 0 1-.738-.063c-1.251.202-2.956.099-5.262.099l-.02-.001a4 4 0 0 1-7.45-2.452c-.786-1.366-1.03-3.437-1.03-6.534C.512 3.498 1.93 2 9.012 2m-3.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m13 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-3.875 1.002-.006.025.007-.027zM17.505 12q-.014 1.184-.066 2.146l-.007.002a4 4 0 0 1 4.715 2.182q.062-.194.117-.443c.17-.785.248-1.864.248-3.387q0-.258-.004-.5zm-.224-4.999c.13.855.197 1.847.22 2.999h4.9a9 9 0 0 0-.137-.887c-.164-.762-.384-1.105-.572-1.293s-.531-.408-1.293-.572c-.738-.159-1.736-.238-3.118-.247\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function TruckFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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