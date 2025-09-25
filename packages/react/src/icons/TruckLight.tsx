import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M9.66 2.005c4.087.06 6.135.723 7.094 2.995h.258c6.25 0 7.5 1.25 7.5 7.5 0 3.758-.453 5.706-2.173 6.664a4.001 4.001 0 0 1-7.327.773 17 17 0 0 1-.735-.063c-.772.125-1.715.135-2.866.122l-2.399-.023-.02-.001a4 4 0 0 1-7.45-2.453C.816 16.256.552 14.392.516 11.67l-.004-.685C.512 3.498 1.93 2 9.012 2zM5.512 15.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m13 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m-9.5-12c-1.739 0-3.021.094-3.983.313-.94.215-1.478.527-1.833.903-.362.382-.672.976-.882 2.007-.213 1.042-.302 2.42-.302 4.263 0 1.844.09 3.221.302 4.264q.03.14.06.27l-.014.018a4 4 0 0 1 7.123 2.938c1.622.008 2.777.053 3.763-.001.6-.034.999-.106 1.276-.194l.002.02q-.011-.15-.012-.301a3.99 3.99 0 0 1 1.404-3.043l-.039.033c.092-1.031.135-2.339.135-4.004 0-1.844-.089-3.22-.302-4.263-.21-1.03-.52-1.625-.881-2.007-.355-.376-.894-.688-1.833-.903-.962-.219-2.245-.313-3.984-.313m8.497 8.25v.14a51 51 0 0 1-.068 2.255 4.006 4.006 0 0 1 4.955 2.897 4.1 4.1 0 0 0 .357-1.05c.181-.837.26-1.96.26-3.492q0-.392-.009-.75zm-.314-5.249c.2 1.018.291 2.254.312 3.749h5.422a10 10 0 0 0-.176-1.242c-.177-.82-.43-1.264-.708-1.541-.277-.278-.72-.531-1.54-.708-.804-.174-1.87-.252-3.31-.258\" clip-rule=\"evenodd\"/>",
} as const;

export default function TruckLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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