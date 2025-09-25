import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.512 9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5zM12.512 5a.75.75 0 0 1 0 1.5h-4a.75.75 0 1 1 0-1.5z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.274.005c7.674.1 9.238 1.826 9.238 9.495l-.005.724q-.01.637-.039 1.217c1.583 1.037 2.044 2.76 2.044 5.559l-.006.533C24.38 22.905 22.2 24 12.512 24l-.914-.004C2.686 23.924.641 22.732.518 17.533L.512 17c0-2.799.46-4.523 2.044-5.56q-.044-.899-.044-1.94c0-7.917 1.667-9.5 10-9.5zm9.685 15.594a.74.74 0 0 1-.447.151h-3.758c-.596 0-1.169.237-1.59.66l-.243.241a3.75 3.75 0 0 1-2.651 1.099h-3.516a3.75 3.75 0 0 1-2.651-1.099l-.242-.242a2.25 2.25 0 0 0-1.591-.659H2.512a.74.74 0 0 1-.447-.151c-.036.41-.053.874-.053 1.401 0 1.401.125 2.356.376 3.034.228.616.566 1.029 1.13 1.358.621.362 1.577.656 3.088.846 1.498.189 3.423.262 5.906.262s4.408-.073 5.907-.262c1.51-.19 2.466-.484 3.087-.846.564-.33.903-.742 1.13-1.358.251-.678.376-1.633.376-3.034q0-.789-.053-1.401M12.512 1.5c-2.055 0-3.6.1-4.777.34-1.164.24-1.858.595-2.315 1.03-.45.427-.81 1.064-1.054 2.138-.249 1.095-.354 2.544-.354 4.492s.105 3.397.354 4.492q.03.134.063.258H6.27a3.75 3.75 0 0 1 2.651 1.099l.243.242c.421.422.994.659 1.59.659h3.516a2.25 2.25 0 0 0 1.59-.66l.243-.241a3.75 3.75 0 0 1 2.651-1.099h1.841q.033-.125.064-.258c.248-1.095.353-2.544.353-4.492s-.105-3.397-.353-4.492c-.244-1.074-.605-1.711-1.055-2.139-.457-.434-1.15-.79-2.314-1.028-1.177-.241-2.722-.341-4.778-.341m-9.79 11.817a2.8 2.8 0 0 0-.334.649q-.055.15-.102.322a.8.8 0 0 1 .226-.038h.376q-.097-.44-.166-.933m19.577-.002q-.069.494-.166.935h.38q.117.002.225.038a4 4 0 0 0-.102-.322 2.8 2.8 0 0 0-.337-.65\" clip-rule=\"evenodd\"/>",
} as const;

export default function ArchiveMailboxFullLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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