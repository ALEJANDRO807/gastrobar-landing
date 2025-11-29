import { useState } from "react";

export default function Galeria() {
  const images = [
    "/img/ambience2.jpg",
    "/img/bartender.jpg",
    "/img/dish3poke.jpg",
    "/img/cock1.jpg",
    "/img/drink2martini.jpg",
    "/img/ambience1.jpg",
  ];

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="bg-black py-24 text-white" id="galeria">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-amber-400 text-center">
          Galería
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl group">
              <img
                src={img}
                onClick={() => setSelected(img)}
                className="w-full h-full object-cover cursor-pointer group-hover:scale-110 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999]"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
