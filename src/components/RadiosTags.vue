<template>
  <div class="dropdown" v-click-outside="onClickOutside">
    <button class="btn-dropdown" @click="open = !open">{{ selectTag }}</button>
    <div class="dropdown-menu" v-show="open">
      <div class="radio">
        <input type="radio" name="radio-tags" id="radio-tags-full" :value="allTagsTitle" @change="updateTag" :checked="selectTag === allTagsTitle">
        <label for="radio-tags-full">{{ allTagsTitle }}</label>
      </div>
      <div v-for="tag in tags" :key="tag" class="radio">
        <input type="radio" name="radio-tags" :id="'radio-' + tag" :value="tag" @change="updateTag" :checked="tag === selectTag">
        <label :for="'radio-' + tag">{{ tag }}</label>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RadiosTags',
  props: ['tags', 'selectTag', 'allTagsTitle'],
  data () {
    return {
      open: false
    }
  },
  methods: {
    updateTag (event) {
      this.$emit('updateTag', event.target.value)
    },
    onClickOutside (event) {
      this.open = false
    }
  }
}
</script>

<style scoped lang="scss">
  .dropdown {
    position: relative;
  }

  .btn-dropdown {
    background-color: $white;
    border: solid 1px $black;
    border-top: 0;
    border-bottom: 0;
    font-size: $font-14;
    font-weight: 500;
    padding: 0.4375rem 0.625rem;
    width: 230px;
    text-align: left;

    &:focus {
      outline: 0;
    }
  }

  .dropdown-menu {
    border: solid 1px $black;
    border-top: 0;
    position: absolute;
    min-width: 230px;
    background-color: #fff;
    z-index: 9;
    max-height: 50vh;
    overflow-y: scroll;
  }

  .radio {
    position: relative;

    input {
      position: absolute;
      left: 0;
      z-index: -1;
      width: 1rem;
      height: 1.25rem;
      opacity: 0;
    }

    label {
      font-size: $font-14;
      margin-bottom: 0.25rem;
      padding: 0.1875rem 0.625rem;
      cursor: pointer;
      display: block;
    }

    input:checked~label {
      background-color: $black;
      color: $white;
    }
  }

  @media screen and (max-width: 36rem) {
    .btn-dropdown,
    .dropdown-menu {
      width: 100%;
    }
  }
</style>
