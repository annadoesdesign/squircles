import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.512 16.5a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1 0-1.5zM17.512 12.5a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1 0-1.5zM11.512 8.5a.75.75 0 0 1 0 1.5h-4a.75.75 0 1 1 0-1.5z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.213.005q.34.004.664.016l.043.002c.48.028.93.24 1.268.584l6.683 6.82c.314.322.511.74.55 1.186q.005.026.006.052.007.131.013.265a44 44 0 0 1 .043 1.056q.03.949.03 2.014c0 10-1.668 12-10 12-8.334 0-10-2-10-12s1.666-12 10-12h.006zm-.7 1.395c-4.206 0-6.053.549-7.05 1.746-.515.618-.919 1.543-1.182 3.008-.264 1.469-.368 3.369-.368 5.846s.104 4.377.368 5.846c.263 1.465.667 2.39 1.181 3.008.998 1.197 2.845 1.746 7.05 1.746s6.052-.549 7.05-1.747c.515-.617.918-1.542 1.182-3.007.264-1.469.368-3.369.368-5.846q0-1.069-.03-2.004c-6.443-.065-8.24-1.652-8.526-8.596zm1.447.045c.05 1.132.14 2.088.283 2.898.236 1.336.595 2.163 1.04 2.708.814.993 2.298 1.498 5.71 1.544a.6.6 0 0 0-.122-.187l-6.683-6.821a.56.56 0 0 0-.228-.142\" clip-rule=\"evenodd\"/>",
} as const;

export default function FilePaperFoldLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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