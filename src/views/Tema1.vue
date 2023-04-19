<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Riesgo de desastres

    .bloque-texto-g.color-secundario.background-tema1.p-3.p-sm-4.p-md-5(data-aos="fade-up")
      .row.align-items-center
        .col-lg-5
          figure
            img(src="@/assets/curso/temas/tema1/tema1-img-01-1.svg")
        .col-lg-7  
          .tema-1-txt1
            p.mb-3 Derivado de los diversos desastres ocurridos en Colombia durante el siglo pasado, se constituye y estructura el Sistema nacional para la prevención y atención de desastres – SNPAD, mediante la Ley 46 de 1988, sistema que se instituyó como una organización interinstitucional formal y descentralizada territorialmente cuyo propósito principal se basó en darle un enfoque prevencionista a la gestión del riesgo de desastres. 
            p.mb-0 La creación del SNPAD permitió el reconocimiento del carácter social de los desastres, gracias a esto el país se posicionó como unos de los pioneros en América Latina en instaurar una política pública para abordar integralmente estas situaciones de forma innovadora, multisectorial e interdisciplinaria.

    p.mt-3 Como instrumento guía se adopta la Política Nacional de Gestión del Riesgo de Desastres - PNGRD mediante la Ley 523 de 2012, de igual manera se dispone de organismos de gestión y control como el Sistema Nacional de Gestión del Riesgo de Desastres de Colombia (Unidad Nacional de Gestión del Riesgo de Desastres - UNGRD, 2013).

    .slyderB_bg_01.px-5.py-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="01")
              p.ps-1.mb-3 Como consecuencia de esta materialización del riesgo, durante el periodo pasado se renueva y armoniza la Política nacional, de acuerdo a parámetros consagrados en la Constitución 1991 como:
              ul.ps-1
                li
                  i.fas.fa-circle.fa-xs
                  |  Descentralización.
                li
                  i.fas.fa-circle.fa-xs
                  |  Subsidiariedad.
                li
                  i.fas.fa-circle.fa-xs
                  |  Concurrencia.
                li
                  i.fas.fa-circle.fa-xs
                  |  Complementariedad institucional.                
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-03.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="02")
              p.ps-1.mb-0 La gestión del riesgo es un proceso de construcción social anudado a procesos naturales, es decir, el crecimiento poblacional desmedido, desordenado y vulnerable combinado con el avanzado deterioro ambiental, crea y potencia condiciones de riesgo, que dan como resultado la ampliación de los daños y pérdidas en elementos expuestos de diferentes partes del país, como también genera que la población se asiente en zonas de riesgo.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-04.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="03")
              p.ps-1.mb-0 Al ser un constructo social, se fundamenta en problemáticas como: pobreza, desigualdad, desempleo, violencia, desplazamiento, entre otros; las cuales ocasionan una planificación territorial desordenada, que exacerba las condiciones de riesgo, aumentando la probabilidad de la materialización de consecuencias debido a un evento peligroso. 
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-05.svg')

    .row.justify-content-around.aling-items-center.mt-5.mb-5
      .col-11
        .bloque-texto-g.tam-bloque-g.color-secundario.p-3.p-sm-1.p-md-5    
          .bloque-texto-g__img.bloque-img-tema1(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-06.svg')})`}"
          )(data-aos="fade-up")
          .bloque-texto-g__texto.bloque-texto-tema1.p-2
            p Como se ha mencionado anteriormente la Gestión Integral del Riesgo de Desastres tiene como principal objetivo contribuir con el desarrollo seguro y sostenible del país, garantizando el bienestar y seguridad de la población, a través del entendimiento y fortalecimiento de las capacidades institucionales de los actores gubernamentales y comunitarios. <br><br>
            p Esta identificación, control y seguimiento permite, a través de los componentes del proceso de gestión para la reducción del riesgo, generar medidas correctivas, prospectivas y de ser necesario, compensatorias (Unidad Nacional para la Gestión del Riesgo de Desastres -UNGRD-, 2019).

    .row.mt-5
      p A continuación, se presenta de manera esquemática, el proceso sobre la gestión del riesgo:
    
    .row.justify-content-around.align-items-center
      .col-12
        img(src="@/assets/curso/temas/tema1/img1.svg")  


    img(src="@/assets/curso/temas/tema1/tema1-img-decorativa-01.svg").tema1-decorativa-01
    img(src="@/assets/curso/temas/tema1/tema1-img-decorativa-02.svg").tema1-decorativa-02

    p.mt-5.mb-0 Para comprender la gestión del riesgo de desastres, es necesario entender los siguientes conceptos básicos:
    p #[i Fuente: Unidad nacional para la gestión del riesgo de desastres (2015).]

    SlyderF(columnas="col-lg-6 col-xl-4").index-dos
      .tarjeta.color--secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-img-08.svg' alt='AvatarTop')
        h2.text-center Riesgo de desastre
        p.text-center Es la combinación entre una o varias amenazas (evento natural, tecnológico, antrópico o socio natural peligroso) y la vulnerabilidad de los elementos expuestos.

      .tarjeta.color--secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-img-09.svg' alt='AvatarTop')
        h2.text-center Amenaza
        p.text-center Peligro potencial debido a la materialización de un evento peligroso con magnitud severa, que pueda ocasionar daños y pérdidas de vidas humanos o bienes, infraestructura, medios de subsistencia y recursos naturales.

      .tarjeta.color--secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-img-10.svg' alt='AvatarTop')
        h2.text-center Vulnerabilidad
        p.text-center Susceptibilidad en términos estructurales, financieros, sociales, ambientales o institucionales de una población, de ser afectada por la materialización de un desastre.

      .tarjeta.color--secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/tema1-img-11.svg' alt='AvatarTop')
        h2.text-center Exposición
        p.text-center Edificaciones, poblaciones o activos humanos ubicados en zonas de riesgo.

    p.mt-5 Colombia, debido a su ubicación sobre placas tectónicas y en zona ecuatorial, posee ciertas características geográficas, topográficas, hidro climatológicas y geológicas específicas.
    
    .clr-paleGray
      .row.justify-content-around.align-items-center
        .col-11
          SlyderB.mb-5.mt-5.color-hover(:datos="datosSlyder")    
    
    .row.mt-5
      p Si no se crean medidas que promuevan la reducción del riesgo, se pueden producir impactos en la reducción del riesgo. Fuente: Unidad nacional para la gestión del riesgo de desastres, (2015).

    .clr.background-img-tema1-2.p-4.mt-4.mb-5
      .row.tam-row
        .col-12
          .crd.crd--avatarHorizontal.crd--1.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema1/tema1-img-16.svg", alt="alt").img100
              .col
                p #[b La vida.]
          .crd.crd--avatarHorizontal.crd--2.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema1/tema1-img-17.svg", alt="alt").img100
              .col
                p #[b La salud.]                
          .crd.crd--avatarHorizontal.crd--1.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema1/tema1-img-18.svg", alt="alt").img100
              .col
                p #[b El empleo.]
          .crd.crd--avatarHorizontal.crd--2.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema1/tema1-img-19.svg", alt="alt").img100
              .col
                p #[b Los bienes, muebles e inmuebles privados y colectivos (colegios, vías, centros de salud, entre otros).]
          .crd.crd--avatarHorizontal.crd--1.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema1/tema1-img-20.svg", alt="alt").img100
              .col
                p #[b Los medios de sustento (cosechas, semovientes, entre otros).]
          .crd.crd--avatarHorizontal.crd--2.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema1/tema1-img-21.svg", alt="alt").img100
              .col
                p #[b La capacidad productiva del territorio.]
      
      img(src="@/assets/curso/temas/tema1/tema1-img-decorativa-03.svg").tema1-decorativa-03
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido.mt-4
      h2 1.1  Técnicas de manejo y evaluación del riesgo    

    img(src="@/assets/curso/temas/tema1/tema1-img-decorativa-04.svg").tema1-decorativa-04

    p.mt-4.mb-5 El riesgo puede ser evaluado y manejado a partir de dos enfoques: retrospectivo y prospectivo.      
    
    .row.background-img-tema1-3
      .col-lg-4.order-2.order-lg-1.mb-4.mb-lg-0(data-aos="zoom-out-left")
        figure
          img(src="@/assets/curso/temas/tema1/tema1-img-23.svg", alt="alt", style="width:450px;").m-auto
      .col-lg-8.order-1.order-lg-2
        TabsA.color-acento-botones.tam-vertical.mb-5        
          .tarjeta.clr-paleYellow.tam-activa.p-4(titulo="Enfoque retrospectivo")
            h4 Enfoque retrospectivo
            p El enfoque retrospectivo se encarga de proporcionar un análisis de riesgo en función de eventos históricos, pero al ser esta información poca o nula, no aporta suficiente para la correcta cuantificación y gestión del riesgo. Debido a esto, el enfoque prospectivo proporciona una base sólida para la evaluación del riesgo, ya que diseña modelos probabilísticos y tiene en cuenta la información existente de eventos pasados sin depender directamente de esta. 
          .tarjeta.clr-paleYellow.p-4(titulo="Enfoque prospectivo")
            h4 Enfoque prospectivo
            p En enfoque prospectivo se ejecuta mediante modelos probabilísticos creados con base en registros verídicos de acontecimientos anteriores, para llevar a cabo una evaluación integral de la gestión del riesgo, se consideran tres elementos fundamentales, los cuales no es posible definir sin tomar en cuenta los otros dos: amenaza, vulnerabilidad y grado de exposición.            
          .tarjeta.clr-paleYellow.p-4(titulo="Distribución de probabilidad de la <br/> amenaza y la pérdida")
            h4 Distribución de probabilidad de la amenaza y la pérdida             
            p La evaluación integral de la gestión del riesgo, debe realizarse mediante la integración de la distribución de la probabilidad de los componentes del riesgo, amenaza y pérdida. En los cuales, el método se fundamenta en el análisis y evaluación de los daños o pérdidas en los elementos expuestos en el transcurso de los escenarios de la amenaza, para posteriormente, llevar a cabo una integración probabilística del resultante, a través de la identificación de factores, como la frecuencia en la que ocurren dichos escenarios.

    p.mt-4.mb-4 El modelo probabilístico del enfoque prospectivo se instituye mediante cuatro módulos principales (Unidad nacional para la gestión del riesgo de desastres -UNGRD-, 2019).

    .row.justify-content-around.align-items-center
      .col-11  
        .row.justify-content-center.mb-3
          .col-lg-6.position-relative
            .crd.crd--avatarHorizontal1.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/tema1/tema1-img-24.svg", alt="alt").img100(data-aos="flip-up")
                .col
                  h5 Módulo 1
                  p Evaluación de la amenaza representados en un catálogo de eventos estocásticos.
          .col-lg-6.position-relative
            .crd.crd--avatarHorizontal1.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/tema1/tema1-img-25.svg", alt="alt").img100(data-aos="flip-up")
                .col
                  h5 Módulo 2
                  p Identificación y caracterización de los elementos expuestos.

        .row.justify-content-center.mb-3
          .col-lg-6.position-relative
            .crd.crd--avatarHorizontal1.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/tema1/tema1-img-26.svg", alt="alt").img100(data-aos="flip-up")
                .col
                  h5 Módulo 3
                  p Definición de la vulnerabilidad específica para cada amenaza.
          .col-lg-6.position-relative
            .crd.crd--avatarHorizontal1.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/tema1/tema1-img-27.svg", alt="alt").img100(data-aos="flip-up")
                .col
                  h5 Módulo 4
                  p Cálculo del riesgo para integración de daños para estimación de pérdidas.
    
    .row.mt-5
      p La gestión para el cálculo del riesgo, debe tener como base la investigación y análisis de los acontecimientos históricos que representen o asemejen la dinámica actual de los eventos, que posiblemente generen afectación sobre elementos expuestos el día de mañana en caso de un desastre. Los resultados en cuanto a cálculo de pérdidas son el principal insumo para crear la función de densidad que proporciona el panorama completo del riesgo (Unidad nacional para la gestión del riesgo de desastres -UNGRD-, 2019). (Unidad nacional de gestión de riesgo de desastres. (s.f)). 
    
    .clr.background-img-tema1-2.p-4.mt-4.mb-5
      img(src="@/assets/curso/temas/tema1/tema1-img-28.svg", alt="alt").img100
    
    p.mb-4 Es indispensable al hablar de riesgos reconocer la evaluación integral del mismo. 

    .slyderB_bg_02.px-5.py-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="01")
              p.texto-slyder.ps-1.mb-1 A partir de la mirada del desarrollo, es posible ejecutar la evaluación del riesgo, ya que permite la identificación de componentes latentes del mismo, como los elementos expuestos y las consecuencias que pesan sobre estos, es decir los daños potenciales, catalogados como riesgo estructural o físico, que de no realizarse una adecuada gestión, se convierte en amplificador del mismo, porque a pesar de no depender directamente de la amenaza, posiblemente llegan a incidir negativamente en las condiciones existentes, al no  contar con capacidad de respuesta, recuperación y rehabilitación adecuada.                
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-29.svg')
        .row.justify-content-center.my-lg-4
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="02")
              p.texto-slyder.ps-1.mb-1 A nivel global y nacional, se cuenta con la implementación de estos modelos probabilísticos en diversas ciudades, obteniendo como fruto, la construcción del indicador (RI), , el cual evalúa, compara y comunica el riesgo de manera eficiente, permitiendo la promoción de medidas eficaces en las diferentes dimensiones de la vulnerabilidad. Con este tipo de herramientas es posible entender y comunicar de manera simple un sistema complejo.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-30.svg')
    
    .row.mt-5
      p En la imagen se evidencia como la gestión del riesgo es un proceso permanente y continuo entre la vulnerabilidad y la amenaza, un proceso que debe ser articulado con los instrumentos de planificación territorial, contribuyendo al desarrollo social y económico de la localidad. De igual manera es fundamental la articulación de la gestión del riesgo a nivel nacional, departamental y municipal (Unidad nacional para la gestión del riesgo de desastres -UNGRD-, 2019). (Unidad nacional de gestión de riesgo de desastres. (s.f)). 
    
    .clr.background-img-tema1-2.p-4.mt-4.mb-5
      figure
        img(src='@/assets/curso/temas/tema1/tema1-img-31.svg')    
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido.mt-4
      h2 1.2  Métodos de control

    p.mt-4.mb-4 Como se explicó anteriormente, la gestión del riesgo, es un proceso social que inicia con la construcción de los escenarios de estos, a los que está expuesta una comunidad, y continúa con la creación, análisis, implementación y control de las medidas para minimizar cada uno de estos factores al menos porcentaje posible.
    .clr-img-slyder1.mb-5
      .row.justify-content-around.align-items-center
        .col-12.p-4
          SlyderB.mb-5.mt-5.color-hover(:datos="datosSlyder2")

    
    .row.justify-content-around.align-items-center.mt-5.mb-5
      img(src="@/assets/curso/temas/tema1/tema1-img-decorativa-05.svg").tema1-decorativa-05.index-dos
      .col-lg-7
        .cajon.color-acento_contenido.p-4
          p Intervenir el riesgo, es el tratamiento mediante el cual se modifica de manera intencional las características de un fenómeno, con el fin de reducir la amenaza que representa o modificar las características de un elemento expuesto, lo anterior con el propósito de reducir su vulnerabilidad que se pueda presentar en el territorio específico. 

    p.mb-4.mt-4 La reducción del riesgo se logra con acciones que lo mitigan o lo previenen. Estas medidas se adoptan para reducir la amenaza, la exposición y disminuir la vulnerabilidad de las personas, los medios de subsistencia, los bienes, la infraestructura y los recursos ambientales; para evitar o minimizar los daños y las pérdidas, en caso de producirse los eventos físicos peligrosos. La reducción del riesgo la componen (Unidad nacional para la gestión del riesgo de desastres, 2013): 
    
    img(src="@/assets/curso/temas/tema1/tema1-img-decorativa-06.svg").tema1-decorativa-06

    .row.justify-content-around.align-items-center
      .col-lg-11
        .row.justify-content-around.align-items-center
          .col-lg-7   
            .row.align-items-center
              .crd.crd--avatarHorizontal2.crd--3.py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/tema1/tema1-img-36.svg", alt="alt").img100(data-aos="fade-down-left")
                  .col
                    p.margin-4-5.mb-0 #[b La intervención correctiva del riesgo.]
            .row.align-items-center
              .crd.crd--avatarHorizontal2.crd--3.py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/tema1/tema1-img-37.svg", alt="alt").img100(data-aos="fade-down-left")
                  .col
                    p.margin-4-5.mb-0 #[b La protección financiera de los riesgos.]                
            .row.align-items-center                
              .crd.crd--avatarHorizontal2.crd--3.py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/tema1/tema1-img-38.svg", alt="alt").img100(data-aos="fade-down-left")
                  .col
                    p.mb-0 #[b La intervención prospectiva de un posible riesgo.]
            .row.align-items-center                
              .crd.crd--avatarHorizontal2.crd--3.py-4
                .row.align-items-center
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/tema1/tema1-img-39.svg", alt="alt").img100(data-aos="fade-down-left")
                  .col
                    p.mb-0 #[b Gestión sectorial y comunitaria.]
          .col-lg-5
            figure
              img(src="@/assets/curso/temas/tema1/tema1-img-40.svg", alt="alt")

    .row.mt-5.mb-5
      .col-lg-2
        img(src="@/assets/curso/temas/tema1/tema1-img-41.svg", alt="alt")

    .row.mt-5
      p A continuación, observe el siguiente video, para profundizar las acciones de Intervención del Riesgo de Desastres:
    
    .row.mb-5
      figure.mt-5
        .video
         iframe(width="560" height="315" src="https://www.youtube.com/embed/LAAJ0rkEyac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-around.aling-items-center.mt-5.mb-5
      .col-11
        .bloque-texto-g.color-primario.p-3.p-sm-1.p-md-5    
          .bloque-texto-g__img.bloque-img-tema1-2(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-42.svg')})`}"
          )
          .bloque-texto-g__texto.bloque-texto-tema4.p-4
            p.mb-0 El propósito de la protección financiera es aumentar el nivel de resiliencia de las comunidades y sus territorios a través de procesos de planificación del desarrollo sostenible, es decir, diseñar y mantener instrumentos financieros para subsanar cualquier pérdida o daño (humano o material) y lograr una recuperación, total o parcial del territorio (Unidad nacional para la gestión del riesgo de desastres, 2013).
          
    .row.mt-5
      p Ante la incidencia de un evento peligroso, la finalidad de la protección financiera, es destinar los recursos necesarios, en el momento oportuno, para quien lo requiera, es decir, mediante un enfoque prospectivo planificar y calcular los costos generados por la posible materialización de un evento peligroso. Así mismo, fortalecer económicamente la capacidad de respuesta. 
    
    .clr-img-tarjetas1
      .row.justify-content-around.align-items-center
        .col-lg-10
          p.mb-5 Ejemplos de protección financiera: 

      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.color_secundario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/tema1-img-44.svg' alt='AvatarTop')
          p.text-center #[b Seguro de vida que evita dejar desamparada la familia.]           

        .tarjeta.color_secundario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/tema1-img-45.svg' alt='AvatarTop')
          p.text-center #[b Seguros todo riesgo, para evitar perder el patrimonio de toda la vida, por ejemplo, la vivienda, y poder adquirir una nueva.]

        .tarjeta.color_secundario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/tema1-img-46.svg' alt='AvatarTop')
          p.text-center #[b Seguro de cosechas.]

        .tarjeta.color_secundario.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/tema1-img-47.svg' alt='AvatarTop')
          p.text-center #[b Seguros que amparan deudas, por ejemplo, el que ampara un crédito hipotecario contra sismos. En este caso si la casa es derrumbada, el seguro cubre la deuda pendiente con el banco, aunque no repone lo necesario para adquirir otra casa]

    p.mt-5 Las medidas de reducción del riesgo, cuentan con herramientas de intervención como la gestión sectorial y comunitaria, cuya finalidad es incorporar en los instrumentos de ordenamiento territorial, la seguridad sostenible de la población (Unidad nacional para la gestión del riesgo de desastres, 2022). Dentro de las líneas de acción de gestión sectorial se pueden encontrar:       

    TabsC.color-acento-botones.tabs-c-1.mt-5
      .py-3.py-md-4(titulo="Generación de insumos para promover la reducción del riesgo")
        .row.justify-content-center.margin-l-r
          .col-lg-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-48.svg', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
            p.margin-l-r.mb-2.mt-4 Elaboración de instrumentos de planificación que permitan, a nivel nacional, regional y local, la incorporación de los procesos de gestión del riesgo, instrumentos que tienen impactos en los sectores público, privado y comunitario.
            p.margin-l-r Otro de los insumos fundamentales para la gestión del riesgo, es la contemplación de la inclusividad, es decir, la incorporación de la participación de los actores comunitarios en los procesos de la gestión, como reubicación y reasentamiento. 

      .py-3.py-md-4(titulo="Promoción de la intervención correctiva y prospectiva del riesgo a nivel nacional y territorial")
        .row.justify-content-center.margin-l-r
          .col-lg-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-49.svg', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
            p.mt-4 Espacios de creación de conocimiento a nivel nacional y regional, que tengan como objetivo promover el análisis y gestión del riesgo de desastre.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        texto:
          'La ubicación espacio geográfico del país, conlleva a la exposición del territorio a diversas amenazas naturales, que, sumado a la planificación y ordenamiento territorial deficiente, generan escenarios de riesgo, que al materializarse pueden desencadenar daños y pérdidas que podrían comprometer la estabilidad económica, fiscal y social del país.',
        imagen: require('@/assets/curso/temas/tema1/tema1-img-12.svg'),
      },
      {
        texto:
          'Las posibles afectaciones, consecuentes de la materialización de un evento peligroso, se encuentran ligados a la intensidad y frecuencia de las amenazas a las cuales una comunidad llega a estar expuesta, así mismo está ligado a la vulnerabilidad de esta población. Por ello, el identificar, conocer y analizar las condiciones de amenaza en el espacio geográfico y, a la que están o estarán sometidas las comunidades, e intervenir las causas de vulnerabilidad permiten reducir el riesgo y de este modo evitar el desastre.',
        imagen: require('@/assets/curso/temas/tema1/tema1-img-13.svg'),
      },
      {
        texto:
          'Cabe resaltar, que la intervención de amenazas, está condicionada por el tipo de estas, es decir, no es posible corregir aquellas amenazas cuya causa es exclusivamente por las dinámicas naturales del planeta, como lo son: la actividad volcánica, los sismos, los huracanes, los tsunamis y algunos otros eventos similares.',
        imagen: require('@/assets/curso/temas/tema1/tema1-img-14.svg'),
      },
    ],
    datosSlyder2: [
      {
        texto:
          'El procedimiento general para realizar una intervención sobre un riesgo, es identificar y conocer su procedencia, de acuerdo a las amenazas presentes a nivel espacial. Es necesario también, determinar el origen de las dimensiones de vulnerabilidad y hacer un paralelo con cada amenaza encontrada, con este procedimiento, para aquellos eventos que se originan por causas socio-naturales o antrópicas, debido a la alta incidencia del ser humano sobre ellas. ',
        imagen: require('@/assets/curso/temas/tema1/tema1-img-33.svg'),
      },
      {
        texto:
          'La dinámica ambiental del mundo lleva consigo la aparición de diversos fenómenos naturales, así mismo, la humanidad en el desarrollo normal de la vida propicia la aparición de condiciones amenazantes para su bienestar dado el grado de vulnerabilidad de la población, es por esto que se desarrollan las diferentes medidas y acciones enfocadas a la intervención y reducción del riesgo, con miras a un entorno más seguro.',
        imagen: require('@/assets/curso/temas/tema1/tema1-img-34.svg'),
      },
      {
        texto:
          'Como principales acciones que permiten reducir el riesgo, están la intervención correctiva sobre las amenazas ocasionadas por un evento peligroso y, disminuir el grado de vulnerabilidad de las poblaciones.  ',
        imagen: require('@/assets/curso/temas/tema1/tema1-img-35.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
