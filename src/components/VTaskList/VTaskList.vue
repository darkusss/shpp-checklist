<template>
  <div class="mt-8">
    <div>
      <draggable
          draggable=".draggable-item"
          class="list-group"
          tag="ul"
          :component-data="{
            tag: 'ul',
            type: 'transition-group',
            name: !drag ? 'flip-list' : null
          }"
          v-bind="dragOptions"
          v-model="tasks"
          item-key="id"
          @start="onStartDragging"
          @end="onEndDragging"
      >
        <template #item="{ element }">
          <li class="draggable-item">
            <VTask
                v-model="element.taskResponse"
                :task-title="element.taskText"
                :deadline="element.deadline"
            />
          </li>
        </template>
        <template #footer>
          <VPopup @submit="addTask" v-model="isPopupOpen" @keyup.esc="isPopupOpen = false">
            <template #modal-button>
              <span class="bg-orange-400 hover:bg-orange-500 block rounded-full font-semibold text-gray-50 shadow py-3 px-6"> {{ $t('message.addTaskButton') }} </span>
            </template>
            <template #modal>
              <div class="">
                <h2>{{ $t('message.addTaskTitle') }}</h2>
                <label>
                  <input class="border rounded border-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 p-2" type="text" placeholder="..." v-model="newTaskValue"/>
                </label>
                <div>
                  <span>{{ $t('message.deadline') }}</span>
                  <Datepicker class="border rounded border-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 p-2" v-model="currentDate"/>
                </div>
              </div>
            </template>
          </VPopup>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import draggable from 'vuedraggable';
import Datepicker from 'vue3-datepicker';
import useTasks from './composables/useTasks';
import VPopup from '@/components/reusable/VPopup';
import VTask from '@/components/VTask';

export default defineComponent({
  name: 'VTaskList',
  components: {
    VTask,
    VPopup,
    draggable,
    Datepicker,
  },
  props: {
    today: Boolean,
    soon: Boolean,
    done: Boolean,
    irrelevant: Boolean
  },
  setup() {
    const { tasks } = useTasks();

    const drag = ref(false);
    const isPopupOpen = ref(false);
    const newTaskValue = ref('');
    const currentDate = ref(new Date());
    const cursorProperty = ref('grab');

    return {
      drag,
      tasks,
      isPopupOpen,
      newTaskValue,
      currentDate,
      cursorProperty
    };
  },
  methods: {
    onStartDragging() {
      this.cursorProperty = 'grabbing';
      this.drag = true;
    },
    onEndDragging() {
      this.cursorProperty = 'grab';
      this.drag = false;
    },
    addTask() {
      // if this string is empty or has only spaces in it don't add it
      if (!this.newTaskValue.trim()) {
        return;
      }

      // mock data
      this.tasks.push({
        id: Math.random() * 100, // would be task id
        assigned: 'Bob', // would be user id
        taskText: this.newTaskValue,
        taskResponse: null,
        deadline: this.currentDate,
      });

      this.newTaskValue = '';
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      };
    }
  },
});
</script>
<style src="./style.css" scoped />
