import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c2.79 0 7.307 1.73 7.926 10.015q.827.34 1.63.736l.574.282.197.113c.442.286.75.745.845 1.27l.098.57c.456 2.854.48 5.762.071 8.625l-.145 1.016-.025.123a1 1 0 0 1-1.296.679l-.116-.05-1.916-.958q-.67-.336-1.321-.705C17.87 23.493 15.867 24 12.512 24c-3.354 0-5.358-.507-6.521-2.284l.01.016q-.467.256-.942.495L2.753 23.38l-.116.049a1 1 0 0 1-1.296-.679l-.025-.123-.145-1.016a28.8 28.8 0 0 1 .072-8.626l.097-.569c.095-.525.403-.984.845-1.27l.197-.113.574-.282q.803-.396 1.63-.736C5.204 1.73 9.721 0 12.511 0m0 1.5c-1.18 0-2.745.392-4.025 1.77C7.202 4.655 6.012 7.238 6.012 12c0 2.48.084 4.395.297 5.88.215 1.493.545 2.43.951 3.038.703 1.054 1.95 1.582 5.252 1.582s4.55-.528 5.252-1.582c.406-.609.737-1.545.951-3.038.214-1.485.297-3.4.297-5.88 0-4.763-1.19-7.346-2.474-8.73a5.45 5.45 0 0 0-4.026-1.77M4.515 11.677q-.452.201-.896.42l-.575.282a.42.42 0 0 0-.228.304 27.3 27.3 0 0 0-.16 8.716l.047.328 1.685-.842q.487-.245.963-.507l.013.033c-.645-1.822-.852-4.506-.852-8.411q.002-.25.008-.495zM20.512 12c0 3.869-.203 6.539-.834 8.36q.664.378 1.348.72l1.296.648.047-.329a27.3 27.3 0 0 0-.16-8.716.42.42 0 0 0-.229-.304l-.574-.282a25 25 0 0 0-.899-.42v-.024c0 .115.005.23.005.347\" clip-rule=\"evenodd\"/>",
} as const;

export default function RocketShipLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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