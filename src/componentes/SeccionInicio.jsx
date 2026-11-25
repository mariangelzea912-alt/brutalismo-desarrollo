function SeccionInicio() {
  return (
    <section
      id="inicio"
      className="relative h-screen w-full snap-start overflow-hidden bg-[#FFE600] text-black pt-20 pb-16 px-6 md:px-12 flex items-center justify-center"
    >
      <svg
        className="absolute top-16 left-0 w-full h-4 pointer-events-none"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="hazard-top"
            width="24"
            height="16"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <rect width="12" height="16" fill="#000000" />
            <rect x="12" width="12" height="16" fill="#FFE600" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hazard-top)" />
      </svg>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col items-start gap-5">
          <div className="px-3 py-1 bg-black text-[#FFE600] font-mono font-black text-xs uppercase tracking-widest">
            ESTUDIO DE ARQUITECTURA // DESDE 2018
          </div>

          <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black uppercase leading-[0.88] tracking-tighter">
            HORMIGÓN.
            <br />
            ACERO.
            <br />
            <span className="bg-black text-[#FFE600] px-2 inline-block mt-1">
              FORMA PURA.
            </span>
          </h1>

          <p className="font-mono text-xs sm:text-sm font-bold border-l-4 border-black pl-4 max-w-lg">
            Diseñamos estructuras honestas, monumentales y funcionales. Sin
            adornos innecesarios. Solo masa, luz y geometría exacta.
          </p>

          <div className="grid grid-cols-3 border-4 border-black bg-black text-[#FFE600] w-full max-w-md font-mono">
            <div className="p-3 border-r-2 border-[#FFE600]">
              <span className="block text-xl sm:text-2xl font-black">42</span>
              <span className="text-[10px] uppercase">Obras</span>
            </div>
            <div className="p-3 border-r-2 border-[#FFE600]">
              <span className="block text-xl sm:text-2xl font-black">18K</span>
              <span className="text-[10px] uppercase">M² Construidos</span>
            </div>
            <div className="p-3">
              <span className="block text-xl sm:text-2xl font-black">0%</span>
              <span className="text-[10px] uppercase">Ornamento</span>
            </div>
          </div>

          <a
            href="#obras"
            className="px-7 py-3.5 bg-black text-[#FFE600] font-mono font-black text-sm uppercase tracking-wider border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:bg-[#FFE600] hover:text-black transition-colors"
          >
            VER PROYECTOS ↓
          </a>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-sm bg-black border-4 border-black p-6 shadow-[10px_10px_0px_0px_#000] flex flex-col gap-4">
            <div className="flex justify-between items-center font-mono text-[11px] text-[#FFE600] border-b-2 border-[#FFE600] pb-2">
              <span>FIG. 01 // ALZADO</span>
              <span>ESC 1:100</span>
            </div>
            <svg
              className="w-full h-56 sm:h-64"
              viewBox="0 0 260 220"
              fill="none"
            >
              <path
                d="M0 40 H260 M0 80 H260 M0 120 H260 M0 160 H260 M40 0 V220 M100 0 V220 M160 0 V220 M220 0 V220"
                stroke="#FFE600"
                strokeWidth="1"
                strokeOpacity="0.25"
              />
              <polygon
                points="50,180 50,50 140,20 140,150"
                fill="#FFE600"
                stroke="#000"
                strokeWidth="3"
              />
              <polygon
                points="140,20 210,55 210,185 140,150"
                fill="#000"
                stroke="#FFE600"
                strokeWidth="3"
              />
              <polygon
                points="50,180 140,150 210,185 120,210"
                fill="#FFE600"
                stroke="#000"
                strokeWidth="3"
              />
              <rect x="70" y="75" width="18" height="35" fill="#000" />
              <rect x="102" y="65" width="18" height="35" fill="#000" />
              <rect x="70" y="125" width="18" height="35" fill="#000" />
              <rect x="102" y="115" width="18" height="35" fill="#000" />
            </svg>
            <div className="font-mono text-xs text-[#FFE600] flex justify-between border-t-2 border-[#FFE600] pt-2">
              <span>HORMIGÓN ARMADO</span>
              <span>LAT 40.41°</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeccionInicio;