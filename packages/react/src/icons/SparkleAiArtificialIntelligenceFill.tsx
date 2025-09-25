import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M19.927 18.585a.83.83 0 0 1 1.17 0c.11.109.194.24.25.384l.299.778a.2.2 0 0 0 .12.12l.778.299a1.1 1.1 0 0 1 .383.25.826.826 0 0 1 0 1.169q-.165.165-.383.249l-.778.3a.2.2 0 0 0-.12.12l-.3.778c-.055.144-.14.275-.249.384a.83.83 0 0 1-1.17 0 1.1 1.1 0 0 1-.249-.384l-.299-.778a.2.2 0 0 0-.12-.12l-.778-.3a1.1 1.1 0 0 1-.384-.25.826.826 0 0 1 0-1.168q.166-.166.384-.25l.777-.299a.2.2 0 0 0 .121-.12l.3-.778c.055-.144.14-.275.248-.384M10.034 3.612a2.09 2.09 0 0 1 2.957 0c.31.31.55.681.708 1.09l1.13 2.937c.184.48.564.86 1.044 1.045l2.937 1.13c.409.157.78.398 1.09.707.816.817.816 2.14 0 2.957-.31.31-.681.552-1.09.71l-2.936 1.128a1.82 1.82 0 0 0-1.045 1.046l-1.13 2.936a3.1 3.1 0 0 1-.708 1.09 2.09 2.09 0 0 1-2.957 0c-.31-.31-.551-.681-.708-1.09l-1.13-2.936a1.82 1.82 0 0 0-1.045-1.046l-2.937-1.129c-.408-.157-.78-.399-1.09-.708a2.09 2.09 0 0 1 0-2.957c.31-.31.682-.551 1.09-.709l2.937-1.13A1.82 1.82 0 0 0 8.196 7.64l1.13-2.937c.157-.409.398-.78.708-1.09M19.927.585a.83.83 0 0 1 1.17 0c.11.109.194.24.25.384l.299.778a.2.2 0 0 0 .12.12l.778.299c.144.055.274.141.383.25a.826.826 0 0 1 0 1.169 1.1 1.1 0 0 1-.383.249l-.778.3a.2.2 0 0 0-.12.12l-.3.778c-.055.144-.14.275-.249.384a.83.83 0 0 1-1.17 0 1.1 1.1 0 0 1-.249-.384l-.299-.778a.2.2 0 0 0-.12-.12l-.778-.3a1.1 1.1 0 0 1-.384-.25.826.826 0 0 1 0-1.168q.166-.166.384-.25l.777-.299a.2.2 0 0 0 .121-.12l.3-.778c.055-.144.14-.275.248-.384\"/>",
  regular: "",
  light: "",
} as const;

export default function SparkleAiArtificialIntelligenceFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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