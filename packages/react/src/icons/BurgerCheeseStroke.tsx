import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.602 0c2 0 8 0 10 2 1.804 1.804 2.314 6.05 1.295 7.598.392.713.615 1.531.615 2.402v6.5c0 .836-.412 1.573-1.043 2.027-.244.47-.533.889-.867 1.223-2 2-8 2-10 2s-8 0-10-2c-.95-.95-1.58-2.575-1.821-4.127A2.5 2.5 0 0 1 .512 16.5v-3.662c0-.662.107-1.321.317-1.95l.39-1.17C.107 8.283.748 3.854 2.601 2c2-2 8-2 10-2m-4.09 18v.5a2.5 2.5 0 0 1-4.96.44 3 3 0 0 1-.342.05c.233.582.516 1.055.806 1.346.175.175.58.427 1.323.666.714.23 1.58.397 2.511.514 1.862.232 3.75.234 4.752.234 1.003 0 2.89-.002 4.752-.234.931-.117 1.798-.285 2.512-.514.369-.119.654-.241.869-.355a2.5 2.5 0 0 1-1.223-2.147V18h-2.504a2.493 2.493 0 0 1-3.992 0zm13.504-7.65c-4.053.526-14.745.53-18.906.013l-.384 1.159a4.2 4.2 0 0 0-.214 1.316V16.5a.5.5 0 0 0 1 0V14a1 1 0 1 1 2 0v4.5a.5.5 0 0 0 1 0V16a4 4 0 0 1 4-4h.5a3.5 3.5 0 0 1 3.5 3.5v1a.5.5 0 0 0 1 0V14a3 3 0 0 1 6 0v4.5a.5.5 0 0 0 1 0V12c0-.61-.183-1.176-.496-1.65M10.512 14a2 2 0 0 0-2 2h4v-.5a1.5 1.5 0 0 0-1.5-1.5zm8-1a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1m-5.91-11c-1.003 0-2.89.002-4.752.234-.931.117-1.797.285-2.51.514-.745.24-1.149.49-1.324.666-.564.565-1.107 1.82-1.288 3.217-.086.664-.069 1.222.004 1.598l.014.061q.15.028.36.058c.592.083 1.405.157 2.39.218 1.961.122 4.48.184 7.016.184s5.055-.062 7.017-.184a33 33 0 0 0 2.39-.218q.225-.033.384-.062.015-.047.028-.107c.085-.382.116-.942.05-1.602-.143-1.397-.651-2.621-1.193-3.163-.175-.175-.578-.427-1.322-.666-.714-.23-1.58-.397-2.512-.514C15.492 2.002 13.604 2 12.602 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function BurgerCheeseStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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