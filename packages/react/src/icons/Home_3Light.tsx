import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.178.328a.75.75 0 0 1 .77.062l1.79 1.278a46.9 46.9 0 0 1 9.36 8.863.75.75 0 0 1-1.172.938q-.264-.33-.534-.655c.083.935.12 1.992.12 3.186 0 7.991-1.533 9.85-9.007 9.99.45-.01.82-.356.856-.805.066-.786.15-1.983.15-2.877 0-.753-.06-1.72-.117-2.476a1.87 1.87 0 0 0-1.258-1.616 1.9 1.9 0 0 0-1.248 0 1.87 1.87 0 0 0-1.258 1.616 36 36 0 0 0-.118 2.476c0 .767.062 1.757.121 2.52.043.565-.384 1.056-.935 1.076l-.112-.002C3.773 23.452 2.512 21.25 2.512 14c0-1.194.037-2.25.12-3.185a45 45 0 0 0-.534.654.75.75 0 0 1-1.172-.938 46.9 46.9 0 0 1 9.36-8.863L12.076.39zm-1.02 2.56a45.4 45.4 0 0 0-6.652 5.81 8 8 0 0 0-.138.54c-.252 1.17-.356 2.709-.356 4.762 0 3.66.347 5.567 1.093 6.65.592.86 1.632 1.444 3.989 1.699a40 40 0 0 1-.07-1.388l-.012-.653c0-.813.064-1.83.122-2.59a3.37 3.37 0 0 1 2.264-2.92 3.4 3.4 0 0 1 2.228 0h.001a3.37 3.37 0 0 1 2.263 2.92c.043.57.09 1.285.111 1.949l.01.64c0 .628-.04 1.378-.084 2.043 2.072-.224 3.134-.7 3.764-1.408.422-.475.765-1.181.994-2.324.23-1.153.327-2.65.327-4.618 0-2.053-.104-3.592-.357-4.762a8 8 0 0 0-.137-.539 45.4 45.4 0 0 0-6.653-5.81l-1.353-.968z\" clip-rule=\"evenodd\"/>",
} as const;

export default function Home_3Light(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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