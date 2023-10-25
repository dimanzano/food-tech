import { matchPath, useLocation } from "react-router-dom";

const joinPaths = (paths: string[]): string =>
  paths.join("/").replace(/\/\/+/g, "/");

// taken from https://mui.com/material-ui/guides/routing/#tabs
export function useRouteMatch(patterns: readonly string[], basename = "") {
  const { pathname } = useLocation();

  for (const pattern of patterns) {
    const possibleMatch = matchPath(joinPaths([basename, pattern]), pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}
