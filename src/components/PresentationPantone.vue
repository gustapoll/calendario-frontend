<template>
  <div class="presentation">
    <p>O Pantone político é um projeto que joga luz (e cor) ao apocalipse político e pandêmico de 2020. Dez cards diários, com as notícias “de verdade” que tiveram mais engajamento no Twitter, são publicados em tempo real. 24h X 7 dias + Link da notícia. No Instagram: <a href="https://instagram.com/pantonepolitico" target="_blank" rel="noopener noreferer">@pantonepolitico</a></p>
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
