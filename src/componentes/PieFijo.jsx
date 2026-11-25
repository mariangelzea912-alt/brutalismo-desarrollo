function PieFijo() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-[#FFE600] text-black border-t-4 border-black px-4 md:px-10 h-12 flex items-center justify-between font-mono">
      <span className="font-black text-xs uppercase tracking-widest">
        MONOLITO // ARQ © 2026
      </span>
      <span className="hidden sm:inline font-bold text-xs uppercase">
        40.4168° N // 3.7038° W
      </span>
      <a
        href="#inicio"
        className="px-2.5 py-0.5 bg-black text-[#FFE600] font-black text-[11px] uppercase hover:bg-white hover:text-black transition-colors"
      >
        [↑ TOP]
      </a>
    </footer>
  );
}

export default PieFijo;