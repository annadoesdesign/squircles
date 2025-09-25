import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 1.25a.75.75 0 0 1 0 1.5c-2.068 0-3.671.104-4.92.374-1.24.267-2.08.686-2.675 1.28C4.323 5 3.904 5.84 3.637 7.08c-.27 1.248-.375 2.851-.375 4.92s.105 3.67.374 4.92c.268 1.24.687 2.08 1.281 2.674.595.595 1.435 1.014 2.675 1.281 1.249.27 2.852.375 4.92.375s3.671-.105 4.92-.375c1.24-.267 2.08-.686 2.675-1.28.594-.595 1.014-1.435 1.281-2.676.27-1.248.374-2.851.374-4.92a.75.75 0 0 1 1.5 0c0 2.098-.104 3.83-.407 5.237-.305 1.416-.824 2.555-1.687 3.419s-2.004 1.382-3.42 1.687c-1.407.304-3.138.408-5.236.408s-3.829-.104-5.236-.408c-1.416-.305-2.555-.823-3.42-1.687-.863-.864-1.381-2.003-1.687-3.42-.303-1.407-.407-3.138-.407-5.235s.104-3.83.407-5.237c.306-1.416.824-2.555 1.688-3.419S5.86 1.962 7.276 1.657c1.407-.304 3.138-.408 5.236-.408\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.365 1.264a13.5 13.5 0 0 1 4.967-.061l.328.061.107.03.018.008.024.011a1 1 0 0 1 .099.05l.025.016.015.011q.05.035.095.08l.025.028q.01.008.017.02.022.025.04.053a1 1 0 0 1 .074.132q.007.014.012.028.023.059.037.121c.349 1.747.349 3.548 0 5.295a.75.75 0 0 1-1.471-.295 12 12 0 0 0 .195-3.253l-9.93 9.93a.743.743 0 0 1-1.003.053 1 1 0 0 1-.109-.109.75.75 0 0 1 .052-1.004l9.93-9.93a12 12 0 0 0-3.252.196.75.75 0 0 1-.295-1.47\"/>",
} as const;

export default function LinkOutLinkLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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