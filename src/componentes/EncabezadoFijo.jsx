import { monolitoDatos } from '../data.js/monolitoDatos.js';

function EncabezadoFijo() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-[#FFE600] border-b-4 border-[#FFE600] px-4 md:px-10 h-16 flex items-center justify-between">
      <a href="#inicio" className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#FFE600] text-black flex items-center justify-center font-black text-lg border-2 border-[#FFE600]">
          M
        </div>
        <span className="font-mono font-black text-sm md:text-base tracking-widest uppercase">
          MONOLITO // ARQ
        </span>
      </a>

      <nav className="hidden lg:flex items-center gap-1 font-mono text-xs font-bold">
        {monolitoDatos.enlacesNavegacion.map((enlace) => (
          <a
            key={enlace.destino}
            href={enlace.destino}
            className="px-2.5 py-1 border-2 border-[#FFE600] hover:bg-[#FFE600] hover:text-black transition-colors"
          >
            {enlace.etiqueta}
          </a>
        ))}
      </nav>

      <a
        href="#contacto"
        className="px-4 py-1.5 bg-[#FFE600] text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-[#FFE600] hover:bg-black hover:text-[#FFE600] transition-colors"
      >
        [COTIZAR]
      </a>
    </header>
  );
}

export default EncabezadoFijo;