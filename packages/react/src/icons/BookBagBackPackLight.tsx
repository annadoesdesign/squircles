import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.762 12.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75M15.262 12.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.893.006c2.29.07 3.486.81 4.083 3.282 4.504.774 5.536 3.325 5.536 10.212l-.005.8c-.105 8.058-1.922 9.7-9.995 9.7l-.761-.005c-7.675-.11-9.239-2.018-9.239-10.495 0-6.885 1.032-9.435 5.532-10.21C8.674.682 9.972 0 12.512 0zm8.031 10.593a27.7 27.7 0 0 0-16.825 0c-.06.842-.087 1.803-.087 2.901 0 2.16.105 3.788.36 5.03.253 1.23.631 1.974 1.101 2.467.464.487 1.151.872 2.292 1.13 1.162.263 2.695.373 4.747.373s3.585-.11 4.747-.373c1.141-.258 1.828-.643 2.292-1.13.47-.493.848-1.237 1.1-2.467.256-1.242.361-2.87.361-5.03 0-1.098-.027-2.059-.088-2.901M12.512 4.5c-2.052 0-3.585.11-4.747.373-1.14.258-1.828.643-2.292 1.13-.47.493-.848 1.237-1.1 2.467q-.05.242-.092.504a29.2 29.2 0 0 1 16.462 0 12 12 0 0 0-.091-.504c-.253-1.23-.63-1.974-1.1-2.467-.465-.487-1.152-.872-2.293-1.13-1.162-.263-2.695-.373-4.747-.373m0-3c-.962 0-1.532.112-1.896.285-.301.143-.562.373-.801.899q-.083.183-.16.412C10.509 3.029 11.457 3 12.513 3l.762.005q1.131.015 2.093.09a4 4 0 0 0-.158-.411c-.238-.526-.5-.756-.8-.899-.365-.173-.934-.285-1.897-.285\" clip-rule=\"evenodd\"/>",
} as const;

export default function BookBagBackPackLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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