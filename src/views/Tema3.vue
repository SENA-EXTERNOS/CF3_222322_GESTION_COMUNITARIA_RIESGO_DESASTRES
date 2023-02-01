<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Respuesta comunitaria a emergencias y desastres

    .bloque-texto-g.color-secundario.background-tema3.p-3.p-sm-4.p-md-5(data-aos="fade-up")
      .row.align-items-center
        .col-lg-5
          figure
            img(src="@/assets/curso/temas/tema3/tema3-img-01-1.svg").img-tema3-1
        .col-lg-7  
          .tema-3.txt1
            p.mb-5 Las comunidades, en cualquier parte del mundo, pueden vivir en un momento en particular, alguna situación que altere la vida cotidiana debido a la materialización o probabilidad de ocurrencia de un evento adverso de índole natural o antropogénico. Sin embargo, cuando se han adelantado acciones que promueven una Gestión del riesgo integral, las comunidades y el Estado, pueden estar en condiciones adecuadas que permiten la anticipación de muchas situaciones de emergencia.

    .clr.background-img-tema3-1.p-4.mt-4.mb-5
      .row
        .col-lg-6  
          p.mt-3.mb-4 Una emergencia requiere de la atención inmediata y la respuesta de las instituciones (nacionales, departamentales y municipales), los medios de comunicación y la comunidad en general.
      
      img(src="@/assets/curso/temas/tema3/tema3-img-03.svg")

      p.mt-3.mb-4 Fuente: (Unidad nacional de gestión de riesgo de desastres. (s.f)).       

    p.mb-3 El desastre es la consecuencia derivada de la manifestación de uno o varios eventos naturales o antropogénicos.

    .slyderB_bg_04.px-5.py-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-img-05.svg')        
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="01")
              p.ps-4.mb-0 Estas manifestaciones al tener contacto con alguna condición propicia de vulnerabilidad en las comunidades, los bienes e inmuebles, los medios de subsistencia, la prestación de servicios o los recursos naturales, genera daños o pérdidas de carácter material, económico, ambiental hasta de vidas humanas, produciendo alteraciones graves en las condiciones normales de funcionamiento de las comunidades y el desarrollo sostenible del territorio. Por ello, el Estado y el Sistema nacional de gestión del riesgo de desastres, ejecutan acciones de respuesta a la emergencia, rehabilitación y reconstrucción.
        .row.justify-content-center.my-lg-4
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-img-06.svg')        
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="02")
              p.texto-slyder2.ps-4.mb-0 Es necesario aclarar e interiorizar que las situaciones de emergencia no siempre dan como resultado la manifestación de un desastre, pero la manifestación de un desastre siempre es resultado de una situación de emergencia. 
        .row.justify-content-center.my-lg-4
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-img-07.svg')        
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="03")
              p.texto-slyder2.ps-4.mb-0 En términos de preparación para la respuesta a emergencias, se debe contar con la intervención institucional y del sector privado y comunitario. Esta preparación debe fundamentarse en el correcto entendimiento de los procesos de gestión del riesgo y la ejecución y seguimiento de los instrumentos de planificación.
        .row.justify-content-center.my-lg-4
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-img-08.svg')        
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="04")
              p.texto-slyder2.ps-4.mb-0 Estipulado en la Política nacional de gestión del riesgo de desastre – PNGRD, se encuentra que, la preparación para la respuesta a emergencias, debe regirse por medidas de direccionamiento, optimización y capacitación como sistemas de alerta, centro de reserva y albergues, entre otros, lo anterior con el fin de que los servicios básicos de respuesta sean de fácil de acceso. 
    .clr.background-img-tema3-2.p-4.mt-4.mb-5
      .row
        .col-lg-12
          p.mt-3.mb-4 La preparación para la respuesta a emergencias, suministra a las entidades territoriales, diversos instrumentos previstos, planificados y concertados con anterioridad que permitan responder oportunamente a las emergencias que se puedan materializar.
          
      img(src="@/assets/curso/temas/tema3/tema3-img-10.png")

      p.margin-left.mt-3.mb-4 Fuente:  (Unidad nacional de gestión de riesgo de desastres. (s.f)).  

    p.mb-4 El Sistema nacional de gestión del riesgo de desastres - SNGRD es la hoja de ruta para la institucionalidad, en el marco de la gestión integral del riesgo de desastres y la Estrategia para la respuesta de emergencias - ERE.

    .clr-img-slyder3.mb-5
      .row.justify-content-around.align-items-center
        .col-11
          SlyderB.mb-5.mt-5.margin-l-r.color-hover(:datos="datosSlyder")   

    .row.justify-content-around.aling-items-center.mt-5.mb-5
      .col-11
        .bloque-texto-g.color-secundario.p-3.p-sm-1.p-md-5    
          .bloque-texto-g__img.bloque-texto-g__img-tema3-1(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-img-14.svg')})`}"
          )
          .bloque-texto-g__texto.bloque-texto.p-4
            p.mb-0 En la gestión del riesgo, un pilar fundamental para el desarrollo territorial es su articulación efectiva a través de los diferentes instrumentos definidos para la planificación (imagen 65). De esta manera, para los diferentes niveles de gobierno, la ERE, junto con el plan de gestión del riesgo de desastres, deberá estar articulada con los planes de desarrollo y de ordenamiento territorial. Así mismo, los planes de emergencia de los diferentes sectores, entidades y comunidades se constituyen también como insumos importantes para la formulación y actualización periódica de la ERE.
    
    .background-puntos-tema3-1.p-4.mt-4.mb-5 
      .row.justify-content-around.aling-items-center.mt-5
        .col-10
          ImagenInfografica.color-primario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/tema3-img-16.svg', alt='Texto que describa la imagen')

            .tarjeta.color-acento-botones.p-3(x="29%" y="5%" numero="+")
              .h3.text-center.mb-2 PD
              p.text-center #[b Plan de Desarrollo.]

            .tarjeta.color-acento-botones.p-3(x="99%" y="51%" numero="+")
              .h3.text-center.mb-2 POT
              p.text-center #[b Plan de ordenamiento territorial.]

            .tarjeta.color-acento-botones.p-3(x="77%" y="8%" numero="+")
              .h3.text-center.mb-2 PGRD
              p.text-center #[b Plan de gestión de riesgo de desastres.]
            
            .tarjeta.color-acento-botones.p-3(x="49%" y="26%" numero="+")
              .h3.text-center.mb-2 ERE
              p.text-center #[b Estrategia para la respuesta a emergencias.]
            
            .tarjeta.color-acento-botones.p-3(x="5%" y="66%" numero="+")
              .h2.text-center.mb-2 Ps
              p.text-center #[b Planes sectoriales de emergencia.]
            
            .tarjeta.color-acento-botones.p-3(x="28%" y="90%" numero="+")
              .h2.text-center.mb-2 Pi
              p.text-center #[b Planes institucionales de emergencias.]
            
            .tarjeta.color-acento-botones.p-3(x="66%" y="94%" numero="+")
              .h2.text-center.mb-2 Pc
              p.text-center #[b Planes comunitarios de emergencia.]

      p.mt-3 Fuente: (Unidad nacional de gestión de riesgo de desastres. (s.f)). 

    .background-tema3-2   
      .row.justify-content-around.aling-items-center.mt-5  
        .col-lg-11
          p.mt-4.mb-1 Las autoridades departamentales, distritales y municipales, son las responsables de formular y concertar con sus respectivos consejos de gestión del riesgo, la ERE de su respectiva jurisdicción, en armonía con la estrategia de respuesta nacional. Dentro de los servicios de respuesta se encuentran:

      .row.justify-content-around.aling-items-center.mt-2.mb-2
        .col-11
          .row.justify-content-around.aling-items-center.mt-5.mb-1
            .col-lg-6
              ol.lista-ol--separador
                li
                li 
                  .lista-ol--cuadro__vineta.img-vineta1               
                    p.texto-vineta.mb-0 Accesibilidad y transporte.
                li 
                  .lista-ol--cuadro__vineta.img-vineta2               
                    p.texto-vineta.mb-0 Salud.
                li 
                  .lista-ol--cuadro__vineta.img-vineta3               
                    p.texto-vineta.mb-0 Búsqueda y rescate.
                li 
                  .lista-ol--cuadro__vineta.img-vineta4               
                    p.texto-vineta.mb-0 Extinción de incendios.    
                li 
                  .lista-ol--cuadro__vineta.img-vineta5               
                    p.texto-vineta.mb-0 Manejo de materiales peligrosos.
                li 
                  .lista-ol--cuadro__vineta.img-vineta6               
                    p.texto-vineta.mb-0 Agua potable.        
                li                                           
            .col-lg-6
              img(src="@/assets/curso/temas/tema3/tema3-img-18.svg")
      .row.justify-content-around.aling-items-center.mt-2.mb-1
        .col-11
          .row.justify-content-around.aling-items-center.mt-5.mb-5
            .col-lg-6
              img(src="@/assets/curso/temas/tema3/tema3-img-25.svg") 
            .col-lg-6
              ol.lista-ol--separador
                li
                li 
                  .lista-ol--cuadro__vineta.img-vineta7              
                  p.texto-vineta2.mb-0 Ayuda humanitaria alimentaria y no alimentaria.
                li 
                  .lista-ol--cuadro__vineta.img-vineta8               
                  p.texto-vineta3.mb-0 Alojamientos temporales.
                li 
                  .lista-ol--cuadro__vineta.img-vineta9               
                  p.texto-vineta4.mb-0 Telecomunicaciones.
                li 
                  .lista-ol--cuadro__vineta.img-vineta10               
                  p.texto-vineta4.mb-0 Reencuentro familiar.    
                li 
                  .lista-ol--cuadro__vineta.img-vineta11               
                  p.texto-vineta4.mb-0 Saneamiento básico.
                li 
                  .lista-ol--cuadro__vineta.img-vineta12               
                  p.texto-vineta5.mb-0 Energía y gas.        
                li                                           
      .row.justify-content-around.aling-items-center.mt-2.mb-1
        .col-11
          .row.justify-content-around.aling-items-center.mt-5.mb-5
            .col-lg-6
              ol.lista-ol--separador
                li
                li 
                  .lista-ol--cuadro__vineta.img-vineta13              
                    p.texto-vineta.mb-0 Seguridad y convivencia.
                li 
                  .lista-ol--cuadro__vineta.img-vineta14               
                    p.texto-vineta.mb-0 Información pública.
                li 
                  .lista-ol--cuadro__vineta.img-vineta15               
                    p.texto-vineta.mb-0 Gestión de la información.
                li 
                  .lista-ol--cuadro__vineta.img-vineta16              
                    p.texto-vineta.mb-0 Planeación.    
                li 
                  .lista-ol--cuadro__vineta.img-vineta17               
                    p.texto-vineta.mb-0 Logística de soporte operacional.
                li 
                  .lista-ol--cuadro__vineta.img-vineta18               
                    p.texto-vineta.mb-0 Aspectos jurídicos.    
                li 
                  .lista-ol--cuadro__vineta.img-vineta19               
                    p.texto-vineta.mb-0 Aspectos financieros.                           
                li                                           
            .col-lg-6
              img(src="@/assets/curso/temas/tema3/tema3-img-32.svg")            
      .row
        .col-lg-10
          p.mb-3 Fuente: (Unidad nacional de gestión de riesgo de desastres. (s.f)).                      

    .bloque-texto-g.color-primario.background-tema3-3.p-3.p-sm-4.p-md-5.mt-4
      .row.align-items-center
        .col-lg-5
          img(src="@/assets/curso/temas/tema3/tema3-img-41.svg").img-tema3-2(data-aos="zoom-in-up")
        .col-lg-7  
          .tema-3-txt1
            p.mb-5 La organización para la respuesta se basa en la coordinación más que en la jerarquía y se enfoca en la prestación oportuna de los Servicios de Respuesta y el desempeño efectivo de las Funciones de Soporte. Para ello define niveles de emergencia, actores e instancias de coordinación, una estructura de intervención y pautas para la articulación con los otros niveles de gobierno.

    p.mt-5.mb-3 Para la formulación de la ERE es importante llevar a cabo las siguientes actividades:
    p.mb-3 Fuente: (Unidad nacional de gestión de riesgo de desastres. (s.f)).   

    TabsB.color-acento-botones.mt-5
      .py-4.py-md-5(titulo="Primera actividad" )
        .row
          .col-md-6.mb-4.mb-md-0
            p Tener conformado y activo el Consejo de gestión del riesgo de desastres constituido por resolución o decreto.        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/tema3-img-42.svg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Segunda actividad")
        .row
          .col-md-6
            p Contar con un coordinador, dependencia o entidad coordinadora de gestión del riesgo de desastres en la unidad territorial.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/tema3-img-43.svg', alt='Texto que describa la imagen')            
      .py-4.py-md-5(titulo="Tercera actividad")
        .row
          .col-md-6
            p Tener el plan de gestión del riesgo de desastres formulado y adoptado por decreto.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/tema3-img-44.svg', alt='Texto que describa la imagen')            
      .py-4.py-md-5(titulo="Cuarta actividad")
        .row
          .col-md-6
            p Tener un Sistema de Información creado.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema3/tema3-img-45.svg', alt='Texto que describa la imagen')

    .background-tema3-4.p-4.mt-4.mb-5    
      .row
        .col-lg-11        
          p.mt-4 Luego de desarrolladas estas actividades, se deben seguir los siguientes 10 pasos para la formulación y diseño de la ERE:
      .row.justify-content-around.aling-items-center
        .col-11
          .row.justify-content-around.aling-items-center.mt-3
            .col-lg-7.mt-5
              ol.lista-ol--separador
                li
                li 
                  .lista-ol--cuadro__vineta.color-vineta
                    span 1
                  | #[b Definir metodología y estructura para la elaboración de la ERE.]
                li 
                  .lista-ol--cuadro__vineta.color-vineta
                    span 2
                  | #[b Plantear objetivos de la ERE.]
                li 
                  .lista-ol--cuadro__vineta.color-vineta               
                    span 3
                  | #[b Describir la realidad del territorio.]
                li 
                  .lista-ol--cuadro__vineta.color-vineta              
                    span 4
                  | #[b Determinar los niveles de emergencia.]
                li 
                  .lista-ol--cuadro__vineta.color-vineta              
                    span 5
                  | #[b Identificar los actores para la respuesta.]
                li                                           
            .col-lg-5
              img(src="@/assets/curso/temas/tema3/tema3-img-47.svg")
      .row.justify-content-around.aling-items-center
        .col-11
          .row.justify-content-around.aling-items-center.mt-5.mb-5
            .col-lg-5
              img(src="@/assets/curso/temas/tema3/tema3-img-48.svg") 
            .col-lg-7.mt-5
              ol.lista-ol--separador
                li
                li 
                  .lista-ol--cuadro__vineta.color-vineta              
                    span 6
                  | #[b Definir organigrama funcional y estructura de intervención.]
                li 
                  .lista-ol--cuadro__vineta.color-vineta               
                    span 7
                  | #[b Elaborar protocolos específicos por evento.]
                li 
                  .lista-ol--cuadro__vineta.color-vineta               
                    span 8
                  | #[b Elaborar protocolos de servicios de respuesta y funciones de soporte.]
                li 
                  .lista-ol--cuadro__vineta.color-vineta              
                    span 9
                  | #[b Definir e incluir procedimientos complementarios de la ERE.]
                li 
                  .lista-ol--cuadro__vineta.color-vineta               
                    span 10
                  | #[b Implante la ERE.]     
                li    

    img(src="@/assets/curso/temas/tema3/tema3-img-decorativa-01.svg").tema3-decorativa-01

    .row.justify-content-around.aling-items-center.mt-5
      .col-11
        .cajon.color-acento-contenido.p-4
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
          
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        texto:
          'Esta estrategia compila los aspectos necesarios para ejecutar la respuesta a emergencias, y que esta ejecución sea eficaz y oportuna por parte de las entidades, ya sea de manera individual o colectiva. La ERE se fundamenta como una herramienta que tiene como fin garantizar la actuación de los entes institucionales y la destinación efectiva de los recursos. La ERE tiene como principal propósito optimizar la prestación de los servicios básicos y las funciones de soporte, en caso de un desastre o emergencia.',
        imagen: require('@/assets/curso/temas/tema3/tema3-img-12.svg'),
      },
      {
        texto:
          'Los servicios de respuesta, son todas aquellas acciones a desarrollar para garantizar la atención de los daños o pérdidas ocasionados por un evento peligroso. Ahora bien, las funciones de soporte se centran en las herramientas y actividades administrativas o logísticas para la optimización de las operaciones de respuesta a la emergencia. En ambos casos, los protocolos y procedimientos estipulan las líneas de acción, actores y roles de los integrantes del SNGRD.',
        imagen: require('@/assets/curso/temas/tema3/tema3-img-13.svg'),
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
