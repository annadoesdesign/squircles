import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M9.66 2.005c4.087.06 6.135.723 7.094 2.995h.258c6.25 0 7.5 1.25 7.5 7.5 0 3.758-.453 5.706-2.173 6.664a4.001 4.001 0 0 1-7.327.773 17 17 0 0 1-.735-.063c-.772.125-1.715.135-2.866.122l-2.399-.023-.02-.001a4 4 0 0 1-7.45-2.453C.816 16.256.552 14.392.516 11.67l-.004-.685C.512 3.498 1.93 2 9.012 2zM5.512 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4m13 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-9.5-12c-1.728 0-2.966.094-3.872.3-.877.2-1.314.477-1.58.76-.277.291-.557.787-.756 1.762-.202.993-.292 2.33-.292 4.164 0 1.786.085 3.1.277 4.083a4 4 0 0 1 6.723 2.906c1.63.01 2.74.054 3.706 0 .753-.041 1.117-.14 1.302-.225a4 4 0 0 1 .79-2.146c.137-1.083.202-2.565.202-4.618 0-1.835-.09-3.171-.292-4.164-.199-.975-.479-1.47-.755-1.762-.267-.283-.704-.56-1.58-.76-.907-.206-2.144-.3-3.873-.3m8.494 8q-.013 1.183-.066 2.146l-.024.006a4.004 4.004 0 0 1 4.731 2.178q.062-.194.117-.443c.17-.785.248-1.864.248-3.387q0-.258-.004-.5zm-.383 2.248-.035.014.05-.019zm.159-7.247c.13.854.196 1.847.22 2.999h4.9a9 9 0 0 0-.138-.887c-.164-.762-.384-1.105-.572-1.293s-.531-.408-1.293-.572c-.737-.159-1.736-.238-3.117-.247\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function TruckStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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