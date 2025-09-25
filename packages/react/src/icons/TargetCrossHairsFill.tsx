import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.502 0a1 1 0 0 1 1 1v2.01c6.314.135 7.854 1.676 7.988 7.99h2.012a1 1 0 1 1 0 2H21.49c-.134 6.314-1.674 7.854-7.988 7.988V23a1 1 0 1 1-2 0v-2.012C5.187 20.854 3.648 19.314 3.513 13H1.502a1 1 0 1 1 0-2h2.011c.135-6.314 1.674-7.855 7.989-7.99V1a1 1 0 0 1 1-1m-5 13H5.514c.03 1.332.123 2.353.294 3.148.208.962.498 1.453.795 1.75.298.298.79.588 1.75.795.796.172 1.817.264 3.149.294v-2.011c-2.994-.134-3.843-.983-3.977-3.978zm9.975-.002c-.133 2.996-.982 3.844-3.977 3.978l.002.024v1.987c1.332-.03 2.353-.122 3.148-.294.961-.207 1.453-.497 1.75-.795.297-.297.588-.788.795-1.75.172-.795.264-1.816.294-3.148h-1.987zm-5.975-7.986c-1.332.03-2.353.123-3.149.295-.96.207-1.452.497-1.75.795-.297.297-.587.788-.795 1.75-.171.795-.264 1.816-.294 3.148h1.988l.023.001c.134-2.995.983-3.844 3.978-3.978L11.502 7zm2 1.988-.002.023c2.995.134 3.844.983 3.977 3.978l.025-.001h1.987c-.03-1.332-.122-2.353-.294-3.148-.207-.962-.498-1.453-.795-1.75-.297-.298-.789-.588-1.75-.795-.795-.172-1.816-.265-3.148-.295z\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function TargetCrossHairsFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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