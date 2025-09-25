import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12 0 2.68-.148 4.784-.55 6.43l-.021.087c-.536 2.12-1.51 3.466-3.183 4.294l-.02.011q-.177.087-.364.165l-.061.026a9.3 9.3 0 0 1-1.527.474l-.26.059q-.182.038-.373.072-.096.019-.194.036a18 18 0 0 1-.888.126q-.18.023-.367.042-.14.014-.284.027-.206.019-.419.036l-.26.018a33 33 0 0 1-1.144.06q-.228.008-.465.015l-.336.007-.475.01q-.396.004-.809.005l-.793-.005h-.017a57 57 0 0 1-.815-.017q-.229-.007-.452-.015a43 43 0 0 1-1.155-.06q-.129-.007-.254-.017l-.436-.038-.265-.025q-.21-.022-.414-.048-.126-.014-.247-.03-.312-.041-.606-.092l-.157-.029q-.21-.037-.41-.08-.12-.025-.239-.053a9.98 9.98 0 0 1-1.12-.317l-.04-.015a8 8 0 0 1-.771-.32l-.041-.02-.015-.008a6 6 0 0 1-.69-.397l-.052-.035a5.3 5.3 0 0 1-.852-.725l-.05-.052-.078-.086-.06-.07c-.639-.75-1.087-1.7-1.394-2.9l-.044-.183C.655 16.727.512 14.643.512 12c0-10 2-12 12-12m0 2c-2.46 0-4.29.126-5.672.424-1.36.293-2.148.724-2.664 1.24S3.23 4.97 2.936 6.328C2.638 7.71 2.512 9.54 2.512 12c0 1.126.029 2.12.086 3H6.27a3 3 0 0 1 2.121.879l.243.242a3 3 0 0 0 2.121.879h3.515a3 3 0 0 0 2.121-.879l.243-.242A3 3 0 0 1 18.755 15h3.671c.058-.88.086-1.874.086-3 0-2.46-.126-4.29-.424-5.672-.293-1.36-.724-2.148-1.24-2.664s-1.304-.947-2.664-1.24C16.802 2.126 14.972 2 12.512 2\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function ArchiveMailboxFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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