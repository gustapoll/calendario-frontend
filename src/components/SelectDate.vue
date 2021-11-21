<template>
  <div class="select-date">
    <Datepicker
      :language="ptBR"
      :disabled-dates="disabledDates"
      :format="customFormatter"
      :minimumView="'day'"
      :maximumView="'day'"
      :value="datePickerDate"
      @selected="changeDay"
    >
      <span slot="afterDateInput" class="icon-serach">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.91 14.64"><circle fill="none" stroke="#000" stroke-miterlimit="10" cx="6.05" cy="6.05" r="5.55"/><path fill="none" stroke="#000" stroke-miterlimit="10" d="M10.41 9.47l5.16 4.81"/></svg>
      </span>
    </Datepicker>
  </div>
</template>

<script>
import moment from 'moment'
import Datepicker from 'vuejs-datepicker'
import { ptBR } from 'vuejs-datepicker/dist/locale'

export default {
  name: 'SelectDate',
  props: ['currentDay', 'startDay', 'endDay'],
  computed: {
    datePickerDate () {
      return moment(this.currentDay).toDate()
    }
  },
  data () {
    return {
      ptBR: ptBR,
      disabledDates: {
        to: moment(this.startDay).toDate(),
        from: moment(this.endDay).toDate()
      }
    }
  },
  components: {
    Datepicker
  },
  methods: {
    customFormatter (date) {
      return moment(date).format('DD/MM/YYYY')
    },
    changeDay (event) {
      var formatDate = moment(event).format('YYYY-MM-DD')
      this.$emit('changeDay', formatDate)
    }
  }
}
</script>

<style lang="scss">
  .select-date {
    position: relative;
  }

  .select-date input {
    width: 100%;
    border: solid 1px $black;
    padding: 0.25rem 0.5rem;
    font-size: $font-18;
    position: relative;
    z-index: 2;
    background: #0000;
    cursor: default;

    &:focus {
      outline: 0;
    }
  }

  .select-date .vdp-datepicker__calendar {
    border-color: $black;
    width: 100%;
    border-top: 0;
  }

  .select-date .vdp-datepicker__calendar .cell {
    font-size: $font-14;

    &.selected {
      background-color: $black;
      color: $white;
    }

    &:not(.blank):not(.disabled).day:hover,
    &:not(.blank):not(.disabled).month:hover,
    &:not(.blank):not(.disabled).year:hover {
      border-color: $black;
    }

  }

  .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover {
    background-color: $black;
    color: $white;
  }

  .icon-serach {
    position: absolute;
    width: 20px;
    top: 2px;
    right: 12px;
  }

</style>
