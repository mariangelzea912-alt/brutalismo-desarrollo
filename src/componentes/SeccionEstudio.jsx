import { monolitoDatos } from '../data.js/monolitoDatos.js';

function SeccionEstudio() {
  return (
    <section
      id="estudio"
      className="relative h-screen w-full snap-start overflow-hidden bg-[#FFE600] text-black pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center border-t-4 border-black"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest">
            [05] EL ESTUDIO
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase leading-none tracking-tight">
            Precisión Técnica Sin Concesiones
          </h2>
          <p className="font-mono text-xs sm:text-sm font-bold leading-relaxed">
            En MONOLITO // ARQ entendemos la arquitectura como una disciplina
            constructiva rigurosa. Cada muro portante, junta de dilatación y
            viga tensada responde a una lógica estructural clara y duradera.
          </p>
          <div className="grid grid-cols-2 gap-3 font-mono text-xs pt-1">
            <div className="border-2 border-black p-3 bg-black text-[#FFE600]">
              <span className="block font-black">ESTRUCTURA</span>
              <span>Hormigón Armado In Situ</span>
            </div>
            <div className="border-2 border-black p-3 bg-black text-[#FFE600]">
              <span className="block font-black">SOSTENIBILIDAD</span>
              <span>Inercia Térmica Masiva</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-1 gap-3">
          {monolitoDatos.metricasEstudio.map((metrica) => (
            <div
              key={metrica.etiqueta}
              className={`border-4 border-black p-4 flex items-center justify-between ${
                metrica.oscura ? 'bg-black text-[#FFE600]' : ''
              }`}
            >
              <span className="font-mono text-xs font-bold uppercase">
                {metrica.etiqueta}
              </span>
              <span className="text-3xl font-black">{metrica.valor}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeccionEstudio;