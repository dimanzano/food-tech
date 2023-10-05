import React from "react";
import {
  UNSAFE_DataRouterStateContext,
  UNSAFE_NavigationContext,
  useLocation,
  useResolvedPath,
} from "react-router-dom";

export type UseNavLinkOpts = {
  relative?: "route" | "path";
  caseSensitive?: boolean;
  end?: boolean;
};

export function useNavLink(
  to: string,
  { relative = "route", caseSensitive = true, end = false }: UseNavLinkOpts = {}
) {
  const path = useResolvedPath(to, { relative });
  const location = useLocation();
  const routerState = React.useContext(UNSAFE_DataRouterStateContext);
  const { navigator } = React.useContext(UNSAFE_NavigationContext);

  let toPathname = navigator.encodeLocation
    ? navigator.encodeLocation(path).pathname
    : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname =
    routerState && routerState.navigation && routerState.navigation.location
      ? routerState.navigation.location.pathname
      : null;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname
      ? nextLocationPathname.toLowerCase()
      : null;
    toPathname = toPathname.toLowerCase();
  }

  const isActive =
    locationPathname === toPathname ||
    (!end &&
      locationPathname.startsWith(toPathname) &&
      locationPathname.charAt(toPathname.length) === "/");

  const isPending =
    nextLocationPathname != null &&
    (nextLocationPathname === toPathname ||
      (!end &&
        nextLocationPathname.startsWith(toPathname) &&
        nextLocationPathname.charAt(toPathname.length) === "/"));

  return { isActive, isPending };
}
