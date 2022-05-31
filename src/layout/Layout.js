import React from "react";
import { DataProvider } from "../context/DataProvider";

export default function Layout({ children }) {
  return <DataProvider>{children}</DataProvider>;
}
