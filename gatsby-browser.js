import React from "react";
import Layout from "./src/layout/layout";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
