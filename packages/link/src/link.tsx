import * as React from "react";

type RootProps = React.ComponentPropsWithoutRef<"a">;

export type LinkProps = RootProps & {
  noTrack?: boolean;
};

export const Link: React.FC<Readonly<LinkProps>> = ({
  target = "_blank",
  style,
  noTrack = false,
  ...props
}) => (
  <a
    {...props}
    style={{
      color: "#067df7",
      textDecoration: "none",
      ...style,
    }}
    target={target}
    // eslint-disable-next-line react/jsx-sort-props, react/no-unknown-property
    ses:no-track={noTrack ? "true" : undefined}
  >
    {props.children}
  </a>
);
