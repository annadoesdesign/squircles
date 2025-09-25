import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 10a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c7.213 0 8.002 1.07 8.032 5.785 1.533 1.445 1.968 3.96 1.968 8.215 0 8.333-1.666 10-10 10s-10-1.667-10-10c0-4.254.435-6.77 1.968-8.215C4.51 1.07 5.3 0 12.512 0m6.486 7.077a50.5 50.5 0 0 1-12.974 0l-.173.164c-.385.363-.734.942-.978 2.035-.251 1.122-.36 2.637-.36 4.724 0 2.044.104 3.54.345 4.656.236 1.094.573 1.685.943 2.055s.961.707 2.055.943c1.116.241 2.613.346 4.656.346 2.044 0 3.54-.105 4.657-.346 1.093-.236 1.684-.573 2.054-.943s.707-.96.944-2.055c.21-.977.317-2.244.34-3.915l.005-.741c0-2.088-.11-3.602-.36-4.724-.245-1.093-.594-1.672-.98-2.035zM12.513 2c-1.776 0-3.05.067-3.978.216-.937.15-1.333.355-1.504.488-.114.088-.245.227-.357.673-.101.405-.157.956-.18 1.745q.51.064 1.02.114V5a1 1 0 1 1 2 0v.403a49 49 0 0 0 2 .082V5a1 1 0 1 1 2 0v.485q1-.02 2-.082V5a1 1 0 1 1 2 0v.236q.508-.052 1.017-.114c-.023-.79-.079-1.34-.18-1.745-.111-.445-.242-.585-.355-.673-.171-.133-.568-.338-1.505-.488-.696-.111-1.587-.177-2.738-.203z\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function PrescriptionStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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