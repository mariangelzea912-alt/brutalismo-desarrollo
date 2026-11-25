import EncabezadoFijo from '../componentes/EncabezadoFijo.jsx';
import PieFijo from '../componentes/PieFijo.jsx';
import SeccionInicio from '../componentes/SeccionInicio.jsx';
import SeccionPrincipios from '../componentes/SeccionPrincipios.jsx';
import SeccionObras from '../componentes/SeccionObras.jsx';
import SeccionProceso from '../componentes/SeccionProceso.jsx';
import SeccionEstudio from '../componentes/SeccionEstudio.jsx';
import SeccionContacto from '../componentes/SeccionContacto.jsx';

function PaginaPrincipal() {
  return (
    <div className="min-h-screen w-full bg-black text-[#FFE600]">
      <EncabezadoFijo />
      <main>
        <SeccionInicio />
        <SeccionPrincipios />
        <SeccionObras />
        <SeccionProceso />
        <SeccionEstudio />
        <SeccionContacto />
      </main>
      <PieFijo />
    </div>
  );
}

export default PaginaPrincipal;