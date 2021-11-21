<template>
  <div id="home">
    <div class="container flex">
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
      @updateHashTag="updateHashTag"
      @updateTag="updateTag"
      @changeDay="changeDay"
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
      @changeDay="changeDay"
      @updateHashTag="updateHashTag"
      @changeMonth="changeMonth"
    />
  </div>
</template>

<script>
import moment from 'moment'
import SelectDate from './components/SelectDate.vue'
import Presentation from './components/Presentation.vue'
import Calendar from './components/Calendar.vue'
import Day from './components/Day.vue'

export default {
  name: 'app',
  components: {
    Footer,
    SelectDate,
    Presentation,
    Calendar,
    Day
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
      endDay: '',
      currentDay: '',
      displayDay: '',
      endMonth: '',
      currentMonth: '',
      displayMonth: '',
      daysImages: {},
      loading: false,
      error: false,
      hasTag: false
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
    var yesterday = moment().add(-1, 'd')

    this.endDay = yesterday.format('YYYY-MM-DD')
    this.currentDay = yesterday.format('YYYY-MM-DD')
    this.displayDay = yesterday.format('DD MMM YYYY')

    this.endMonth = yesterday.format('YYYY-MM')
    this.currentMonth = yesterday.format('YYYY-MM')
    this.displayMonth = yesterday.format('MMMM YYYY')

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
