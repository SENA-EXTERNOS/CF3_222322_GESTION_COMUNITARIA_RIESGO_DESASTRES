<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p Apreciado aprendiz, bienvenido a este componente formativo, donde aprenderá lo que se refiere a las técnicas de manejo, evaluación y métodos de control del riesgo; en un segundo tema, se hará referencia al subsistema nacional de voluntarios de primera respuesta, y se finalizará con la respuesta comunitaria a emergencias y desastres. 

    p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:


    figure
      img(src="@/assets/curso/portada/intro-img-decorativa-01.svg").intro-decorativa-01

    .row
      figure.mt-5
        .video
         iframe(width="560" height="315" src="https://www.youtube.com/embed/mODFiCwTg44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
