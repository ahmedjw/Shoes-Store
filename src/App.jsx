import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./layout/Layout";
import PageRoutes from "./Routes/PageRoutes";


export default function App() {
 return (
    <Layout>
      <Header />
      <PageRoutes/>
     <Footer />
    </Layout>
  );
}
