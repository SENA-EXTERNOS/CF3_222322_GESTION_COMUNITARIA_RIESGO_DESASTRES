<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Subsistema Nacional de Voluntarios de Primera Respuesta

    p.mb-1 Con el fin de generar procesos de prevención e intervención al riesgo de desastres, surge el Subsistema Nacional de Voluntarios en Primera Respuesta. 

    .slyderB_bg_03.px-5.py-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-02.svg')        
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="01")
              p.texto-slyder2-1.ps-4.mb-3 A nivel nacional, se cuenta con entidades y personas naturales que llevan a cabo medidas en primera respuesta ante la materialización de un desastre, se conoce como Subsistema Nacional de Voluntarios en Primera Respuesta. Este conjunto de voluntarios se encuentra dentro de la estructura del Sistema nacional para prevención y atención de desastres. 
        .row.justify-content-center.my-lg-4
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img-03.svg')        
          .col-lg-6.mb-1.mb-lg-0
            .number(data-number="02")
              p.texto-slyder2-2.ps-3.mb-3 La creación del Subsistema Nacional de Voluntarios en Primera Respuesta, se creó gracias a la Ley 1505 de 2012, o mejor conocida como Ley de voluntario, la cual dentro de su cuerpo estipula cómo se debe manejar el tema nominal y estímulos a sus participantes, entre otras disposiciones en términos de voluntarios en primera respuesta (Congreso de la República, 2012).

    .clr.background-img-tema2-1.p-4.mt-4.mb-5 
      p.mt-5 El Subsistema nacional de voluntarios en primera respuesta está integrado por: 
      .row.justify-content-around.aling-items-center.mt-5
        .col-10
          img(src="@/assets/curso/temas/tema2/tema2-img-05.svg")

    .row.justify-content-around.aling-items-center.mt-5
      .col-11
        .cajon.color-secundario1.p-4
          p Cabe destacar, que, dentro de este marco normativo, un voluntario es considerado como una persona natural que de forma libre y sin remuneración de índole laboral, ofrece su tiempo, trabajo y talento para la construcción del bien común.

    img(src="@/assets/curso/temas/tema2/tema2-img-decorativa-01.svg").tema2-decorativa-01(data-aos="flip-right")

    .background-puntos-tema2-2.p-4.mt-4.mb-5 
      p.mt-5 Dentro de los deberes de los integrantes del Subsistema Nacional de Voluntarios en Primera Respuesta se encuentran:
      .row.justify-content-around.aling-items-center.mt-5
        .col-10
          ImagenInfografica.color-primario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/tema2-img-07.svg', alt='Texto que describa la imagen')

            .tarjeta.color-acento-botones.p-3(x="6%" y="48%" numero="+")
              .h5.mb-2 Deber 1
              p Crear o fortalecer grupos élites o de avanzada, integrados por aquellos voluntarios operativos con capacidad de intervención inmediata en una emergencia o desastre.

            .tarjeta.color-acento-botones.p-3(x="21%" y="48%" numero="+")
              .h5.mb-2 Deber 2
              p El Gobierno Nacional a través del Sistema Nacional de Voluntarios (reglamentado por el Decreto 4290 de 2005) facilitará que sus integrantes tengan entrenamiento adecuado y actualizado para la prevención y atención de desastres y emergencias.

            .tarjeta.color-acento-botones.p-3(x="35%" y="48%" numero="+")
              .h5.mb-2 Deber 3
              p Estar entrenados en primeros auxilios y primera respuesta médica.
            
            .tarjeta.color-acento-botones.p-3(x="50%" y="48%" numero="+")
              .h5.mb-2 Deber 4
              p Contar con competencias técnicas, humanas y conceptuales que deben ser evaluadas cada 2 años.
            
            .tarjeta.color-acento-botones.p-3(x="64%" y="48%" numero="+")
              .h5.mb-2 Deber 5
              p Estar acreditados por las instituciones pertenecientes al Subsistema Nacional de Voluntarios en Primera Respuesta.
            
            .tarjeta.color-acento-botones.p-3(x="78%" y="48%" numero="+")
              .h5.mb-2 Deber 6
              p Apoyar a cualquier integrante del Cuerpo de Primera Respuesta, que previamente se haya hecho presente ante cualquier emergencia, desastre y evento antrópico.
            
            .tarjeta.color-acento-botones.p-3(x="93%" y="48%" numero="+")
              .h5.mb-2 Deber 7
              p Crear y actualizar permanentemente una base de datos única, en la cual se consoliden los datos de los voluntarios activos y acreditados.

    .row.justify-content-around.aling-items-center.mt-5.mb-5
      .col-11
        .bloque-texto-g.tam-bloque-g.bloque-color-lgh-rose.p-3.p-sm-1.p-md-5    
          .bloque-texto-g__img.bloque-img-tema2-1(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-img-08.svg')})`}"
          )(data-aos="zoom-in")
          .bloque-texto-g__texto.bloque-texto-tema2-1.p-4
            p.mb-0 Las organizaciones voluntarias, representan un gran aporte para la construcción de tejido social y son aquellas apalancadoras de recursos y esenciales para la formulación e implementación de políticas públicas, promoción de campañas de formación de índole social, cívica, humanitaria y de derechos humanos e impulsoras del cumplimiento de los Objetivos de Desarrollo Sostenible ODS.
    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
