import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M15.035 17.35c-.532 2.692-1.506 4.65-2.926 4.65-1.993 0-4.172-1.15-5.838-3.003C1.48 18.96.512 17.738.512 12c0-4.125.5-5.916 2.56-6.611zM2.805 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 1 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414M20.754 6.343c.39-.39 1.025-.39 1.415 0a8 8 0 0 1 1.734 8.719 8 8 0 0 1-1.734 2.595 1 1 0 0 1-.897.275l-.793-.793a1 1 0 0 1 .275-.897 6 6 0 0 0 0-8.484 1 1 0 0 1 0-1.415\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M17.926 9.172a1 1 0 0 1 1.414 0 4 4 0 0 1 0 5.656 1 1 0 0 1-.897.274l-.792-.792a1 1 0 0 1 .275-.896 2 2 0 0 0 0-2.828 1 1 0 0 1 0-1.414M12.109 2c2.294 0 3.426 5.113 3.4 10.169L7.323 3.982C8.798 2.738 10.513 2 12.109 2\"/>",
  regular: "",
  light: "",
} as const;

export default function SoundOffMuteFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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