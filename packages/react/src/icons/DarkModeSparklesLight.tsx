import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M7.441.847c.724-.368 1.472.347 1.353 1.15l-.047.34a11.98 11.98 0 0 0 3.428 9.913l.266.257a11.98 11.98 0 0 0 9.986 3.124c.803-.12 1.52.628 1.152 1.352l-.218.41a12 12 0 0 1-1.657 2.286l-.336.35c-4.613 4.612-12.048 4.684-16.75.215l-.22-.216C-.217 15.415-.289 7.98 4.18 3.28l.216-.221A12 12 0 0 1 7.441.847M7.206 2.71a10.5 10.5 0 0 0-1.748 1.408l-.372.392c-3.724 4.121-3.6 10.484.372 14.457 4.1 4.1 10.749 4.1 14.85 0 .542-.543 1.01-1.13 1.407-1.748a13.46 13.46 0 0 1-10.6-3.909 13.47 13.47 0 0 1-3.91-10.6\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20.72 9.293a.414.414 0 0 1 .584 0 .55.55 0 0 1 .124.191l.15.389c.01.028.033.05.06.06l.39.15q.108.042.192.125a.414.414 0 0 1 0 .585.6.6 0 0 1-.193.124l-.389.15a.1.1 0 0 0-.06.06l-.15.39a.55.55 0 0 1-.124.19.414.414 0 0 1-.584 0 .55.55 0 0 1-.125-.19l-.15-.39a.1.1 0 0 0-.06-.06l-.39-.15a.55.55 0 0 1-.19-.124.414.414 0 0 1 0-.585.6.6 0 0 1 .19-.125l.39-.15a.1.1 0 0 0 .06-.06l.15-.389a.55.55 0 0 1 .125-.191M20.928.585a.827.827 0 0 1 1.168 0c.11.109.194.24.25.384l.3.778a.2.2 0 0 0 .12.12l.778.299q.218.084.383.25a.827.827 0 0 1 0 1.169c-.108.109-.24.193-.383.249l-.779.3a.2.2 0 0 0-.12.12l-.3.778c-.055.144-.14.275-.249.384a.827.827 0 0 1-1.169 0 1.1 1.1 0 0 1-.25-.384l-.298-.778a.21.21 0 0 0-.122-.12l-.777-.3a1.1 1.1 0 0 1-.384-.25.827.827 0 0 1 0-1.168q.166-.166.384-.25l.777-.299a.21.21 0 0 0 .122-.12l.298-.778c.056-.144.141-.275.25-.384M13.72 1.293a.414.414 0 0 1 .584 0 .55.55 0 0 1 .124.191l.15.389c.01.028.033.05.06.06l.39.15q.108.042.191.125a.414.414 0 0 1 0 .585.6.6 0 0 1-.192.124l-.389.15a.1.1 0 0 0-.06.06l-.15.39a.55.55 0 0 1-.124.19.414.414 0 0 1-.585 0 .55.55 0 0 1-.124-.19l-.15-.39a.1.1 0 0 0-.06-.06l-.39-.15a.6.6 0 0 1-.19-.124.414.414 0 0 1 0-.585.6.6 0 0 1 .19-.125l.39-.15a.1.1 0 0 0 .06-.06l.15-.389a.55.55 0 0 1 .124-.191\"/>",
} as const;

export default function DarkModeSparklesLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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