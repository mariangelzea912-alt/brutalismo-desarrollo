function SeccionContacto() {
  return (
    <section
      id="contacto"
      className="relative h-screen w-full snap-start overflow-hidden bg-black text-[#FFE600] pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center border-t-4 border-[#FFE600]"
    >
      <div className="max-w-4xl w-full flex flex-col gap-6">
        <div className="border-b-4 border-[#FFE600] pb-3">
          <span className="font-mono text-xs uppercase tracking-widest">
            [06] INICIAR PROYECTO
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Solicitar Brief
          </h2>
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase">
              Nombre / Estudio
            </label>
            <input
              type="text"
              placeholder="EJ. CARLOS MENDOZA"
              className="bg-black border-2 border-[#FFE600] px-3 py-2.5 text-xs text-[#FFE600] placeholder-[#FFE600]/40 focus:outline-none focus:bg-[#FFE600] focus:text-black"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase">
              Correo Electrónico
            </label>
            <input
              type="email"
              placeholder="CONTACTO@DOMINIO.COM"
              className="bg-black border-2 border-[#FFE600] px-3 py-2.5 text-xs text-[#FFE600] placeholder-[#FFE600]/40 focus:outline-none focus:bg-[#FFE600] focus:text-black"
            />
          </div>
          <div className="flex flex-col gap-1 sm:col-span-2">
            <label className="text-xs font-bold uppercase">
              Tipo de Obra y Ubicación
            </label>
            <input
              type="text"
              placeholder="EJ. VIVIENDA UNIFAMILIAR · SIERRA DE GUADARRAMA"
              className="bg-black border-2 border-[#FFE600] px-3 py-2.5 text-xs text-[#FFE600] placeholder-[#FFE600]/40 focus:outline-none focus:bg-[#FFE600] focus:text-black"
            />
          </div>
          <div className="sm:col-span-2 pt-1 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-[#FFE600]/80">
              RESPUESTA TÉCNICA EN MENOS DE 48 HORAS
            </span>
            <button
              type="submit"
              className="px-7 py-3 bg-[#FFE600] text-black font-black text-xs uppercase tracking-widest border-2 border-[#FFE600] hover:bg-black hover:text-[#FFE600] transition-colors cursor-pointer"
            >
              [ENVIAR BRIEF →]
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SeccionContacto;