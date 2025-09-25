import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.512 10c.794 0 1.29.042 1.61.111.107.024.175.047.215.063.016.04.04.108.064.217.069.32.111.815.111 1.609s-.042 1.29-.111 1.61a1.4 1.4 0 0 1-.064.215c-.04.016-.107.04-.215.064-.32.069-.816.111-1.61.111-.793 0-1.29-.042-1.61-.111a1.4 1.4 0 0 1-.216-.064 1.4 1.4 0 0 1-.062-.216c-.07-.32-.112-.815-.112-1.609s.043-1.29.111-1.61c.024-.108.047-.176.063-.216.04-.016.108-.04.217-.063.32-.069.816-.111 1.61-.111\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c2.073 0 3.32.495 4.05 2.223 1.738-.705 2.97-.174 4.436 1.292s1.995 2.696 1.29 4.434c1.729.731 2.224 1.978 2.224 4.051s-.495 3.319-2.223 4.05c.705 1.738.174 2.97-1.291 4.435-1.466 1.466-2.698 1.996-4.436 1.291-.73 1.729-1.977 2.224-4.05 2.224s-3.32-.495-4.05-2.224c-1.739.705-2.97.175-4.435-1.29S2.03 17.787 2.735 16.05C1.007 15.319.512 14.072.512 12s.495-3.319 2.222-4.05c-.705-1.738-.172-2.97 1.293-4.435S6.723 1.518 8.46 2.223C9.192.495 10.44 0 12.512 0m0 8c-3.333 0-4 .667-4 4s.667 4 4 4 4-.667 4-4-.667-4-4-4\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function GearSettingsFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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