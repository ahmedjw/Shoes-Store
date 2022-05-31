import React from "react";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Layout from "./layout/Layout";

export default function App() {

 return (
    <Layout>
           <Content/>
               <Footer />
    </Layout>
  );
}
