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
        <title>Dr. Alexandra Chen | Applied Mathematics & Interdisciplinary Research</title>
        <meta 
          name="description" 
          content="Associate Professor specializing in multi-scale modeling, computational biology, climate modeling, and complex systems. Explore publications, open-source code, and research." 
        />
        <meta name="keywords" content="applied mathematics, computational science, multi-scale modeling, research, publications" />
        <link rel="canonical" href="https://alexandrachen.com" />
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
