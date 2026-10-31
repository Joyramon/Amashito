export function GarlicButterFeature() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-10 rounded-3xl bg-[#f5f0e6] p-10 md:p-14">
          {/* Imagen */}
          <div className="w-full max-w-md flex-1 basis-[300px]">
            <img
              src="https://images.pexels.com/photos/37225240/pexels-photo-37225240.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Mantequilla de ajo y hierbas en un frasco de vidrio"
              className="block w-full rounded-2xl shadow-xl"
            />
          </div>

          {/* Texto */}
          <div className="w-full max-w-sm flex-1 basis-[280px]">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#75875e]">
              Hecho en casa
            </span>
            <h2 className="mt-2 font-display text-3xl leading-tight text-[#40543b]">
              Conserva la frescura de tus alimentos
            </h2>
            <p className="mt-4 text-[1.7] text-[#625f55]">
              Utiliza nuestras telas enceradas para cubrir recipientes,
              proteger alimentos y reducir el uso de plástico desechable.
            </p>
            <a
              href="#productos"
              className="mt-5 inline-block rounded-full bg-[#657b53] px-6 py-3 font-bold text-white transition-colors hover:bg-[#40543b]"
            >
              Conoce nuestros productos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
