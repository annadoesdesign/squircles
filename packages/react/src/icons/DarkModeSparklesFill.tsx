import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M7.441.847c.724-.368 1.472.346 1.353 1.149-.539 3.63.587 7.46 3.381 10.254a11.98 11.98 0 0 0 10.253 3.38c.803-.118 1.518.63 1.15 1.353a12 12 0 0 1-2.21 3.045c-4.686 4.686-12.285 4.686-16.97 0-4.687-4.686-4.687-12.284 0-16.97A12 12 0 0 1 7.44.847\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M20.12 9.39a.55.55 0 0 1 .781 0c.073.072.13.16.166.255l.2.519a.14.14 0 0 0 .08.081l.518.2a.7.7 0 0 1 .256.165.55.55 0 0 1 0 .78.7.7 0 0 1-.256.167l-.519.199a.14.14 0 0 0-.08.08l-.199.518a.7.7 0 0 1-.166.256.55.55 0 0 1-.78 0 .7.7 0 0 1-.166-.256l-.2-.518a.14.14 0 0 0-.08-.08l-.518-.2a.7.7 0 0 1-.256-.166.55.55 0 0 1 0-.78.7.7 0 0 1 .256-.166l.518-.199a.14.14 0 0 0 .08-.081l.2-.519a.7.7 0 0 1 .166-.255M20.927.585a.827.827 0 0 1 1.169 0c.108.109.193.24.248.384l.3.778a.2.2 0 0 0 .12.12l.779.299q.218.084.384.25a.827.827 0 0 1 0 1.169q-.166.165-.384.249l-.779.3a.2.2 0 0 0-.12.12l-.3.778c-.055.144-.14.275-.248.384a.827.827 0 0 1-1.17 0 1.1 1.1 0 0 1-.248-.384l-.3-.778a.2.2 0 0 0-.12-.12l-.779-.3a1.1 1.1 0 0 1-.383-.25.827.827 0 0 1 0-1.168c.108-.11.24-.195.383-.25l.779-.299a.2.2 0 0 0 .12-.12l.3-.778c.055-.144.14-.275.248-.384M13.12 1.39a.55.55 0 0 1 .781 0c.073.072.13.16.166.255l.2.519a.14.14 0 0 0 .08.081l.518.2a.7.7 0 0 1 .256.165.55.55 0 0 1 0 .78.7.7 0 0 1-.256.167l-.519.199a.14.14 0 0 0-.08.08l-.199.518a.7.7 0 0 1-.166.256.55.55 0 0 1-.78 0 .7.7 0 0 1-.166-.256l-.2-.518a.14.14 0 0 0-.08-.08l-.518-.2a.7.7 0 0 1-.256-.166.55.55 0 0 1 0-.78.7.7 0 0 1 .256-.166l.518-.199a.14.14 0 0 0 .08-.081l.2-.519a.7.7 0 0 1 .166-.255\"/>",
  regular: "",
  light: "",
} as const;

export default function DarkModeSparklesFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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