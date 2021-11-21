<template>
  <section id="section-news">
    <div class="container">
      <SectionTitle v-show="!error">
        <button class="btn btn-prev" @click="changeDay(-1)" v-show="currentDay > startDay" aria-label="dia anterior">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.57 30.9"><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M16.51 29.84L2.12 15.45 16.51 1.06"/></svg>
        </button>

        <h2 v-html="displayDayFormatted"></h2>

        <button class="btn btn-next" @click="changeDay(1)" v-show="currentDay < endDay" aria-label="próximo dia">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.57 30.9"><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M1.06 1.06l14.39 14.39L1.06 29.84"/></svg>
        </button>
      </SectionTitle>

      <p v-show="loading" class="alert">Carregando manchetes...</p>
      <p v-show="error" class="alert">{{ error }}</p>

      <div class="news-wrapper" v-if="!error && !loading">
        <div class="news-item" v-for="(item, key) in limitNews" :key="key" :style="{ background: shades[key] }" :id="currentDay + '-' + key">
          <div class="news-item-content">
            <p class="news-item-text" :class="textLength(item.text)">
              {{ item.text | removeURL }}
              <a :href="item.url" target="_blank" rel="noopener" class="news-item-author">@{{ item.author }}</a>
            </p>
            <small class="news-item-project">#pantonepolitico</small>
            <button class="btn-download" @click="generateImage(currentDay + '-' + key)" v-show="!isIOS()">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" class="svg-inline--fa fa-download fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <button @click="generateAllImage" id="btn-download-all" v-show="!isIOS()"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" class="svg-inline--fa fa-download fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg> Baixar todos</button>
    </div>
  </section>
</template>

<script>
import moment from 'moment'
import html2canvas from 'html2canvas'
import download from 'downloadjs'
import SectionTitle from './SectionTitle.vue'

export default {
  name: 'News',
  props: [
    'endDay',
    'startDay',
    'currentDay',
    'displayDay',
    'totalDay',
    'loading',
    'shades',
    'error',
    'daysNews'
  ],
  components: {
    SectionTitle
  },
  computed: {
    displayDayFormatted () {
      return this.displayDay.replace(/([0-9]{2}\s)/g, '<span>$1</span>')
    },
    limitNews () {
      return this.daysNews[this.currentDay]
    }
  },
  methods: {
    changeDay (index) {
      var day = moment(this.currentDay).add(index, 'd')
      this.$emit('changeDay', day)
    },
    textLength (text) {
      return text.length > 100 ? 'bigger' : ''
    },
    generateImage (id) {
      var item = document.getElementById(id)
      var scrollbarWidth = document.documentElement.clientWidth - window.innerWidth
      var index = id.slice(11)
      var options = {
        backgroundColor: this.shades[index],
        scale: 3,
        scrollX: scrollbarWidth / 2,
        scrollY: -window.scrollY
      }
      html2canvas(item, options).then(canvas => {
        download(canvas.toDataURL(), 'pantone-politico-' + id + '.png', 'image/png')
      })
    },
    generateAllImage () {
      var i
      for (i = 0; i < this.shades.length; i++) {
        var id = this.currentDay + '-' + i
        this.generateImage(id)
      }
    },
    isIOS () {
      var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
      var isAppleDevice = navigator.userAgent.includes('Macintosh')
      var isTouchScreen = navigator.maxTouchPoints >= 1 // true for iOS 13 (and hopefully beyond)

      return isIOS || (isAppleDevice && (isTouchScreen || this.iosQuirkPresent()))
    },
    iosQuirkPresent () {
      var audio = new Audio()

      audio.volume = 0.5
      return audio.volume === 1 // volume cannot be changed from "1" on iOS 12 and below
    }
  }
}
</script>

<style lang="scss">
  @import 'swiper/src/swiper';

  .section-title {
    margin-top: 1.875rem;
  }

  #section-news {
    min-height: 700px;
  }

  #section-news h2 {
    font-size: $font-18;
    line-height: 1.1;
  }

  #section-news h2 span {
    font-size: $font-42;
  }

  .news-wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;

    // 1110
    @media screen and (max-width: 69.375rem) {
      grid-template-columns: repeat(4, 1fr);
    }

    // 900
    @media screen and (max-width: 56.25rem) {
      grid-template-columns: repeat(3, 1fr);
    }

    // 690
    @media screen and (max-width: 43.125rem) {
      grid-template-columns: repeat(2, 1fr);
    }

    // 460
    @media screen and (max-width: 28.75rem) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .news-item {
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }

    .news-item-content {
      font-family: 'Roboto Slab', serif;
      padding: 0.875rem;
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #fff;
    }

    .news-item-text {
      font-size: $font-18;
      font-weight: 700;
      margin: 0;

      @media screen and (max-width: 28.75rem) {
        font-size: 7vw;
      }

      &.bigger {
        font-size: 0.95rem;

        @media screen and (max-width: 28.75rem) {
          font-size: 7vw;
        }
      }
    }

    .news-item-author {
      font-size: 60%;
      text-decoration: underline;
      color: inherit;
    }

    .news-item-project {
      color: #000;
      font-size: $font-10;
      padding-top: 0.625rem;
    }

    .btn-download {
      position: absolute;
      right: 5px;
      bottom: 5px;
      border: 0;
      background: transparent;
      padding: 0;
      width: 20px;
      color: #fff;
      transition: transform 150ms;
      transform: translateY(0);
      cursor: pointer;

      @media (hover: hover) and (pointer: fine) {
        transform: translateY(30px);
      }

      &:focus {
        outline: 0;
      }
    }

    &:hover,
    &:focus {
      .btn-download {
        transform: translateY(0);
      }
    }
  }

  #btn-download-all {
    border: 0;
    background-color: #000;
    color: #fff;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-size: 0.625rem;
    padding: 6px;
    margin-top: 2.5rem;
    margin-left: auto;
    font-weight: 500;

    svg {
      width: 0.875rem;
      margin-right: 0.625rem;
    }
  }

  @media screen and (max-width: 48rem) {
    #section-news {
      min-height: unset;
    }

    #section-news h2 {
      font-size: $font-16;
    }

    #section-news h2 span {
      font-size: $font-38;
    }
  }

  @media screen and (max-width: 36rem) {
    #section-news h2 span {
      font-size: $font-34;
    }
  }
</style>
