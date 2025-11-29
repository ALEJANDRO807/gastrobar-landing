export default function Destacados() {
  const destacados = [
    {
      img: "/img/dish1tacos.jpg",
      title: "Tacos Fusión",
    },
    {
      img: "/img/dish2burger.jpg",
      title: "Burger Gourmet",
    },
    {
      img: "/img/cock1.jpg",
      title: "Cóctel de la Casa",
    },
  ];

  return (
    <section className="bg-black py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-amber-400">Destacados</h2>
        <p className="text-white/70 mt-3 max-w-2xl mx-auto">
          Nuestra selección especial de la semana.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {destacados.map((d) => (
            <div
              key={d.title}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={d.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mt-4 mb-6">{d.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
