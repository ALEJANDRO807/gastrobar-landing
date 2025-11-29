export default function Hero() {
  return (
    <section
      className="
        relative 
        h-screen w-full 
        bg-cover bg-center 
        flex items-center justify-center
      "
      style={{
        backgroundImage: "url('/img/gastrobarimage.jpg')",
        backgroundPosition: "center 40%", 
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>

      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-6xl font-extrabold text-amber-400 drop-shadow-lg">
          Una Experiencia que Inspira
        </h1>

        <p className="text-white text-xl mt-4 drop-shadow-md leading-relaxed">
          Gastronomía moderna, coctelería de autor y un ambiente creado
          para tus mejores noches.
        </p>

        <a
          href="/menu"
          className="
            inline-block mt-8 px-12 py-4 
            bg-[#D4AF37] hover:bg-[#b8962f] 
            text-black font-semibold text-lg 
            rounded-full 
            shadow-[0_0_20px_rgba(212,175,55,0.4)]
            transition-all
          "
        >
          Ver Menú
        </a>
      </div>
    </section>
  );
}
