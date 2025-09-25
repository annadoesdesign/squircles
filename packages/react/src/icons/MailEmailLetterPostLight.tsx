import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 1c10 0 12 1.833 12 11s-2 11-12 11-12-1.833-12-11 2-11 12-11m2.638 11.685c-.844.348-1.731.565-2.638.565s-1.794-.217-2.638-.565c-1.684 1.528-3.362 3.208-4.634 4.521a131 131 0 0 0-1.956 2.063q.224.318.492.563c.601.551 1.496.982 2.933 1.267 1.448.286 3.33.401 5.803.401s4.356-.115 5.803-.401c1.437-.285 2.332-.716 2.933-1.267a3.5 3.5 0 0 0 .492-.563l-.378-.407c-.38-.407-.925-.982-1.577-1.656-1.272-1.313-2.952-2.992-4.635-4.521M2.552 6.33c-.365 1.272-.54 3.069-.54 5.67 0 2.696.19 4.527.583 5.807.384-.41.924-.98 1.568-1.645a110 110 0 0 1 4.283-4.204c-1.233-.744-2.368-1.72-3.327-2.677a29 29 0 0 1-2.334-2.647zm19.688.304a29 29 0 0 1-2.334 2.647c-.96.958-2.096 1.932-3.328 2.676a110 110 0 0 1 4.284 4.205c.643.664 1.182 1.235 1.566 1.645.394-1.28.584-3.11.584-5.807 0-2.601-.175-4.398-.54-5.67zM12.512 2.5c-2.473 0-4.355.115-5.803.401-1.437.285-2.332.716-2.933 1.267q-.28.257-.515.596l.086.12a27.632 27.632 0 0 0 2.831 3.334c.914.913 1.96 1.806 3.06 2.467 1.105.664 2.217 1.065 3.274 1.065s2.168-.401 3.273-1.065c1.1-.66 2.147-1.554 3.061-2.466a27.6 27.6 0 0 0 2.831-3.334l.085-.121a3.5 3.5 0 0 0-.514-.596c-.6-.551-1.496-.982-2.933-1.267-1.447-.286-3.33-.401-5.803-.401\" clip-rule=\"evenodd\"/>",
} as const;

export default function MailEmailLetterPostLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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