import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M14.512 1c1.245 0 2.395.145 3.3.781.87.612 1.342 1.553 1.614 2.729 4.091.9 5.086 3.202 5.086 8.49 0 6.25-1.389 8.332-7.637 8.854-1.25.104-2.695.146-4.363.146-10 0-12-1.5-12-9q0-.651.022-1.242A67 67 0 0 1 .512 10c0-7.5.917-9 5.5-9 2.226 0 3.586.355 4.397 1.578q.33-.46.803-.797c.906-.636 2.055-.781 3.3-.781m0 2c-1.162 0-1.775.155-2.15.418a1.6 1.6 0 0 0-.489.588q.315-.004.64-.006c1.828 0 3.389.05 4.719.178-.171-.394-.367-.617-.57-.76-.374-.263-.987-.418-2.15-.418\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function FileFolderFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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