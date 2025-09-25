import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 6.25a.75.75 0 0 1 .75.75v4.265h4.25a.75.75 0 0 1 0 1.5h-4.25V17a.75.75 0 0 1-1.5 0v-4.235h-4.25a.75.75 0 0 1 0-1.5h4.25V7a.75.75 0 0 1 .75-.75\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512.015c.482 0 .93.228 1.265.574a7.97 7.97 0 0 0 6.948 2.333l.393-.07c.816-.168 1.724.004 2.116.74.972 1.822 1.278 4.51 1.278 8.423 0 9.018-9.76 11.53-11.676 11.936l-.162.026a1.6 1.6 0 0 1-.486-.026C10.272 23.545.512 21.033.512 12.015c0-3.913.307-6.6 1.279-8.423.392-.736 1.3-.908 2.116-.74a7.965 7.965 0 0 0 7.06-1.99l.28-.273c.336-.346.783-.574 1.265-.574M12.46 1.53a.5.5 0 0 0-.138.105A9.47 9.47 0 0 1 3.605 4.32a1.05 1.05 0 0 0-.482-.002l-.025.008c-.765 1.459-1.086 3.791-1.086 7.688 0 3.861 2.052 6.332 4.458 7.954 2.446 1.648 5.148 2.327 6.03 2.514l.012.002.013-.002c.882-.187 3.583-.866 6.03-2.514 2.406-1.622 4.457-4.093 4.457-7.954 0-3.897-.322-6.23-1.088-7.688l-.022-.008a1.05 1.05 0 0 0-.483.002A9.472 9.472 0 0 1 12.7 1.634a.5.5 0 0 0-.137-.104c-.034-.016-.05-.015-.05-.015s-.018 0-.053.015\" clip-rule=\"evenodd\"/>",
} as const;

export default function HealthBadgeLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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