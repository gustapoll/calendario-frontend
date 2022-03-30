<template>
  <div class="presentation">
    <p>Visualize as principais imagens-mensagens dissidentes, editadas a partir de uma seleção de hashtags do Instagram. Acompanhe os principais acontecimentos sociopolíticos no Brasil desde 1º de janeiro de 2019 por meio de narrativas ativistas.</p>
  </div>
</template>

<script>
export default {
  name: 'Presentation'
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
