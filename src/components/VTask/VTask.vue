<template>
  <div class=" shadow-lg max-w-sm bg-gray-50 rounded-lg my-4 px-2 py-2">
    <div class="h-16 flex justify-between">
      <p class="truncate relative" ref="text">
        {{ taskTitle }}
        <span v-if="tooltipShown" class="absolute top-6 left-0">
          <span class="relative bg-gray-800 text-gray-50 py-1 px-2 border-1 rounded text-sm" role="tooltip" ref="tooltip">
            {{ taskTitle }}
            <span class="absolute" data-popper-arrow></span>
          </span>
        </span>
      </p>
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
import { defineComponent, ref, onMounted } from 'vue';
import VSelect from '@/components/reusable/VSelect';
import Popper from 'popper.js';

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
    const tooltipShown = ref(true);
    const selectedValue = ref('');
    const text = ref<Element | null>(null);
    const tooltip = ref<HTMLElement | null>(null);
    const options = ['готово на 100%', 'недороблено', 'нічого робити'];

    onMounted(() => {
      if (text.value !== null && tooltip.value !== null) {
        new Popper(text.value, tooltip.value);
      }
    });

    return {
      selectedValue,
      options,
      text,
      tooltip,
      tooltipShown,
    };
  },
  emits: ['update:modelValue'],
  methods: {
    updateValue(value: string) {
      this.$emit('update:modelValue', value);
    },
    updateTooltipShownValue(value: boolean) {
      this.tooltipShown = value;
    }
  }

});
</script>
