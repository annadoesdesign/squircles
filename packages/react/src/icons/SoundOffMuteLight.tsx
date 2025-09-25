import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.118 6.666c-.786.148-1.147.384-1.363.647-.198.243-.4.658-.54 1.443-.142.789-.203 1.835-.203 3.244s.06 2.455.202 3.243c.141.785.343 1.2.541 1.443.358.436 1.11.792 3.528.811a1.5 1.5 0 0 1 1.103.497C8.86 19.632 10.662 20.5 12.11 20.5q.001.001.035-.017c.047-.028.142-.1.27-.263.266-.342.553-.928.811-1.78.195-.645.354-1.386.478-2.189l1.29 1.291C14.456 20.134 13.496 22 12.11 22c-1.993 0-4.172-1.15-5.838-3.003C1.48 18.96.512 17.738.512 12c0-4.009.473-5.812 2.39-6.549z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.109 2c2.555 0 3.67 6.342 3.348 11.884l6.586 6.586a.75.75 0 1 1-1.061 1.06l-18-18a.75.75 0 1 1 1.06-1.06l2.375 2.375C8.064 3.085 10.174 2 12.11 2m0 1.5c-1.417 0-3.174.834-4.63 2.406l6.526 6.527c.002-.144.007-.288.007-.433 0-2.411-.277-4.753-.787-6.44-.258-.852-.545-1.438-.811-1.78a1 1 0 0 0-.27-.263q-.033-.018-.035-.017\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21.109 6.343a.75.75 0 0 1 1.06 0 8 8 0 0 1 1.734 8.719 8 8 0 0 1-1.734 2.595.75.75 0 0 1-1.06-1.06 6.5 6.5 0 0 0 0-9.194.75.75 0 0 1 0-1.06\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18.28 9.172a.75.75 0 0 1 1.06 0 4 4 0 0 1 0 5.656.75.75 0 1 1-1.06-1.06 2.5 2.5 0 0 0 .542-2.725 2.5 2.5 0 0 0-.542-.81.75.75 0 0 1 0-1.061\"/>",
} as const;

export default function SoundOffMuteLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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