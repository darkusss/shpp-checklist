<template>
  <div class="mt-8">
    <div>
      <draggable
          draggable=".draggable-item"
          easing="cubic-bezier(1, 0, 0, 1)"
          class="list-group"
          tag="ul"
          :list="tasks"
          itemKey="id"
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
              <span class="bg-orange-200 hover:bg-orange-300 block rounded p-4"> {{ $t('message.addTaskButton') }} </span>
            </template>
            <template #modal>
              <div>
                <h2>{{ $t('message.addTaskTitle') }}</h2>
                <label>
                  <input type="text" v-model="newTaskValue"/>
                </label>
                <div>
                  <span>{{ $t('message.deadline') }}</span>
                  <Datepicker v-model="currentDate"/>
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

    const isPopupOpen = ref(false);
    const newTaskValue = ref('');
    const currentDate = ref(new Date());
    const cursorProperty = ref('grab');

    return {
      tasks,
      isPopupOpen,
      newTaskValue,
      currentDate,
      cursorProperty
    };
  },
  methods: {
    onStartDragging() {
      console.log('asdfasdf');
      this.cursorProperty = 'grabbing';
    },
    onEndDragging() {
      console.log('end event is fired')
      this.cursorProperty = 'grab';
    },
    addTask() {
      // if this string is empty or has only spaces don't add it
      if (!this.newTaskValue.trim()) {
        return;
      }

      // mock data
      this.tasks.push({
        id: Math.random() * 100,
        assigned: 'Bob', // would be user id
        taskText: this.newTaskValue,
        taskResponse: null,
        deadline: this.currentDate,
      });

      this.newTaskValue = '';
    }
  }
});
</script>
