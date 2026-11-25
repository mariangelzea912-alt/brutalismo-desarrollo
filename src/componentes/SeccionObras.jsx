function SeccionObras() {
  return (
    <section
      id="obras"
      className="relative h-screen w-full snap-start overflow-hidden bg-[#FFE600] text-black pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center border-t-4 border-black"
    >
      <div className="max-w-6xl w-full flex flex-col gap-5">
        <div className="flex flex-wrap items-end justify-between border-b-4 border-black pb-3 gap-2">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest">
              [03] CATÁLOGO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
              Obras Destacadas
            </h2>
          </div>
          <span className="font-mono text-xs bg-black text-[#FFE600] px-3 py-1 font-black uppercase">
            ARCHIVO 2021–2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <article className="border-4 border-black bg-black text-[#FFE600] p-5 shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center font-mono text-xs border-b-2 border-[#FFE600] pb-2">
                <span className="font-black">OBRA // 01</span>
                <span>MADRID · 2024</span>
              </div>
              <svg
                className="w-full h-24 border-2 border-[#FFE600] bg-[#111]"
                viewBox="0 0 240 90"
                fill="none"
              >
                <rect
                  x="20"
                  y="15"
                  width="55"
                  height="60"
                  fill="#FFE600"
                  stroke="#000"
                  strokeWidth="2"
                />
                <rect
                  x="90"
                  y="30"
                  width="70"
                  height="45"
                  fill="none"
                  stroke="#FFE600"
                  strokeWidth="3"
                />
                <rect
                  x="175"
                  y="10"
                  width="45"
                  height="65"
                  fill="#FFE600"
                  stroke="#000"
                  strokeWidth="2"
                />
              </svg>
              <h3 className="text-xl font-black uppercase">Torre K-09</h3>
              <p className="font-mono text-xs text-[#FFE600]/90">
                Centro cultural en hormigón visto y celosías modulares de
                acero corten.
              </p>
            </div>
            <div className="font-mono text-[11px] border-t-2 border-[#FFE600] pt-2 flex justify-between font-bold">
              <span>4.200 M²</span>
              <span>[COMPLETADO]</span>
            </div>
          </article>

          <article className="border-4 border-black bg-black text-[#FFE600] p-5 shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center font-mono text-xs border-b-2 border-[#FFE600] pb-2">
                <span className="font-black">OBRA // 02</span>
                <span>BILBAO · 2023</span>
              </div>
              <svg
                className="w-full h-24 border-2 border-[#FFE600] bg-[#111]"
                viewBox="0 0 240 90"
                fill="none"
              >
                <polygon
                  points="20,75 80,20 150,20 150,75"
                  fill="#FFE600"
                  stroke="#000"
                  strokeWidth="2"
                />
                <rect
                  x="150"
                  y="40"
                  width="70"
                  height="35"
                  fill="#000"
                  stroke="#FFE600"
                  strokeWidth="3"
                />
              </svg>
              <h3 className="text-xl font-black uppercase">Pabellón Sur</h3>
              <p className="font-mono text-xs text-[#FFE600]/90">
                Galería de arte industrial con cubierta en diente de sierra e
                iluminación cenital.
              </p>
            </div>
            <div className="font-mono text-[11px] border-t-2 border-[#FFE600] pt-2 flex justify-between font-bold">
              <span>2.850 M²</span>
              <span>[COMPLETADO]</span>
            </div>
          </article>

          <article className="border-4 border-black bg-black text-[#FFE600] p-5 shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center font-mono text-xs border-b-2 border-[#FFE600] pb-2">
                <span className="font-black">OBRA // 03</span>
                <span>VALENCIA · 2025</span>
              </div>
              <svg
                className="w-full h-24 border-2 border-[#FFE600] bg-[#111]"
                viewBox="0 0 240 90"
                fill="none"
              >
                <rect
                  x="25"
                  y="25"
                  width="190"
                  height="45"
                  fill="none"
                  stroke="#FFE600"
                  strokeWidth="3"
                />
                <rect
                  x="55"
                  y="15"
                  width="40"
                  height="60"
                  fill="#FFE600"
                  stroke="#000"
                  strokeWidth="2"
                />
                <rect
                  x="145"
                  y="35"
                  width="50"
                  height="25"
                  fill="#FFE600"
                  stroke="#000"
                  strokeWidth="2"
                />
              </svg>
              <h3 className="text-xl font-black uppercase">Casa Búnker</h3>
              <p className="font-mono text-xs text-[#FFE600]/90">
                Vivienda monolítica excavada en ladera con patio central y
                muros de 40 cm.
              </p>
            </div>
            <div className="font-mono text-[11px] border-t-2 border-[#FFE600] pt-2 flex justify-between font-bold">
              <span>640 M²</span>
              <span>[EN OBRA]</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default SeccionObras;