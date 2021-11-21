<template>
  <section id="section-calendar">
    <div class="container">
      <SectionTitle v-show="!error">
        <button class="btn btn-prev" @click="changeMonth(-1)" v-show="currentMonth > startMonth" aria-label="mês anterior">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.57 30.9"><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M16.51 29.84L2.12 15.45 16.51 1.06"/></svg>
        </button>

        <h2>{{ displayMonth }}</h2>

        <div class="dropdown-group">
          <RadiosHashTags :hashTags="hashTags" :selectHashTag="selectHashTag" :allHashTagsTitle="allHashTagsTitle" cid="2" @updateHashTag="updateHashTag"/>
        </div>

        <button class="btn btn-next" @click="changeMonth(1)" v-show="currentMonth < endMonth" aria-label="próximo mês">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.57 30.9"><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M1.06 1.06l14.39 14.39L1.06 29.84"/></svg>
        </button>
      </SectionTitle>

      <p v-show="loading" class="alert">Carregando imagens...</p>
      <p v-show="error"  class="alert">{{ error }}</p>

      <div class="calendar-wrapper" v-show="!error && !loading">
        <div class="calendar-month" >
          <CalendarDay v-for="(day, index) in daysImagesSorted" :day="index" :image="day" :allHashTagsTitle="allHashTagsTitle" :selectHashTag="selectHashTag" :key="index" @changeDay="changeDay" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment'
import SectionTitle from './SectionTitle.vue'
import CalendarDay from './CalendarDay.vue'
import RadiosHashTags from './RadiosHashTags.vue'

export default {
  name: 'Calendar',
  props: [
    'allHashTagsTitle',
    'hashTags',
    'selectHashTag',
    'startMonth',
    'endMonth',
    'currentMonth',
    'displayMonth',
    'loading',
    'error',
    'daysImages'
  ],
  components: {
    SectionTitle,
    CalendarDay,
    RadiosHashTags
  },
  computed: {
    daysImagesSorted () {
      var result = Object.fromEntries(Object.entries(this.daysImages).sort(function (a, b) {
        var keyA = new Date(a[1]['top_3']['1'].date)
        var keyB = new Date(b[1]['top_3']['1'].date)
        // Compare the 2 dates
        if (keyA < keyB) return -1
        if (keyA > keyB) return 1
        return 0
      }))

      return result
    }
  },
  methods: {
    changeMonth (index) {
      const month = moment(this.currentMonth + '-01').add(index, 'M')
      this.hideDays = true
      this.$emit('changeMonth', month)
      this.$emit('hideDay')
    },
    updateHashTag ($event) {
      this.$emit('updateHashTag', $event)
    },
    changeDay ($event) {
      this.hideDays = false
      this.$emit('changeDay', $event)
      this.$emit('showDay')
    }
  }
}
</script>

<style scoped lang="scss">
  #section-calendar {
    min-height: 480px;
  }

  .calendar-month {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 1.25rem;
  }

  @media screen and (max-width: 48rem) {
    #section-calendar {
      min-height: unset;
    }

    .calendar-month {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (max-width: 36rem) {
    .calendar-month {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
