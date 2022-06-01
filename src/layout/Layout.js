import React from "react";
import { BrowserRouter } from "react-router-dom";

import { DataProvider } from "../context/DataProvider";

export default function Layout({ children }) {
  return (
    <DataProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </DataProvider>
  );
}
