import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Publications from "@/components/Publications";
import Code from "@/components/Code";
import CV from "@/components/CV";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dr. Alejandra Ramirez | Mathematics & Interdisciplinary Research</title>
        <meta 
          name="description" 
          content="Postdoctoral Researcher specializing in game theory, evolutionary dynamics, and complex systems. Publications, research, open-source code, and contact information." 
        />
        <meta name="keywords" content="Maria Alejandra Ramirez, Alejandra Ramirez, Game Theory, Evolutionary Dynamics, Complex Systems, Cultural Evolution, Modelling, Research, Publications, MPI EVA, MPI MIS, MPI Evolbio, MPI, Code, Academia" />
        <link rel="canonical" href="https://ma-ramirez.github.io/" />

        {/* Favicon */}
        {/*<link rel="icon" type="image/png" sizes="16x16" href="/favicon_ok.png" />*/}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <News />
          <Publications />
          <Code />
          <CV />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
