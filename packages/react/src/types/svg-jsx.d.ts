import * as React from "react";

/** Ensure JSX SVG tags are recognized during .d.ts emit */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: React.DetailedHTMLProps<any, any>;
    }
  }
}
