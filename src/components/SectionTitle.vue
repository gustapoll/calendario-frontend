<template>
  <div class="section-title">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle'
}
</script>

<style scoped lang="scss">
  .section-title {
    background-color: $black;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0.625rem 0;
    margin-bottom: 1.25rem;

    &:after {
      content: "";
      position: absolute;
      height: 100%;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100vw;
      z-index: -1;
      background-color: $black;
    }

    h2 {
      color: $white;
      margin: 0 0 0 1.25rem;
      font-size: $font-36;
      font-weight: 500;
      text-transform: uppercase;
    }

    .dropdown-group {
      margin: -0.625rem 1.25rem 0 auto;
      display: flex;
      align-self: flex-start;

      .dropdown + .dropdown {
        margin-left: 1.25rem;
      }
    }
  }

  @media screen and (max-width: 53rem) {
    .section-title .dropdown-group {
      order: 4;
      width: 100%;
      margin: 1.25rem 0 0 2.8125rem;
    }

    .section-title .btn-next {
      margin-left: auto;
    }
  }

  @media screen and (max-width: 48rem) {
    .section-title h2 {
      font-size: $font-32;
    }

    .section-title .dropdown-group {
      margin: 0.5rem 0 0 2.625rem;
    }
  }

  @media screen and (max-width: 36rem) {
    .section-title h2 {
      font-size: $font-29;
    }

    .section-title .dropdown-group {
      margin: 0.5rem 0 0 2.5rem;
      display: block;

      .dropdown + .dropdown {
        margin-left: 0;
        margin-top: 0.625rem;
      }
    }
  }
</style>
