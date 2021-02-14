<template>
  <button @click="openModal">
    <slot name="modal-button"></slot>
  </button>
  <teleport to="body">
    <div v-if="modelValue" class="modal-wrapper">
      <div class="overlay" @click="closeModal" />
      <div class="modal">
        <slot name="modal"></slot>
        <button @click="closeModal">{{ $t('message.addTaskAdd') }}</button>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'VPopup',
  props: {
    modelValue: Boolean
  },
  emits: ['close', 'update:modelValue'],
  setup(props, { emit }) {
    const isModalOpen = ref(props.modelValue);

    const openModal = () => {
      emit('update:modelValue', (isModalOpen.value = true));
    };

    const closeModal = () => {
      emit('update:modelValue', (isModalOpen.value = false));
      emit('close');
    };

    return {
      isModalOpen,
      openModal,
      closeModal
    };
  }
});
</script>

<style src="./VPopup.css" scoped />
