<template>
  <div class="calendar-day" @click="changeDay" v-scroll-to="'#section-day'" v-show="showImage">
    <span class="day">{{ day | formatMonthDay }}</span>
    <figure class="thumb">
      <img :src="showImage | formatImageURL" alt="" v-if="showImage">
    </figure>
  </div>
</template>

<script>
export default {
  name: 'CalendarDay',
  props: ['day', 'image', 'selectHashTag', 'allHashTagsTitle'],
  computed: {
    showImage () {
      if (this.selectHashTag === this.allHashTagsTitle) {
        return this.image['top_3']['1']['images'][0]
      } else {
        if (this.selectHashTag in this.image.images) {
          var paths = this.image['images'][this.selectHashTag]['1']['images']
          var index = Object.keys(paths)[0]
          return paths[index]
        }
      }

      return false
    }
  },
  methods: {
    changeDay () {
      this.$emit('changeDay', this.day)
    }
  }
}
</script>

<style scoped lang="scss">
  .calendar-day {
    --calendarHeight: 158px;

    @media screen and (max-width: 53rem) {
      --calendarHeight: 114px;
    }

    @media screen and (max-width: 48rem) {
      --calendarHeight: 240px;
    }

    @media screen and (max-width: 30rem) {
      --calendarHeight: 216px;
    }

    @media screen and (max-width: 23.437rem) {
      --calendarHeight: 172px;
    }

    @media screen and (max-width: 22.5rem) {
      --calendarHeight: 165px;
    }

    @media screen and (max-width: 20rem) {
      --calendarHeight: 145px;
    }

    position: relative;
    height: var(--calendarHeight);
    cursor: pointer;

    .day {
      position: absolute;
      font-size: $font-20;
      font-weight: 700;
      color: $white;
      background-color: rgba($black, 0.5);
      width: 37px;
      height: 37px;
      line-height: 37px;
      text-align: center;
      user-select: none;
    }

    .thumb {
      margin: 0;
      text-align: center;

      img {
        object-fit: cover;
        width: 100%;
        max-height: var(--calendarHeight);
      }
    }
  }
</style>
