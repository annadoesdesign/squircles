import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M79.416 65.793c4.902-3.268 11.524-1.944 14.792 2.958s1.943 11.524-2.959 14.792l-2.27 1.51a168 168 0 0 0-35.896 32.281h170.916c5.892 0 10.667 4.776 10.667 10.667s-4.775 10.667-10.667 10.667H53.083a168 168 0 0 0 35.896 32.281l2.27 1.51c4.902 3.268 6.227 9.89 2.959 14.792s-9.89 6.226-14.792 2.958l-2.27-1.51a189.35 189.35 0 0 1-52.511-52.511l-1.51-2.27a10.67 10.67 0 0 1 0-11.834l1.51-2.271a189.3 189.3 0 0 1 52.51-52.51z\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M79.417 65.793c4.902-3.268 11.524-1.944 14.792 2.958 3.267 4.902 1.943 11.524-2.959 14.792l-2.27 1.51a168 168 0 0 0-35.896 32.281H224c5.891 0 10.667 4.776 10.667 10.667s-4.776 10.667-10.667 10.667H53.084a168 168 0 0 0 35.896 32.281l2.27 1.51c4.902 3.268 6.227 9.89 2.959 14.792s-9.89 6.226-14.792 2.958l-2.27-1.51a189.35 189.35 0 0 1-52.511-52.511l-1.51-2.27a10.67 10.67 0 0 1 0-11.834l1.51-2.271a189.3 189.3 0 0 1 52.51-52.51z\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M80.896 68.011a8 8 0 1 1 8.875 13.313l-2.271 1.51a170.7 170.7 0 0 0-40 37.167H224a8 8 0 1 1 0 16H47.5a170.7 170.7 0 0 0 40 37.166l2.27 1.511a8 8 0 1 1-8.874 13.312l-2.271-1.51a186.7 186.7 0 0 1-51.771-51.771l-1.51-2.271a8 8 0 0 1 0-8.875l1.51-2.271a186.7 186.7 0 0 1 51.77-51.77z\"/>",
} as const;

export default function ArrowLeftArrow(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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