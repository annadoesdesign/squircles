import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.13 2.534a6.98 6.98 0 0 1 9.822 1.093c2.41 3.019 1.876 9.28-.44 12.373l-.231.297c-2.461 3.049-7.154 5.472-9.002 6.349-.432.205-.917.23-1.362.076l-.188-.077c-1.845-.878-6.526-3.3-8.986-6.348L2.513 16C.196 12.907-.328 6.646 2.084 3.627a6.98 6.98 0 0 1 9.822-1.093l.597.466zm-2.474 1.56a4.98 4.98 0 0 0-7.008.781c-.778.975-1.23 2.73-1.124 4.81.105 2.055.734 3.975 1.589 5.117.984 1.314 2.581 2.596 4.278 3.7a37 37 0 0 0 3.301 1.894l1.251-2.501a2 2 0 0 0 0-1.79l-.658-1.316a4 4 0 0 1 0-3.578l.696-1.392c.267-.534.28-1.16.038-1.707l-1.425-3.206a1 1 0 0 1-.052-.152 2 2 0 0 1-.269-.177l-.597-.466-.01-.008zm10.733.781a4.98 4.98 0 0 0-7.008-.78l-.029.022-.028.022-.626.466q-.019.012-.038.024l1.187 2.67a4 4 0 0 1-.077 3.415l-.696 1.392a2 2 0 0 0 0 1.789l.658 1.316a4 4 0 0 1 0 3.578l-.588 1.174a35 35 0 0 0 2.484-1.462c1.7-1.104 3.3-2.386 4.283-3.7.856-1.142 1.489-3.064 1.596-5.12.11-2.08-.34-3.833-1.118-4.806\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function HeartBrokenStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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