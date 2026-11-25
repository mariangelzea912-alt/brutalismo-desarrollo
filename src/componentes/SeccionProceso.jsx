import { monolitoDatos } from '../data.js/monolitoDatos';

function SeccionProceso() {
  return (
    <section
      id="proceso"
      className="relative h-screen w-full snap-start overflow-hidden bg-black text-[#FFE600] pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center border-t-4 border-[#FFE600]"
    >
      <div className="max-w-6xl w-full flex flex-col gap-6">
        <div className="flex flex-wrap items-end justify-between border-b-4 border-[#FFE600] pb-3 gap-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest">
              [04] METODOLOGÍA
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
              Fases de Obra
            </h2>
          </div>
          <span className="font-mono text-xs bg-[#FFE600] text-black px-3 py-1 font-black uppercase">
            EJECUCIÓN DIRECTA
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {monolitoDatos.fasesObra.map((item) => (
            <div
              key={item.fase}
              className={`border-4 border-[#FFE600] p-5 flex flex-col justify-between gap-4 ${
                item.destacada ? 'bg-[#FFE600] text-black' : ''
              }`}
            >
              <div>
                <span
                  className={`font-mono text-xs font-black px-2 py-0.5 inline-block mb-3 ${
                    item.destacada
                      ? 'bg-black text-[#FFE600]'
                      : 'bg-[#FFE600] text-black'
                  }`}
                >
                  {item.fase}
                </span>
                <h3 className="text-xl font-black uppercase mb-2">
                  {item.titulo}
                </h3>
                <p className="font-mono text-xs">{item.descripcion}</p>
              </div>
              <span
                className={`font-mono text-[11px] font-black border-t-2 pt-2 ${
                  item.destacada ? 'border-black' : 'border-[#FFE600]'
                }`}
              >
                {item.tiempo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeccionProceso;