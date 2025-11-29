export default function Sobre() {
  return (
    <section id="sobre" className="bg-black py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-5xl font-bold text-amber-400">Sobre Nosotros</h2>
          <p className="text-white/70 mt-6 leading-relaxed text-lg">
            En <span className="text-amber-400 font-semibold">GastroBar</span>  
             buscamos transformar cada noche en una experiencia sensorial. 
            Fusionamos cocina moderna, coctelería de autor y un ambiente 
            envolvente pensado para compartir, celebrar y disfrutar.
          </p>

          <p className="text-white/70 mt-4 leading-relaxed text-lg">
            Nuestro equipo está formado por chefs, bartenders y anfitriones 
            apasionados por ofrecer hospitalidad auténtica y sabores que inspiran.
          </p>
        </div>

        <img
          src="/img/ambience1.jpg"
          alt="Ambiente GastroBar"
          className="rounded-xl shadow-xl object-cover w-full h-80 hover:scale-105 transition-all duration-700"
        />
      </div>
    </section>
  );
}
