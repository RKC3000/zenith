import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "./About";
import Contact from "./Contact";
import FAQ from "./FAQ";
import HomePage from "./HomePage";
import Schedule from "./Schedule";
import Speakers from "./Speakers";
import Sponsor from "./Sponsor";

function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Zenith</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/zenith-logo.png" />
      </Head>

      <div className="bg-cover back ">
        <Navbar />
        <HomePage />
      </div>
      <main>
        <About />
        {/* <Schedule/> */}
        <Speakers />
        {/* <Sponsor /> */}
        <FAQ />
        {/* <Contact /> */}
        <Footer />
      </main>
    </div>
  );
}

export default Home;
