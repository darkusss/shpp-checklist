<template>
  <div>
    <label>
      {{ taskTitle }}
      <span v-if="deadline">{{ deadline.toLocaleString() }}</span>
    </label>
    <VSelect v-model="selectedValue" @change="updateValue($event.target.value)">
      <template #first>
        <option value="" disabled>{{ $t('message.defaultSelectOption') }}</option>
      </template>
      <option v-for="option in options" :value="option" :key="option">{{ option }}</option>
    </VSelect>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VSelect from '@/components/reusable/VSelect';

export default defineComponent({
  name: 'VTask',
  components: {
    VSelect
  },
  props: {
    taskTitle: String,
    modelValue: String,
    deadline: [Date, String],
  },
  setup() {
    const selectedValue = ref('');
    const options = ['готово на 100%', 'недороблено', 'нічого робити'];

    return {
      selectedValue,
      options
    };
  },
  emits: ['update:modelValue'],
  methods: {
    updateValue(value: string) {
      this.$emit('update:modelValue', value);
    }
  }
});
</script>
