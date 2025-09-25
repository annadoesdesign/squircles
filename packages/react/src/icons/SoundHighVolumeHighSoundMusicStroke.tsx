import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.109 2c4.537 0 4.537 20 0 20-1.993 0-4.172-1.15-5.838-3.003C1.48 18.96.512 17.738.512 12s.968-6.96 5.759-6.998C7.937 3.15 10.117 2 12.109 2m-.162 2.005c-1.244.062-2.84.835-4.189 2.335-.375.417-.91.657-1.471.662-2.425.02-2.948.388-3.144.628-.124.151-.304.475-.436 1.215-.134.744-.195 1.754-.195 3.155l.012.98c.023.91.082 1.617.183 2.175.132.74.311 1.063.435 1.214.196.24.719.609 3.145.628a2 2 0 0 1 1.471.662c1.35 1.5 2.945 2.273 4.189 2.335q.03-.03.072-.08c.213-.274.479-.795.728-1.618.491-1.625.765-3.914.765-6.296s-.274-4.67-.765-6.296c-.25-.823-.515-1.344-.728-1.617q-.043-.052-.072-.082\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20.754 6.343c.39-.39 1.025-.39 1.415 0a8 8 0 0 1 1.734 8.719 8 8 0 0 1-1.734 2.595 1 1 0 0 1-1.415-1.415 6 6 0 0 0 0-8.484 1 1 0 0 1 0-1.415\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.926 9.172a1 1 0 0 1 1.414 0 4 4 0 0 1 0 5.656 1 1 0 1 1-1.414-1.414 2 2 0 0 0 0-2.828 1 1 0 0 1 0-1.414\"/>",
  light: "",
} as const;

export default function SoundHighVolumeHighSoundMusicStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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