export default function Testimonios() {
  const reviews = [
    {
      name: "Pablo S.",
      text: "Ambiente increíble, música perfecta y la comida espectacular. Volveré sin duda.",
      stars: 5
    },
    {
      name: "Sebastián M.",
      text: "El mejor Espresso Martini que he probado. Perfecto para iniciar la noche.",
      stars: 5
    },
    {
      name: "Laura G.",
      text: "Las tapas y el servicio fueron impecables. Se nota la dedicación.",
      stars: 4
    }
  ];

  return (
    <section id="testimonios" className="bg-black py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-amber-400">Testimonios</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg hover:scale-[1.03] transition-all duration-500"
            >
              <p className="text-amber-400 text-xl mb-4">
                {"⭐".repeat(r.stars)}
              </p>
              <p className="text-white/80">{r.text}</p>
              <p className="mt-4 font-bold text-amber-400">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
