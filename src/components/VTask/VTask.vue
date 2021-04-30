<template>
  <div class=" shadow-lg max-w-sm bg-gray-50 rounded-lg my-4 px-2 py-2">
    <div class="h-16 flex justify-between">
      <label class="">
        {{ taskTitle }}
      </label>
      <VSelect v-model="selectedValue" @change="updateValue($event.target.value)">
        <template #first>
          <option value="" disabled>{{ $t('message.defaultSelectOption') }}</option>
        </template>
        <option v-for="option in options" :value="option" :key="option">{{ option }}</option>
      </VSelect>
    </div>
    <div v-if="deadline" class="flex justify-end">
      <span class="text-xs bg-green-400 font-semibold rounded-sm p-1">{{ deadline.toLocaleString() }}</span>
    </div>
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
