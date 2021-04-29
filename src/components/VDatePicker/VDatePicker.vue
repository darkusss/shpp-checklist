<template>
   <div class="date-picker-container">
     <VSelect class="date-picker-select" :selected="currentYear" v-model="currentYear" @change="editValue('year', $event.target.value)">
       <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
     </VSelect>
     <VSelect class="date-picker-select" :selected="currentMonth" v-model="currentMonth" @change="editValue('month', $event.target.value)">
       <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
     </VSelect>
      <VSelect class="date-picker-select" :selected="currentDay" v-model="currentDay" @change="editValue('days', $event.target.value)">
        <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
      </VSelect>
   </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VSelect from '@/components/reusable/VSelect';
import moment from 'moment';

export default defineComponent({
  name: 'VDatePicker',
  components: {
    VSelect,
  },
  props: {
  },
  setup() {
    const dateValue = moment();

    console.log(dateValue.format('dddd, MMMM Do YYYY, h:mm A'));

    const months = ref<string[]>(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
    const days = ref<number>(dateValue.daysInMonth());
    const currentDay = ref(dateValue.date());
    const currentMonth = ref<string>(months.value[dateValue.month()]);
    const currentYear = ref<number>(dateValue.year());
    const years = ref<number[]>(Array.from({ length: 10 }, (_: any, i: number) => currentYear.value + i));

    const editValue = (unit: any, value: number) => {
      dateValue.set(unit, value);
      days.value = dateValue.daysInMonth();
    }

    return {
      currentDay,
      currentMonth,
      currentYear,
      days,
      months,
      years,
      editValue,
    };
  }
});
</script>
