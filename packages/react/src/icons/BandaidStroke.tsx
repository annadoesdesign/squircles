import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.512 16c.833 0 1 .167 1 1s-.167 1-1 1-1-.167-1-1 .167-1 1-1M14.512 16c.833 0 1 .167 1 1s-.167 1-1 1-1-.167-1-1 .167-1 1-1M10.512 11c.833 0 1 .167 1 1s-.167 1-1 1-1-.167-1-1 .167-1 1-1M14.512 11c.833 0 1 .167 1 1s-.167 1-1 1-1-.167-1-1 .167-1 1-1M10.512 6c.833 0 1 .167 1 1s-.167 1-1 1-1-.167-1-1 .167-1 1-1M14.512 6c.833 0 1 .167 1 1s-.167 1-1 1-1-.167-1-1 .167-1 1-1\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 2c10 0 12 1.667 12 10l-.006.762C24.38 20.436 22.2 22 12.512 22l-.914-.005C2.686 21.893.641 20.188.518 12.762L.512 12c0-8.333 2-10 12-10m0 2c-2.071 0-3.713.075-5.023.249a63.5 63.5 0 0 0 0 15.501c1.31.174 2.952.25 5.023.25s3.712-.076 5.023-.25a63.5 63.5 0 0 0 0-15.501C16.225 4.075 14.583 4 12.512 4m-7.088.691c-.627.21-1.064.455-1.382.72-.96.8-1.53 2.368-1.53 6.589s.57 5.788 1.53 6.589c.318.265.755.51 1.382.719a65.5 65.5 0 0 1 0-14.617m14.175 0c.546 4.857.545 9.76 0 14.617.628-.21 1.065-.454 1.383-.72.96-.8 1.53-2.367 1.53-6.588s-.57-5.788-1.53-6.589c-.318-.265-.755-.51-1.383-.72\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function BandaidStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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