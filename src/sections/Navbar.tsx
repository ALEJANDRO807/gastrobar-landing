export default function Navbar() {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        
        <h1
          className="text-2xl font-bold text-[#D4AF37] cursor-pointer"
          onClick={() => scrollTo("inicio")}
        >
          GastroBar
        </h1>

        <ul className="flex gap-8 text-white/80 text-lg">

          {/* Inicio */}
          <li
            onClick={() => scrollTo("inicio")}
            className="cursor-pointer hover:text-[#D4AF37] transition-colors"
          >
            Inicio
          </li>

          {/* Menú → ahora es una página aparte */}
          <li
            onClick={() => (window.location.href = "/menu")}
            className="cursor-pointer hover:text-[#D4AF37] transition-colors"
          >
            Menú
          </li>

          {/* Reservas */}
          <li
            onClick={() => scrollTo("reservas")}
            className="cursor-pointer hover:text-[#D4AF37] transition-colors"
          >
            Reservas
          </li>

          {/* Contacto */}
          <li
            onClick={() => scrollTo("contacto")}
            className="cursor-pointer hover:text-[#D4AF37] transition-colors"
          >
            Contacto
          </li>

        </ul>

      </div>
    </nav>
  );
}

