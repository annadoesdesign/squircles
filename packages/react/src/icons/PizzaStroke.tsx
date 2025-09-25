import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M9.512 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c6.111 0 11 2.4 11 6 0 .803-.149 1.795-.38 2.852l-.12.514c-1.31 5.3-4.684 9.819-8.557 13.692l-.21.188a2.75 2.75 0 0 1-3.466 0l-.21-.188c-3.872-3.873-7.247-8.392-8.556-13.692l-.12-.514c-.232-1.057-.38-2.05-.38-2.852 0-3.6 4.888-6 11-6m8.324 9.737a12.547 12.547 0 0 0-16.649 0c1.321 4.438 4.26 8.37 7.797 11.907a.747.747 0 0 0 1.056 0q.945-.945 1.824-1.93a4.498 4.498 0 0 1 1.983-7.56 4.5 4.5 0 0 1 2.99.233c.394-.863.73-1.746 1-2.65m-2.498 4.284a2.5 2.5 0 0 0-2.49 1.229 2.5 2.5 0 0 0 .318 2.934c1.036-1.287 1.97-2.62 2.756-4.01a2.5 2.5 0 0 0-.584-.152M12.512 2c-2.826 0-5.233.56-6.856 1.418C4.008 4.289 3.512 5.242 3.512 6c0 .413.058.943.167 1.567a14.55 14.55 0 0 1 17.665 0c.11-.624.168-1.154.168-1.567 0-.758-.496-1.711-2.143-2.582C17.745 2.56 15.338 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function PizzaStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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