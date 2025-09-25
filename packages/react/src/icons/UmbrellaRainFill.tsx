import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.512 0a1 1 0 0 1 1 1v1.007q.844.012 1.607.05.801.04 1.517.112t1.353.18q.635.11 1.196.26.7.186 1.287.445.235.103.454.22.655.346 1.168.816.171.157.328.328.47.513.817 1.168.115.219.22.454.258.588.445 1.287.15.56.259 1.196.108.637.18 1.353t.112 1.518q.058 1.2.057 2.606c0 .387-.287.681-.67.848q-.166.071-.35.111c-.423.09-.889.043-1.206-.178-1.825-1.268-4.605-1.716-8.774-1.774v7.521a3.472 3.472 0 0 1-6.578 1.553l-.316-.634a1 1 0 0 1 1.789-.894l.316.633a1.473 1.473 0 0 0 2.79-.658v-7.521c-4.17.058-6.95.506-8.775 1.774-.136.095-.3.157-.476.19a1.87 1.87 0 0 1-1.079-.123 1.5 1.5 0 0 1-.3-.173c-.224-.17-.37-.399-.37-.675 0-9.657 1.864-11.854 11-11.993V1a1 1 0 0 1 1-1\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M3.512 18s1 .643 1 1.714c0 .857-.448 1.286-1 1.286s-1-.429-1-1.286c0-1.071 1-1.714 1-1.714M21.512 18s1 .643 1 1.714c0 .857-.448 1.286-1 1.286s-1-.429-1-1.286c0-1.071 1-1.714 1-1.714M8.512 15s1 .643 1 1.714c0 .857-.448 1.286-1 1.286s-1-.429-1-1.286c0-1.071 1-1.714 1-1.714M16.512 15s1 .643 1 1.714c0 .857-.448 1.286-1 1.286s-1-.429-1-1.286c0-1.071 1-1.714 1-1.714\"/>",
  regular: "",
  light: "",
} as const;

export default function UmbrellaRainFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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