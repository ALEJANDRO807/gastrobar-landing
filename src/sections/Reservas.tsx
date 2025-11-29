export default function Reservas() {
  return (
    <section className="py-28 bg-black text-white" id="reservas">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-5xl font-bold text-[#D4AF37]">
          Reserva tu Mesa
        </h2>

        <p className="text-white/70 mt-4 text-lg max-w-2xl mx-auto">
          Te esperamos para una experiencia gastronómica única.
        </p>

        <a
          href="https://wa.me/XXXXXXXXXXX?text=Hola,+quiero+hacer+una+reserva"
          target="_blank"
          className="inline-block mt-10 px-12 py-4 bg-[#D4AF37] text-black font-semibold text-lg rounded-full hover:bg-[#CFA656] transition-all"
        >
          Reservar Ahora
        </a>

      </div>
    </section>
  );
}
