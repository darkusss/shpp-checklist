<template>
  <button @click="handleModalWindow">
    <slot name="modal-button"></slot>
  </button>
  <teleport to="body">
    <div v-if="modelValue" class="modal-wrapper" >
      <div class="overlay" @click="handleModalWindow" />
      <div class="modal">
        <div class="close-button-container" @click="handleModalWindow">
          <button class="close-button" />
        </div>
        <slot name="modal"></slot>
        <button @click="submitModal">{{ $t('message.addTaskAdd') }}</button>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'VPopup',
  props: {
    modelValue: Boolean
  },
  emits: ['submit', 'update:modelValue', 'keyup'],
  setup(props, { emit }) {
    const isModalOpen = ref(props.modelValue);

    const handleModalWindow = () => {
      emit('update:modelValue', (isModalOpen.value = !isModalOpen.value));
    };
    
    const handleEscapeModalWindowClose = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        emit('update:modelValue', (isModalOpen.value = !isModalOpen.value));
      }
    }

    const submitModal = () => {
      handleModalWindow();
      emit('submit');
    };

    onMounted(() => {
      window.addEventListener('keyup', handleEscapeModalWindowClose);
    });

    onUnmounted(() => {
      window.removeEventListener('keyup', handleEscapeModalWindowClose);
    })

    return {
      isModalOpen,
      handleModalWindow,
      submitModal,
    };
  }
});
</script>

<style src="./VPopup.css" scoped />
