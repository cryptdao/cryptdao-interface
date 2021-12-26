// icon:google-nearby | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
import * as React from "react";

function GoogleNearbyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="8em"
      width="8em"
      {...props}
    >
      <path d="M21.36 10.46l-7.82-7.82c-.85-.85-2.23-.85-3.08 0l-7.82 7.82c-.85.85-.85 2.23 0 3.08l7.82 7.82c.85.85 2.23.85 3.08 0l7.82-7.82c.85-.85.85-2.23 0-3.08M12 19l-7-7 7-7 7 7-7 7m4.5-7L12 16.5 7.5 12 12 7.5l4.5 4.5z" />
    </svg>
  );
}

export default GoogleNearbyIcon;
