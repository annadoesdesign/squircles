import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M23.512 11a1 1 0 0 1 1 1c0 2.312-.114 4.23-.452 5.797-.34 1.578-.922 2.866-1.903 3.848-.982.981-2.27 1.563-3.848 1.903-1.567.338-3.485.452-5.797.452s-4.23-.114-5.797-.452c-1.578-.34-2.866-.922-3.847-1.903-.982-.982-1.563-2.27-1.904-3.848C.626 16.23.512 14.312.512 12a1 1 0 1 1 2 0c0 2.272.115 4.02.407 5.375.29 1.344.74 2.233 1.363 2.855.622.623 1.511 1.073 2.855 1.363 1.355.292 3.103.407 5.375.407s4.02-.115 5.375-.407c1.344-.29 2.233-.74 2.856-1.363.622-.622 1.072-1.511 1.362-2.855.292-1.355.407-3.103.407-5.375a1 1 0 0 1 1-1\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 0a1 1 0 0 1 1 1v14.59a14.9 14.9 0 0 0 4.106-5.037 1 1 0 0 1 1.789.894 16.9 16.9 0 0 1-6.158 6.77l-.207.13a1 1 0 0 1-1.06 0l-.207-.13a16.9 16.9 0 0 1-6.157-6.77 1 1 0 0 1 1.789-.894 14.9 14.9 0 0 0 4.105 5.037V1a1 1 0 0 1 1-1\"/>",
  light: "",
} as const;

export default function DownloadStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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