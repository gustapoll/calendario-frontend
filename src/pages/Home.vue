<template>
  <div id="home">
    <Header :headerClass="headerClass" :headerSubtitle="headerSubtitle" :aboutLink="aboutLink" />
    <div class="container presentation-wrapper">
      <div class="w-75 pr-30">
        <Presentation/>
      </div>
      <div class="w-25">
        <SelectDate
          :startDay="startDay"
          :endDay="endDay"
          :currentDay="currentDay"
          @changeDay="changeDay"
        />
      </div>
    </div>
    <Day
      :allHashTagsTitle="allHashTagsTitle"
      :hashTags="hashTags"
      :tags="tags"
      :selectHashTag="selectHashTag"
      :selectTag="selectTag"
      :allTagsTitle="allTagsTitle"
      :startDay="startDay"
      :endDay="endDay"
      :currentDay="currentDay"
      :displayDay="displayDay"
      :daysImages="daysImages"
      :loading="loading"
      :error="error"
      :visibleDay="visibleDay"
      @updateHashTag="updateHashTag"
      @updateTag="updateTag"
      @changeDay="changeDay"
      @showDay="showDay"
    />
    <Calendar
      :allHashTagsTitle="allHashTagsTitle"
      :hashTags="hashTags"
      :selectHashTag="selectHashTag"
      :startMonth="startMonth"
      :endMonth="endMonth"
      :currentMonth="currentMonth"
      :displayMonth="displayMonth"
      :daysImages="daysImages"
      :loading="loading"
      :error="error"
      @showDay="showDay"
      @hideDay="hideDay"
      @changeDay="changeDay"
      @updateHashTag="updateHashTag"
      @changeMonth="changeMonth"
    />
  </div>
</template>

<script>
import moment from 'moment'
import Header from '../components/Header.vue'
import SelectDate from '../components/SelectDate.vue'
import Presentation from '../components/Presentation.vue'
import Calendar from '../components/Calendar.vue'
import Day from '../components/Day.vue'

export default {
  name: 'home',
  metaInfo: {
    title: 'Cultura visual + memória política brasileira',
    meta: [
      {
        'name': 'description',
        'content': 'Acesse as narrativas visuais sobre os principais acontecimentos sociopolíticos do Brasil, a partir de hashtags do Instagram.'
      },
      {
        'property': 'og:description',
        'content': 'Acesse as narrativas visuais sobre os principais acontecimentos sociopolíticos do Brasil, a partir de hashtags do Instagram.'
      },
      {
        'property': 'twitter:description',
        'content': 'Acesse as narrativas visuais sobre os principais acontecimentos sociopolíticos do Brasil, a partir de hashtags do Instagram.'
      },
      {
        'property': 'og:title',
        'content': 'Cultura visual + memória política brasileira'
      },
      {
        'property': 'twitter:title',
        'content': 'Cultura visual + memória política brasileira'
      },
      {
        'property': 'og:image',
        'content': 'https://calendariodissidente.fau.usp.br/abertura-cultura.png'
      },
      {
        'property': 'twitter:image',
        'content': 'https://calendariodissidente.fau.usp.br/abertura-cultura.png'
      },
      {
        'property': 'og:url',
        'content': 'https://calendariodissidente.fau.usp.br/'
      }
    ]
  },
  components: {
    SelectDate,
    Presentation,
    Calendar,
    Day,
    Header
  },
  computed: {
    tags () {
      return this.hasTag ? this.daysImages[this.currentDay].used_tags : false
    }
  },
  data () {
    return {
      hashTags: [],
      allHashTagsTitle: 'todas as #',
      selectHashTag: 'todas as #',
      allTagsTitle: 'todos os filtros',
      selectTag: 'todos os filtros',
      startDay: '2019-01-01',
      startMonth: '2019-01',
      endDay: '2020-11-16',
      currentDay: '2019-01-01',
      displayDay: '01 jan 2019',
      endMonth: '2020-11',
      currentMonth: '2019-01',
      displayMonth: 'janeiro 2019',
      daysImages: {},
      loading: false,
      error: false,
      hasTag: false,
      visibleDay: true,
      headerClass: 'cultura',
      headerSubtitle: 'Cultura visual e memória <br>política brasileira',
      aboutLink: 'sobre'
    }
  },
  beforeCreate () {
    this.$http
      .get('hashtags')
      .then(response => {
        this.hashTags = [...response.data.hashtags].filter(x => !['hashtag__test', 'top_3'].includes(x))
      })
      .catch(() => {
        this.hashTags = false
      })
  },
  created () {
    this.loadImages()
  },
  methods: {
    changeDay (day) {
      if (!moment.isMoment(day)) {
        day = moment(day)
      }
      this.displayDay = day.format('DD MMM YYYY')
      this.currentDay = day.format('YYYY-MM-DD')
      this.updateTag(this.allTagsTitle)

      if (day.format('YYYY-MM') !== this.currentMonth) {
        this.changeMonth(day)
      }
    },
    changeMonth (month) {
      this.displayMonth = month.format('MMMM YYYY')
      this.currentMonth = month.format('YYYY-MM')
      this.changeDay(month)
      this.loadImages()
    },
    updateHashTag ($event) {
      this.selectHashTag = $event
    },
    updateTag ($event) {
      this.selectTag = $event
    },
    showDay () {
      this.visibleDay = true
    },
    hideDay () {
      this.visibleDay = false
    },
    loadImages () {
      this.loading = true
      this.hasTag = false

      this.$http
        .get('image?year=' + this.currentMonth.split('-')[0] + '&month=' + this.currentMonth.split('-')[1])
        .then(response => {
          this.loading = false

          if (Object.keys(response.data).length === 0 && response.data.constructor === Object) {
            this.error = 'Ocorreu um erro no carregamento das imagens'
          } else {
            this.error = null
            this.daysImages = response.data
            this.hasTag = true

            if (!(this.currentDay in this.daysImages)) {
              var yesterday = moment().add(-1, 'd')

              this.endDay = yesterday.format('YYYY-MM-DD')
              this.currentDay = yesterday.format('YYYY-MM-DD')
              this.displayDay = yesterday.format('DD MMM YYYY')
            }
          }
        })
        .catch(() => {
          this.error = 'Ocorreu um erro no carregamento das imagens'
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss">
  .presentation-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .w-75 {
    width: 75%;
  }

  .w-25 {
    width: 25%;
  }

  .pr-30 {
    padding-right: 1.875rem;
  }

  @media screen and (max-width: 63.75rem) {
    .w-75,
    .w-25 {
      width: 100%;
    }

    .pr-30 {
      padding-right: 0;
    }
  }
</style>
