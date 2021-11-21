<template>
  <div class="presentation">
    <p>Acesse as narrativas visuais sobre os principais acontecimentos sociopolíticos do Brasil, a partir de hashtags do Instagram. Selecione a # ou a data e verifique os temas mais ilustrados desde 1º de janeiro de 2019.</p>
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
