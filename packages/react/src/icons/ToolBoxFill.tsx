import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M9.553 14c.146 1.519.74 1.94 2.514 1.994l.445.006c2.098 0 2.786-.352 2.954-1.942 3.021.105 6.038.375 9.038.805C24.359 22.45 22.157 24 12.512 24S.664 22.45.52 14.862c3-.43 6.017-.699 9.038-.804zM12.513 12c.453 0 .753.02.952.047.027.199.047.499.047.953s-.02.753-.047.952a7 7 0 0 1-.953.048c-.454 0-.754-.02-.953-.048a7 7 0 0 1-.046-.952c0-.454.019-.754.046-.953.2-.027.5-.047.954-.047M9.512 13l.001.129z\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M13.122.005c4.602.075 6.457 1.064 7.098 4.785l-.104-.031c3.259 1.038 4.253 3.342 4.38 8.082a87 87 0 0 0-9.02-.784c-.137-1.565-.722-1.997-2.518-2.051L12.512 10c-2.166 0-2.83.376-2.968 2.102l.003-.045a87 87 0 0 0-9.019.783c.128-4.747 1.125-7.051 4.396-8.087q-.06.017-.118.036C5.475.91 7.463 0 12.512 0zM12.512 2c-3.39 0-4.461.466-4.97 1.07-.203.242-.41.615-.584 1.234l-.104.016c1.519-.232 3.38-.32 5.658-.32 2.273 0 4.131.088 5.648.318l-.094-.014c-.173-.619-.38-.992-.584-1.235C16.974 2.466 15.902 2 12.512 2\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function ToolBoxFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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