export const monolitoDatos = {
  enlacesNavegacion: [
    { etiqueta: '[01] INICIO', destino: '#inicio' },
    { etiqueta: '[02] CÓDIGO', destino: '#principios' },
    { etiqueta: '[03] OBRAS', destino: '#obras' },
    { etiqueta: '[04] FASES', destino: '#proceso' },
    { etiqueta: '[05] DATOS', destino: '#estudio' },
    { etiqueta: '[06] BRIEF', destino: '#contacto' },
  ],
  reglasCodigo: [
    {
      numero: '01 //',
      titulo: 'Verdad Material',
      descripcion:
        'El hormigón visto, el acero sin pintar y la madera cruda muestran exactamente cómo se sostiene el edificio.',
    },
    {
      numero: '02 //',
      titulo: 'Geometría Cruda',
      descripcion:
        'Volúmenes puros, ángulos rectos y voladizos audaces que desafían la gravedad sin disfraces.',
    },
    {
      numero: '03 //',
      titulo: 'Luz Como Material',
      descripcion:
        'Aberturas estratégicas que cortan el bloque sólido y generan sombras dramáticas durante el día.',
    },
    {
      numero: '04 //',
      titulo: 'Cero Ruido',
      descripcion:
        'Eliminamos todo elemento decorativo superfluo para priorizar la durabilidad y la función total.',
    },
  ],
  fasesObra: [
    {
      fase: 'FASE 01',
      titulo: 'Topografía',
      descripcion:
        'Estudio geotécnico del terreno, orientación solar y cargas estructurales.',
      tiempo: 'SEMANAS 1–3',
      destacada: false,
    },
    {
      fase: 'FASE 02',
      titulo: 'Cálculo',
      descripcion:
        'Modelado BIM completo y cálculo de armaduras de acero de alta resistencia.',
      tiempo: 'SEMANAS 4–8',
      destacada: false,
    },
    {
      fase: 'FASE 03',
      titulo: 'Encofrado',
      descripcion:
        'Vertido continuo de hormigón visto con control milimétrico de juntas.',
      tiempo: 'MESES 3–8',
      destacada: false,
    },
    {
      fase: 'FASE 04',
      titulo: 'Entrega',
      descripcion:
        'Pruebas de carga, certificación energética y entrega de llaves.',
      tiempo: 'OBRA LISTA',
      destacada: true,
    },
  ],
  metricasEstudio: [
    { etiqueta: 'Resistencia Hormigón', valor: '50 MPa', oscura: false },
    { etiqueta: 'Premios Nacionales', valor: '14', oscura: true },
    { etiqueta: 'Vida Útil Estimada', valor: '+120 AÑOS', oscura: false },
  ],
};