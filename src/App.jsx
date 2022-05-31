import React from "react";
import "./App.css";
import Content from "./components/Content";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Layout from "./layout/Layout";

export default function App() {

 return (
    <Layout>
     <Content/>
      <Products />
      <Footer />
    </Layout>
  );
}
