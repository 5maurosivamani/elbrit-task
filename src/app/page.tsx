import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Ingredients from "@/components/Ingredients";
import React from "react";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Features />
      <Ingredients />
      <Blogs />
      <Footer />
    </div>
  );
}

export default Home;
