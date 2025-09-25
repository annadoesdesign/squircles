import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.512 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4M8.512 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.285 0c12.358 0 14.419 11.756 10.3 14.694l-.381.258c-.667.43-1.28.703-1.859.863q.071-.019.142-.04C20.28 22.575 18.676 24 12.513 24c-6.105 0-7.737-1.398-7.969-8.033-.767-.093-1.519-.39-2.268-1.015l-.29-.258C-1.104 11.755-.074 0 12.285 0m0 14.694c-2.146 0-4.012.796-5.744 1.145.039 1.167.12 2.119.255 2.9.2 1.154.489 1.775.779 2.137C8.088 21.517 9.14 22 12.513 22c3.373 0 4.426-.483 4.939-1.124.29-.363.579-.983.778-2.138.13-.75.207-1.658.248-2.764-1.824-.172-3.493-1.17-5.813-1.272zm2.22-12.54c-.018.342-.09.678-.221.994a3 3 0 0 1-5.543 0 3 3 0 0 1-.187-.669C5.6 3.324 3.98 5.167 3.181 7.032a8.4 8.4 0 0 0-.61 2.28 3.49 3.49 0 0 1 3.916.713 3.5 3.5 0 0 1 .906 3.381q-.024.09-.055.178c.44-.122.906-.256 1.55-.417.987-.247 2.132-.473 3.397-.473 1.274 0 2.367.23 3.297.485.455.124.896.262 1.271.377.39.12.724.219 1.044.295.623.148 1.11.189 1.595.109.48-.08 1.1-.302 1.93-.895.446-.318.9-1.016 1.045-2.16.143-1.119-.043-2.483-.665-3.813-1.021-2.186-3.265-4.353-7.298-4.938M4.4 11.051a1.5 1.5 0 0 0-1.45.389q-.163.165-.269.372c.179.75.462 1.223.683 1.433.426.405.79.59 1.114.677a1.5 1.5 0 0 0 .982-1.033 1.504 1.504 0 0 0-1.06-1.838M12.285 2q-.94.002-1.769.098a1 1 0 0 0 1.995-.095Q12.4 2 12.285 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function MushroomStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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