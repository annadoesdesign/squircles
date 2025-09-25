import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M23.012 12c0-2.47-.125-4.342-.434-5.777-.306-1.418-.77-2.307-1.376-2.912-.606-.606-1.494-1.07-2.912-1.376-1.435-.31-3.308-.435-5.778-.435s-4.342.125-5.777.435c-1.418.305-2.306.77-2.912 1.376s-1.07 1.494-1.376 2.912C2.137 7.658 2.012 9.53 2.012 12c0 3.768.299 6.08 1.019 7.555.181.37.201.8.056 1.187a20 20 0 0 1-.732 1.701l-.017.034a8 8 0 0 0 3.254-.438 1.5 1.5 0 0 1 .857-.043c1.465.357 3.42.504 6.063.504V24c-2.673 0-4.773-.146-6.418-.547a9.45 9.45 0 0 1-4.892.388c-.55-.103-.85-.716-.6-1.227l.405-.83q.375-.77.676-1.571C.796 18.396.513 15.765.513 12c0-10 2-12 12-12s12 2 12 12-2 12-12 12v-1.5c2.47 0 4.342-.125 5.777-.435 1.418-.305 2.306-.77 2.912-1.376s1.07-1.494 1.376-2.912c.31-1.435.434-3.307.434-5.777\"/>",
} as const;

export default function ChatSpeechLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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