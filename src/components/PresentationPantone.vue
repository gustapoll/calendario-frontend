<template>
  <div class="presentation">
    <p>O Pantone político é um projeto que joga luz (e cor) ao apocalipse político e pandêmico desde 2020 e busca combater as fake news disseminadas pelas redes bolsonaristas informando a população sobre a situação da Covid-19 no Brasil. O site divulga, 24hX7dias, dez cards com as dez notícias “de verdade” que tiveram mais engajamento no Twitter.</p>
  </div>
</template>

<script>
export default {
  name: 'PresentationPantone'
}
</script>
<style lang="scss" scoped>
  .presentation p {
    font-size: $font-20;
  }

  .presentation p a {
    text-decoration: underline;
    color: #000;
  }

  @media screen and (max-width: 48rem) {
    .presentation p {
      font-size: $font-18;
    }
  }
</style>
