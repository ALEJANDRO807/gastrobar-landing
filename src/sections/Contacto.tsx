export default function Contacto() {
  return (
    <section className="bg-black py-24 text-white" id="contacto">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        <div>
          <h2 className="text-5xl font-bold text-amber-400">Contacto</h2>
          <p className="text-white/70 mt-4">
            Estamos ubicados en el corazón de El Poblado, Medellín.
          </p>

          <div className="mt-8 space-y-3">
            <p className="text-lg">📍 Dirección: Cra. 37 #8A-46, El Poblado</p>
            <p className="text-lg">📞 Teléfono: +57 300 000 0000</p>
            <p className="text-lg">⏰ Horarios: Lun - Dom, 6pm - 2am</p>
          </div>
        </div>

        <iframe
          className="rounded-xl w-full h-80 border border-white/10"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7000812078385!2d-75.5728297239435!3d6.206729526796458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44283f6a574d6f%3A0x4cf2c98b5eb2d287!2sCra.%2037%20%238a-46%2C%20El%20Poblado%2C%20Medell%C3%ADn%2C%20El%20Poblado%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1733188797000!5m2!1ses!2sco"
        ></iframe>

      </div>
    </section>
  );
}
