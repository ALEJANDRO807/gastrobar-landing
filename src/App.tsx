import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Destacados from "./sections/Destacados";
import Reservas from "./sections/Reservas";
import Galeria from "./sections/Galeria";
import Contacto from "./sections/Contacto";
import Footer from "./sections/Footer";
import Sobre from "./sections/Sobre";
import Testimonios from "./sections/Testimonios";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <main className="pt-20">
        {/* HERO */}
        <section id="inicio">
          <Hero />
        </section>

        {/* DESTACADOS */}
        <section id="destacados" className="py-24">
          <Destacados />
        </section>
        
        {/* SOBRE NOSOTROS */}
        <section id="sobre" className="py-24">
          <Sobre />
        </section>

        {/* GALERÍA */}
        <section id="galeria" className="py-24">
          <Galeria />
        </section>

        {/* RESERVAS */}
        <section id="reservas" className="py-24">
          <Reservas />
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="py-24">
          <Contacto />
        </section>
      </main>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-24">
        <Testimonios />
      </section>

      <Footer />
    </div>
  );
}