export default {
  global: {
    componenteFormativo: 'Riesgo de desastres',
    descripcionCurso:
      'Este componente formativo describe la dinámica del riesgo de desastres, en la cual intervienen componentes como vulnerabilidad y amenaza, y factores como magnitud, e intensidad. Entenderá que el conocimiento del riesgo, proporciona lineamientos para el diseño de acciones, que aporten respuestas cuando se materialice un riesgo para la disminución de intensidad del impacto sobre la comunidad, y el desarrollo sostenible del territorio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Riesgo de desastres',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas de manejo y evaluación del riesgo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Métodos de control',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Subsistema nacional de voluntarios de primera respuesta',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Respuesta comunitaria a emergencias y desastres',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Riesgo de desastres',
      referencia:
        'Unidad nacional para la gestión del riesgo de desastres. (11 de julio de 2019). Marco Estratégico para la Gestión del Riesgo de Desastres',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=Aaifxx8uGac&ab_channel=UNGRDGesti%C3%B3ndelRiesgodeDesastres',
    },
    {
      tema: 'Subsistema nacional de voluntarios de primera respuesta',
      referencia:
        'Ministerio del Interior. (2012). <em>Ley de Voluntariado</em>. ',
      tipo: 'Documento',
      link:
        'https://www.cruzrojacolombiana.org/wp-content/uploads/2019/09/Ley-1505-de-2012.pdf',
    },
    {
      tema: 'Subsistema nacional de voluntarios de primera respuesta',
      referencia:
        'Cruz Roja Colombiana. (2019). Página web institucional. <em>Políticas y normatividad institucional</em>.',
      tipo: 'Página Web',
      link:
        'https://www.cruzrojacolombiana.org/politicas-y-normatividad-institucional/',
    },
    {
      tema: 'Subsistema nacional de voluntarios de primera respuesta',
      referencia: 'Ministerio de Defensa Nacional. (2022). <em>Normativa</em>.',
      tipo: 'Página Web',
      link:
        'https://www.defensacivil.gov.co/transparencia-acceso-informacion-publica/2-normativa',
    },
    {
      tema: 'Respuesta comunitaria a emergencias y desastres',
      referencia:
        'Programa de las Naciones Unidas para el desarrollo - programa de apoyo a la reducción de riesgos de desastres en México. (2015). <em>Guía de organización comunitaria para la respuesta de desastres. Fortalecimiento de Capacidades en la Reducción de Desastres</em>. Mérida, Yucatán, México. ',
      tipo: 'Documento',
      link:
        'https://www.undp.org/es/latin-america/publications/gu%C3%ADa-de-organizaci%C3%B3n-comunitaria-para-la-respuesta-de-desastres-fortalecimiento-de-capacidades-en-la-reducci%C3%B3n-de',
    },
  ],
  glosario: [
    {
      termino: 'Acciones correctivas',
      significado:
        'hacen referencia a disminución del nivel de riesgo existente, esto se logra a través de la implementación de acciones de mitigación y medidas anticipadas.',
    },
    {
      termino: 'Desastre',
      significado:
        'es la consecuencia derivada de la manifestación de uno o varios eventos naturales o antropogénicos.',
    },
    {
      termino: 'Exposición',
      significado:
        'personas, infraestructura, viviendas, sistemas u otros activos humanos tangibles ubicados en zonas de amenaza sujetos, por lo tanto, a pérdidas potenciales.',
    },
    {
      termino: 'Intervenir el riesgo',
      significado:
        'es el tratamiento mediante el cual se modifica de manera intencional las características de un fenómeno, con el fin de reducir la amenaza que representa o modificar las características de un elemento expuesto, lo anterior con el propósito de reducir su vulnerabilidad que se pueda presentar en el territorio específico. ',
    },
    {
      termino: 'Preparación',
      significado:
        'medidas y acciones para organizar oportuna y eficazmente la respuesta y la recuperación (rehabilitación y reconstrucción) con el fin de reducir al mínimo la pérdida de vidas humanas y otros daños.',
    },
    {
      termino: 'Reconstrucción',
      significado:
        'se caracteriza por las acciones que se realizan con el fin de reparar la infraestructura afectada y restaurar el sistema de producción con miras a revitalizar la economía y lograr alcanzar o superar el nivel de desarrollo previo al desastre.',
    },
    {
      termino: 'Rehabilitación',
      significado:
        'periodo de transición en el cual se restablecen los servicios y líneas vitales indispensables para la comunidad.',
    },
    {
      termino: 'Respuesta',
      significado:
        'acciones llevadas a cabo ante un evento adverso y que tienen por objeto salvar vidas, reducir el sufrimiento humano y disminuir pérdidas.',
    },
    {
      termino: 'Servicios de respuesta',
      significado:
        'corresponden a las acciones que deberán desarrollarse para la atención de los daños y pérdidas humanas, materiales, económicas o ambientales que se presentan por efecto de eventos adversos ocurridos.',
    },
    {
      termino: 'Subsistema nacional de voluntarios en primera respuesta',
      significado:
        'es el conjunto de entidades que realizan acciones voluntarias en primera respuesta a nivel nacional, en atención y prevención de desastres, emergencias y eventos antrópicos, el cual hace parte del Sistema nacional para la prevención y atención de desastres.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ayuda Humanitaria; Cruz Roja Colombiana; Cruz Roja Alemana; Cruz Roja Noruega; Cruz Roja Holandesa; Unidad Nacional para la Gestión del Riesgo de Desastres. (2014). Conceptualización en Gestión del Riesgo de Desastres. <em>Proyecto DIPECHO VIII</em>. Norte de Santander, Colombia.',
    },
    {
      referencia:
        'Congreso de la República. (24 de abril de 2012). <em>Ley 1523 de 2012. Colombia</em>.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1523_2012.html',
    },
    {
      referencia:
        'Congreso de la República. (5 de enero de 2012). <em>Ley 1505 de 2012</em>.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1505_2012.html#:~:text=SUBSISTEMA%20NACIONAL%20DE%20VOLUNTARIOS%20EN%20PRIMERA%20RESPUESTA.,desastres%2C%20emergencias%20y%20eventos%20antr%C3%B3picos',
    },
    {
      referencia:
        'Congreso de la República. (24 de abril de 2012). <em>Ley 1523 de 2012. Colombia</em>.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1523_2012.html',
    },
    {
      referencia:
        'Unidad Nacional de Gestión del Riesgo de Desastres (UNGRD). (2013). <em>Plan Nacional de Gestión del Riesgo de Desastres 2013-2025 "Una Estrategia de Desarrollo</em>".',
      link:
        'http://docs.wixstatic.com/ugd/a02d6e_1eff708014424892a113344def36a25c.pdf',
    },
    {
      referencia:
        'Unidad Nacional de Gestión del Riesgo de Desastres (UNGRD). (8 de julio de 2019). <em>Comunidades Unidas en Gestión del Riesgo de Desastres.</em>',
      link:
        'https://www.youtube.com/watch?v=1xdhPbXw404&ab_channel=UNGRDGesti%C3%B3ndelRiesgodeDesastres ',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres - Sistema Nacional de Gestión del Riesgo de Desastres. (2022). <em>Actualización Plan Nacional de Gestión del Riesgo de Desastres "Una estrategia de desarrollo" 2015 - 2030</em>. Colombia. ',
      link:
        'http://portal.gestiondelriesgo.gov.co/Documents/PNGRD/PNGRD-2022-Actualizacion-VF.pdf',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD). (2019). <em>Atlas de Riesgo de Colombia: revelando los desastres latentes</em>. Bogotá, Colombia.',
    },

    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres. (2015). <em>Resumen Ejecutivo - Implementación de los procesos de gestión del riesgo de desastres, para transferir al FNGRD, a nivel nacional</em>. Colombia.',
      link:
        'http://portal.gestiondelriesgo.gov.co/Documents/Proyectos-Inversion/2015/proyecto_implementacion_procesos_gr_2015_2018.pdf',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres. (2018). <em>Guía Metodológica Estrategias Territoriales para la Respuesta a Emergencias</em>. Bogotá, Colombia.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
