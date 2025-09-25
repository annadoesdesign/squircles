import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M11.512 6.041c-2.47.227-3 1.506-3 5.959s.53 5.732 3 5.959v5.033c-6.559-.091-9.366-1.155-10.43-5.024 4.324-.194 5.36-1.368 5.426-5.511L6.512 12c0-4.515-.952-5.765-5.431-5.966 1.063-3.871 3.871-4.936 10.431-5.027z\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M13.512 1.007c9.135.127 11 2.14 11 10.993s-1.865 10.865-11 10.992V17.96c2.471-.227 3-1.506 3-5.959s-.529-5.732-3-5.959zm10.43 5.024c-4.478.201-5.43 1.455-5.43 5.969s.952 5.764 5.43 5.965c.164-.594.287-1.253.375-1.985-.827-.027-1.478-.085-1.996-.181-.74-.137-1.051-.32-1.195-.443-.25-.215-.614-.793-.614-3.356s.364-3.141.614-3.356c.144-.123.456-.306 1.195-.443.518-.096 1.169-.155 1.995-.182a14 14 0 0 0-.374-1.988\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M12.512 8c.77 0 1.186.063 1.416.138.157.05.16.08.17.096.055.083.183.34.278 1.003.094.653.136 1.539.136 2.763s-.042 2.11-.136 2.763c-.095.662-.223.92-.278 1.003-.011.016-.013.045-.17.096-.23.075-.646.138-1.416.138s-1.186-.063-1.416-.138c-.157-.05-.159-.08-.17-.096-.055-.083-.183-.34-.278-1.003-.094-.653-.136-1.539-.136-2.763s.042-2.11.136-2.763c.095-.663.223-.92.278-1.003.011-.016.013-.046.17-.096.23-.075.647-.138 1.416-.138M.707 8.019c.827.027 1.478.086 1.997.182.739.137 1.05.32 1.194.443.25.215.614.793.614 3.356s-.363 3.141-.614 3.356c-.143.123-.456.306-1.194.443-.519.096-1.17.153-1.997.18C.569 14.839.512 13.52.512 12S.57 9.16.707 8.019\"/>",
  regular: "",
  light: "",
} as const;

export default function BasketballCourtFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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