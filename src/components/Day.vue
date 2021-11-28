<template>
  <section id="section-day">
    <div class="container">
      <SectionTitle v-show="!error">
        <button class="btn btn-prev" @click="changeDay(-1)" v-show="currentDay > startDay" aria-label="dia anterior">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.57 30.9"><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M16.51 29.84L2.12 15.45 16.51 1.06"/></svg>
        </button>

        <h2 v-html="displayDayFormatted"></h2>

        <div class="dropdown-group">
          <RadiosHashTags :hashTags="hashTags" :selectHashTag="selectHashTag" :allHashTagsTitle="allHashTagsTitle" cid="1" @updateHashTag="updateHashTag"/>

          <RadiosTags :tags="tags" :selectTag="selectTag" :allTagsTitle="allTagsTitle" @updateTag="updateTag"/>
        </div>

        <button class="btn btn-open" :class="{ 'btn-hide': visibleDay }" @click="showDay" aria-label="mostrar imagens do dia">abrir</button>

        <button class="btn btn-next" @click="changeDay(1)" v-show="currentDay < endDay" aria-label="próximo dia">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.57 30.9"><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M1.06 1.06l14.39 14.39L1.06 29.84"/></svg>
        </button>
      </SectionTitle>

      <p v-show="loading" class="alert">Carregando imagens...</p>
      <p v-show="error" class="alert">{{ error }}</p>

      <div class="day-wrapper" v-if="!error && !loading">
        <div class="day-thumbs" :class="{ 'hide-day': !visibleDay }">
          <template v-for="ranking in daysImages[currentDay]['images']">
            <template v-for="image in ranking">
              <figure class="thumb"
                v-for="(path, key) in image.images"
                :key="path"
                @click="openModal('slide-'+path)"
                v-show="
                  (selectHashTag === allHashTagsTitle || image['hashtags'].includes(selectHashTag)) &&
                  (selectTag === allTagsTitle || image['tags'].includes(selectTag))"
                >
                <img :src="path | formatImageURL" :foo="key" alt="">
              </figure>
            </template>
          </template>
        </div>
      </div>
    </div>

    <modal name="slider-images-modal" height="auto" width="90%" :maxWidth="600" :adaptive=true @opened="modalOpened">
      <button @click="closeModal()" aria-label="fechar modal" class="btn btn-close-modal">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.12 32.12"><path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3px" d="M1.06 1.06l30 30M1.06 31.06l30-30"/></svg>
      </button>
      <div class="slider" v-if="!error && !loading">
        <swiper :options="swiperOption" ref="slider">
          <template v-for="ranking in daysImages[currentDay]['images']">
            <template v-for="image in ranking">
              <swiper-slide
                v-for="path in image.images"
                :key="path"
                :id="'slide-'+path"
                :class="{ visible: (selectHashTag === allHashTagsTitle || image['hashtags'].includes(selectHashTag)) &&
                  (selectTag === allTagsTitle || image['tags'].includes(selectTag)) }"
                v-show="
                  (selectHashTag === allHashTagsTitle || image['hashtags'].includes(selectHashTag)) &&
                  (selectTag === allTagsTitle || image['tags'].includes(selectTag))"
                >
                <img :src="path | formatImageURL" alt="">
                <p class="caption">
                  <a :href="'https://instagram.com/'+image.owner_username" target="_blank" rel="noopener">
                    {{ image.owner_username }}
                  </a><br>
                  {{ image.caption }}
                </p>
              </swiper-slide>
            </template>
          </template>
        </swiper>
      </div>
      <button class="btn swiper-button-next" aria-label="imagem anterior">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.57 30.9"><path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3" d="M1.06 1.06l14.39 14.39L1.06 29.84"/></svg>

      </button>
      <button class="btn swiper-button-prev" aria-label="próxima imagem">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.57 30.9"><path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3" d="M16.51 29.84L2.12 15.45 16.51 1.06"/></svg>
      </button>
    </modal>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import moment from 'moment'
import SectionTitle from './SectionTitle.vue'
import RadiosHashTags from './RadiosHashTags.vue'
import RadiosTags from './RadiosTags.vue'

export default {
  name: 'Day',
  props: [
    'endDay',
    'startDay',
    'currentDay',
    'displayDay',
    'hashTags',
    'tags',
    'allHashTagsTitle',
    'selectHashTag',
    'selectTag',
    'allTagsTitle',
    'daysImages',
    'loading',
    'error',
    'visibleDay'
  ],
  components: {
    SectionTitle,
    RadiosHashTags,
    RadiosTags,
    swiper,
    swiperSlide
  },
  computed: {
    displayDayFormatted () {
      return this.displayDay.replace(/([0-9]{2}\s)/g, '<span>$1</span>')
    }
  },
  data () {
    return {
      swiperOption: {
        spaceBetween: 20,
        keyboard: true,
        // observer: true,
        // observeParents: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      selectImage: 0,
      selectId: ''
    }
  },
  methods: {
    updateHashTag ($event) {
      this.$emit('updateHashTag', $event)
    },
    updateTag ($event) {
      this.$emit('updateTag', $event)
    },
    openModal (id) {
      this.$modal.show('slider-images-modal')
      this.selectId = id
    },
    closeModal () {
      this.$modal.hide('slider-images-modal')
    },
    changeDay (index) {
      var day = moment(this.currentDay).add(index, 'd')
      this.$emit('changeDay', day)
    },
    showDay () {
      this.$emit('showDay')
    },
    modalOpened () {
      this.getIndex()
      this.$refs.slider.swiper.slideTo(this.selectImage)
    },
    getIndex () {
      let items = [...document.querySelectorAll('.swiper-wrapper .swiper-slide.visible')]
      let index = items.findIndex(item => item.id === this.selectId)
      this.selectImage = index
    }
  }
}
</script>

<style lang="scss">
  @import 'swiper/src/swiper';

  .section-title {
    margin-top: 1.875rem;
  }

  #section-day {
    min-height: 700px;
  }

  #section-day h2 {
    font-size: $font-18;
    line-height: 1.1;
  }

  #section-day h2 span {
    font-size: $font-42;
  }

  .day-thumbs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-bottom: 1.25rem;
  }

  .thumb {
    margin: 0;
    text-align: center;
    cursor: pointer;

    img {
      max-height: 262px;
    }
  }

  .v--modal-overlay {
    background-color: rgba($black, 0.8);
  }

  .swiper-container {
    max-width: 520px;
    // height: 600px;
    height: auto;
  }

  .swiper-slide {
    text-align: center;
    height: 86vh;

    img {
      max-height: 520px;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    padding: 0.625rem;
    position: absolute;
    top: 50%;
    margin-top: -13px;
    left: 5px;
    opacity: 1;
    z-index: 9;

    svg {
      width: 20px;
      height: 26px;
    }
  }

  .swiper-button-disabled {
    opacity: 0;
  }

  .swiper-button-next {
    left: auto;
    right: 5px;
  }

  #section-day {
    .v--modal-overlay {
      background-color: rgba($black, .8);
    }

    .v--modal {
      padding: 36px;
      border-radius: 0;
      position: relative;
    }

    .btn-close-modal {
      position: absolute;
      right: 12px;
      top: 4px;

      svg {
        width: 18px;
        height: 18px;
      }
    }

    p.caption {
      height: calc(82vh - 520px);
      overflow-y: auto;
      margin: 1.25rem 0 0 0;
      font-size: $font-13;
      text-align: left;
      background-color: $white;
      padding: 0 0.75rem 0 0;
      line-height: 1.7;

      a {
        color: $black;
        text-decoration: underline;
      }
    }
  }

  @media screen and (max-width: 48rem) {
    #section-day {
      min-height: unset;
    }

    .day-thumbs {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 15px;
      margin-bottom: 0.9375rem;
    }

    #section-day h2 {
      font-size: $font-16;
    }

    #section-day h2 span {
      font-size: $font-38;
    }

    .hide-day {
      display: none;
    }
  }

  @media screen and (max-width: 42.5rem) {
    .swiper-slide {
      overflow: auto;
    }

    #section-day p.caption {
      height: auto;
    }
  }

  @media screen and (max-width: 36rem) {
    .day-thumbs {
      grid-template-columns: repeat(2, 1fr);
    }

    #section-day h2 span {
      font-size: $font-34;
    }
  }
</style>
