import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.109 2c4.537 0 4.537 20 0 20-1.993 0-4.172-1.15-5.838-3.003C1.48 18.96.512 17.738.512 12s.968-6.96 5.759-6.998C7.937 3.15 10.117 2 12.109 2M20.754 6.343c.39-.39 1.025-.39 1.415 0a8 8 0 0 1 1.734 8.719 8 8 0 0 1-1.734 2.595 1 1 0 0 1-1.415-1.415 6 6 0 0 0 0-8.484 1 1 0 0 1 0-1.415\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M17.926 9.172a1 1 0 0 1 1.414 0 4 4 0 0 1 0 5.656 1 1 0 1 1-1.414-1.414 2 2 0 0 0 0-2.828 1 1 0 0 1 0-1.414\"/>",
  regular: "",
  light: "",
} as const;

export default function SoundHighVolumeHighSoundMusicFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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