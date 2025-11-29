import { Link } from "react-router-dom";

export default function Menu() {
  const dishes = [
    {
      img: "/img/dish1tacos.jpg",
      name: "Tacos Fusión",
      desc: "Con col morada, salsa de la casa y toque cítrico.",
      price: "$12.50",
    },
    {
      img: "/img/dish2burger.jpg",
      name: "Burger Gourmet",
      desc: "Pan brioche, queso cheddar y carne premium.",
      price: "$14.00",
    },
    {
      img: "/img/dish3poke.jpg",
      name: "Poke Bowl",
      desc: "Arroz, aguacate fresco y verduras crujientes.",
      price: "$11.00",
    },
    {
      img: "/img/dish4tapas.jpg",
      name: "Postre Delux",
      desc: "Chocolate amargo y frutos rojos.",
      price: "$8.00",
    },
    {
      img: "/img/dish5dessert.jpg",
      name: "Tapas Mixtas",
      desc: "Selección de entradas artesanales.",
      price: "$10.00",
    },
  ];

  const drinks = [
    {
      img: "/img/cock1.jpg",
      name: "Cóctel de la Casa",
      desc: "Refrescante, vibrante y lleno de sabor.",
      price: "$9.00",
    },
    {
      img: "/img/drink1red.jpg",
      name: "Red Sunset",
      desc: "Frutas cítricas en perfecta armonía.",
      price: "$8.50",
    },
    {
      img: "/img/drink2martini.jpg",
      name: "Espresso Martini",
      desc: "Clásico moderno, perfecto para la noche.",
      price: "$10.00",
    },
  ];

  return (
    <section className="bg-black py-24 text-white" id="menu">
      <div className="max-w-6xl mx-auto px-6">

        {/* BOTÓN DE REGRESAR */}
        <div className="mb-10">
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-full border border-amber-400 text-amber-400 font-semibold hover:bg-amber-400 hover:text-black transition"
          >
            ← Regresar
          </Link>
        </div>

        <h2 className="text-5xl font-bold text-amber-400 text-center">Menú</h2>

        {/* PLATOS */}
        <h3 className="text-3xl font-semibold text-amber-400 mt-16 mb-6">
          Platos Principales
        </h3>
        <div className="grid md:grid-cols-3 gap-10">
          {dishes.map((d) => (
            <div
              key={d.name}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:scale-[1.03] transition-all duration-300 backdrop-blur-md"
            >
              <img src={d.img} alt={d.name} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h4 className="text-xl font-bold">{d.name}</h4>
                <p className="text-white/70 text-sm mt-2">{d.desc}</p>
                <p className="text-amber-400 text-lg font-semibold mt-4">{d.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* BEBIDAS */}
        <h3 className="text-3xl font-semibold text-amber-400 mt-20 mb-6">
          Bebidas
        </h3>
        <div className="grid md:grid-cols-3 gap-10">
          {drinks.map((d) => (
            <div
              key={d.name}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:scale-[1.03] transition-all duration-300 backdrop-blur-md"
            >
              <img src={d.img} alt={d.name} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h4 className="text-xl font-bold">{d.name}</h4>
                <p className="text-white/70 text-sm mt-2">{d.desc}</p>
                <p className="text-amber-400 text-lg font-semibold mt-4">{d.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
