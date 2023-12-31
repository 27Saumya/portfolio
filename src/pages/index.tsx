import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (

    <div className="container mt-24 mx-auto px-12 py-4">
      <Head>
        <title>Saumya</title>
      </Head>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}

export default Home;