import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.067.104a1 1 0 0 1 1.026.082l1.79 1.279a47.1 47.1 0 0 1 9.41 8.91 1 1 0 0 1-1.562 1.25q-.15-.188-.303-.373c.058.824.084 1.737.084 2.748 0 7.95-1.517 9.831-8.895 9.987l-.093.002a53 53 0 0 1-2.12-.002 28 28 0 0 1-2.68-.17h-.011l-.001-.002c-5.067-.61-6.2-2.945-6.2-9.815 0-1.01.025-1.924.083-2.747q-.152.184-.302.372a1.001 1.001 0 0 1-1.562-1.25 47.1 47.1 0 0 1 9.41-8.91L11.93.186zm.931 16.088a1.94 1.94 0 0 0-.973 0c-.776.202-1.3.834-1.363 1.544-.084.945-.15 1.942-.15 2.726 0 .448.021.963.056 1.497q.425.019.89.028l.069.002a48 48 0 0 0 2.034-.002q.467-.01.893-.028.026-.395.042-.768l.016-.73c0-.783-.066-1.78-.15-2.725-.064-.71-.587-1.342-1.364-1.544m-1.694-13.1A45 45 0 0 0 5.126 8.41c-.098.262-.19.57-.268.933-.241 1.116-.346 2.612-.346 4.656s.105 3.54.346 4.656c.235 1.094.573 1.685.943 2.055s.96.707 2.055.943q.327.069.7.123a24 24 0 0 1-.044-1.315c0-.874.072-1.94.158-2.904.143-1.596 1.302-2.898 2.853-3.301a3.94 3.94 0 0 1 1.978 0c1.551.402 2.71 1.705 2.853 3.301.086.963.158 2.03.158 2.904 0 .407-.018.855-.044 1.315q.372-.054.7-.123c1.094-.236 1.685-.573 2.055-.943s.707-.961.943-2.055c.24-1.116.346-2.613.346-4.656 0-2.044-.105-3.54-.346-4.656a7 7 0 0 0-.27-.934 45 45 0 0 0-6.176-5.318l-1.208-.864z\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function Home_2Stroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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