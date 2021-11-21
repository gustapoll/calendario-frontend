<template>
  <div id="pantone">
    <Header :headerClass="headerClass" :headerSubtitle="headerSubtitle" :aboutLink="aboutLink" />
    <div class="container presentation-wrapper">
      <div class="w-75 pr-30">
        <PresentationPantone/>
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
    <News
      :startDay="startDay"
      :endDay="endDay"
      :currentDay="currentDay"
      :displayDay="displayDay"
      :loading="loading"
      :error="error"
      :daysNews="daysNews"
      :shades="shades"
      @changeDay="changeDay"
    />
  </div>
</template>

<script>
import moment from 'moment'
import Header from '../components/Header.vue'
import { ColorTranslator } from 'colortranslator'
import SelectDate from '../components/SelectDate.vue'
import PresentationPantone from '../components/PresentationPantone.vue'
import News from '../components/News.vue'

export default {
  name: 'pantone',
  metaInfo: {
    title: 'Pantone político',
    meta: [
      {
        'name': 'description',
        'content': 'O Pantone político é um projeto que joga luz (e cor) ao apocalipse político e pandêmico de 2020.'
      },
      {
        'property': 'og:description',
        'content': 'O Pantone político é um projeto que joga luz (e cor) ao apocalipse político e pandêmico de 2020.'
      },
      {
        'property': 'twitter:description',
        'content': 'O Pantone político é um projeto que joga luz (e cor) ao apocalipse político e pandêmico de 2020.'
      },
      {
        'property': 'og:title',
        'content': 'Pantone político'
      },
      {
        'property': 'twitter:title',
        'content': 'Pantone político'
      },
      {
        'property': 'og:image',
        'content': 'https://calendariodissidente.fau.usp.br/abertura-pantone.png'
      },
      {
        'property': 'twitter:image',
        'content': 'https://calendariodissidente.fau.usp.br/abertura-pantone.png'
      },
      {
        'property': 'og:url',
        'content': 'https://calendariodissidente.fau.usp.br/pantone'
      }
    ]
  },
  components: {
    SelectDate,
    PresentationPantone,
    News,
    Header
  },
  data () {
    return {
      startDay: '2020-06-01',
      endDay: '',
      currentDay: '',
      displayDay: '',
      currentMonth: '',
      currentDayNumber: '',
      currentMonthType: '',
      loading: false,
      error: false,
      daysNews: {},
      headerClass: 'pantone',
      headerSubtitle: 'Pantone político',
      aboutLink: 'pantone-sobre',
      shades: [],
      pairs: {
        'even': [
          ['#FF5100', '#FEAEBB'],
          ['#FEAEBB', '#003DA6'],
          ['#003DA6', '#3BBFAD'],
          ['#3BBFAD', '#025157'],
          ['#025157', '#652F6C'],
          ['#652F6C', '#F3C300'],
          ['#F3C300', '#B31983'],
          ['#B31983', '#6FCFEB'],
          ['#6FCFEB', '#93D500'],
          ['#93D500', '#8093DC'],
          ['#8093DC', '#E69E6C'],
          ['#E69E6C', '#A32035'],
          ['#A32035', '#FF6A00'],
          ['#FF6A00', '#B900FF'],
          ['#B900FF', '#000F9F'],
          ['#000F9F', '#00827E'],
          ['#00827E', '#38D430'],
          ['#38D430', '#E0DF00'],
          ['#E0DF00', '#E74F3D'],
          ['#E74F3D', '#FF7276'],
          ['#FF7276', '#773DBD'],
          ['#773DBD', '#00CE7C'],
          ['#00CE7C', '#6E7BA0'],
          ['#6E7BA0', '#FF40B4'],
          ['#FF40B4', '#F32735'],
          ['#F32735', '#FEAE76'],
          ['#FEAE76', '#5B968D'],
          ['#5B968D', '#653334'],
          ['#653334', '#0082CA'],
          ['#0082CA', '#8D355E'],
          ['#8D355E', '#FF5100']
        ],
        'odd': [
          ['#8D355E', '#A1D683'],
          ['#A1D683', '#FFAB4D'],
          ['#FFAB4D', '#F5333F'],
          ['#F5333F', '#C19ADE'],
          ['#C19ADE', '#C028B9'],
          ['#C028B9', '#003B4D'],
          ['#003B4D', '#A9989D'],
          ['#A9989D', '#6FA088'],
          ['#6FA088', '#FF9E18'],
          ['#FF9E18', '#E1B77E'],
          ['#E1B77E', '#752157'],
          ['#752157', '#2A7DE1'],
          ['#2A7DE1', '#FF595A'],
          ['#FF595A', '#636569'],
          ['#636569', '#E0CC00'],
          ['#E0CC00', '#00A887'],
          ['#00A887', '#410099'],
          ['#410099', '#A86D87'],
          ['#A86D87', '#B2292E'],
          ['#B2292E', '#E08433'],
          ['#E08433', '#205A41'],
          ['#205A41', '#CA6D4F'],
          ['#CA6D4F', '#E17FD2'],
          ['#E17FD2', '#ACA199'],
          ['#ACA199', '#00AE42'],
          ['#00AE42', '#A7A4DF'],
          ['#A7A4DF', '#AC3964'],
          ['#AC3964', '#BB6125'],
          ['#BB6125', '#6BA43A'],
          ['#6BA43A', '#FF5100'],
          ['#FF5100', '#8D355E']
        ]
      }
    }
  },
  created () {
    var today = moment()

    this.endDay = today.format('YYYY-MM-DD')
    this.currentDay = today.format('YYYY-MM-DD')
    this.currentDayNumber = today.format('D')
    this.displayDay = today.format('DD MMM YYYY')
    this.currentMonth = today.format('YYYY-MM')

    this.monthType(today)
    this.loadNews()
  },
  methods: {
    changeDay (day) {
      if (!moment.isMoment(day)) {
        day = moment(day)
      }
      this.displayDay = day.format('DD MMM YYYY')
      this.currentDay = day.format('YYYY-MM-DD')
      this.currentDayNumber = day.format('D')

      if (day.format('YYYY-MM') !== this.currentMonth) {
        this.changeMonth(day)
      } else {
        this.generateShades()
      }
    },
    changeMonth (month) {
      this.currentMonth = month.format('YYYY-MM')
      this.displayDay = month.format('DD MMM YYYY')
      this.currentDay = month.format('YYYY-MM-DD')
      this.currentDayNumber = month.format('D')

      this.loadNews()
    },
    generateShades () {
      var total = this.daysNews[this.currentDay].length
      var colorStart = this.pairs[this.currentMonthType][this.currentDayNumber - 1][0]
      var colorEnd = this.pairs[this.currentMonthType][this.currentDayNumber - 1][1]
      this.shades = ColorTranslator.getBlendHEX(colorStart, colorEnd, total)
    },
    monthType (date) {
      const month = date.format('M')
      this.currentMonthType = month % 2 === 1 ? 'odd' : 'even'
    },
    loadNews () {
      this.loading = true
      this.hasTag = false

      this.$pantone
        .get('best_tweets?currentMonth=' + this.currentMonth)
        .then(response => {
          this.loading = false
          this.daysNews = response.data

          if (!(this.currentDay in this.daysNews)) {
            var yesterday = moment().add(-1, 'd')

            this.endDay = yesterday.format('YYYY-MM-DD')
            this.currentDay = yesterday.format('YYYY-MM-DD')
            this.displayDay = yesterday.format('DD MMM YYYY')
            this.currentDayNumber = yesterday.format('D')
          }

          this.generateShades()
        })
        .catch(() => {
          this.error = 'Ocorreu um erro no carregamento das manchetes'
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss">
  .section-title .btn-next {
    margin-left: auto;
  }
</style>
