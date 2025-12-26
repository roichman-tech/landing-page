import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Roichman Tech | Software House - Desenvolvimento de Software Sob Medida</title>
        <meta 
          name="description" 
          content="Desenvolvemos software sob medida com foco em qualidade, prazos e resultados de longo prazo. Sistemas web, apps mobile, integrações e mais." 
        />
        <meta name="keywords" content="software house, desenvolvimento de software, sistemas web, aplicativos, integrações, Ceará, Brasil" />
        <link rel="canonical" href="https://roichman.tech" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Solutions />
          <Process />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
