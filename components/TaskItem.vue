<script setup>
import { ref } from "vue";
import TaskService from "../services/TaskService";

// Component
const props = defineProps({ task: { type: Object, required: true } });

// Edit task title
const shouldShowEditModal = ref(false);
const handleSave = (updatedTask) => {
  TaskService.updateTask(
    props.task.id,
    { title: updatedTask },
    "Task title successfully updated"
  );
  shouldShowEditModal.value = false;
};

// Delete task
const shouldShowDeleteModal = ref(false);
const handleDelete = () => {
  TaskService.deleteTask(props.task.id);
  shouldShowDeleteModal.value = false;
};

// Update assignee
const $assigneeAvatar = ref(null);
const handleUserPick = (newAssignee) => {
  TaskService.updateTask(
    props.task.id,
    { assignee: newAssignee },
    "Task assigne updated"
  );
  shouldShowDropdown.value = false;
};

// Other events
const handleCheckClick = () => {
  TaskService.updateTask(
    props.task.id,
    { is_done: !props.task.is_done },
    "Task status updated"
  );
};
const handleImportantClick = () => {
  TaskService.updateTask(
    props.task.id,
    { is_important: !props.task.is_important },
    "Task importance updated"
  );
};

// User dropdown
const shouldShowDropdown = ref(false);

// // User avatar
// const handleImgError = (e) => {
//   if (e.originalTarget) {
//     e.originalTarget.onerror = null;
//     return (e.originalTarget.src = `https://api.dicebear.com/7.x/initials/svg?seed=${props.task.assignee.name}&backgroundColor=0fbcf9,e83e8c,0be881 `);
//   }

//   e.onerror = null;
//   e.src = `https://api.dicebear.com/7.x/initials/svg?seed=${props.task.assignee.name}&backgroundColor=0fbcf9,e83e8c,0be881 `;
// };
</script>

<template>
  <div
    class="task-item relative flex justify-between items-center gap-[3.2rem] w-full max-w-[144rem] bg-white p-[1.6rem] border border-solid border-[#b8db32] rounded-[.4rem] transition-shadow hover:shadow-md"
    :class="[{ 'z-100': shouldShowDropdown }]"
  >
    <div class="flex items-center gap-[1.6rem]">
      <button
        class="task-item__check grid p-[.4rem] rounded-full transition-colors hover:!bg-primary"
        :class="{ 'bg-gray-300': !task.is_done, 'bg-primary': task.is_done }"
        @click="handleCheckClick"
      >
        <font-awesome-icon
          class="task-item__check-icon w-[.875rem] h-[1rem]"
          icon="fa-solid fa-check"
        />
      </button>
      <button
        class="task-item__text flex-1 text-left transition-[text-decoration]"
        :class="{
          'line-through': task.is_done,
          'text-gray-500': task.is_done,
          'text-gray-700': !task.is_done,
        }"
        @click="shouldShowEditModal = true"
      >
        {{ task.title }}
      </button>
    </div>
    <div class="task-item__right-buttons relative flex gap-[.8rem]">
      <UserDropdown
        v-if="shouldShowDropdown"
        :current-user="task.assignee.name"
        @close="shouldShowDropdown = false"
        @userPick="handleUserPick"
      />
      <button
        class="task-item__assignee w-[1.6rem] h-[1.6rem] overflow-hidden rounded-full grid place-items-center"
        ref="$assigneeAvatar"
        @click="shouldShowDropdown = true"
      >
        <img
          class="w-full"
          :src="`https://api.dicebear.com/7.x/initials/svg?seed=${task.assignee.name}&backgroundColor=0fbcf9,6f42c1,e83e8c,ffc048,0be881,36b9cc,34495e,27ae60,2ecc71,2980b9`"
          :alt="`${task.assignee.name} Avatar`"
          v-if="task.assignee.name"
        />
        <font-awesome-icon
          class="task-item__assignee-avatar w-[1.6rem] h-[1.6rem]"
          icon="fa-solid fa-user-xmark"
          v-else
        />
      </button>
      <button
        class="task-item__important grid"
        :class="[{ 'task-item__important--active': task.is_important }]"
        @click="handleImportantClick"
      >
        <font-awesome-icon icon="fa-solid fa-star" />
      </button>
      <button
        class="task-item__delete grid"
        @click="shouldShowDeleteModal = true"
      >
        <font-awesome-icon icon="fa-solid fa-trash-can" />
      </button>
    </div>
    <DeleteModal
      v-if="shouldShowDeleteModal"
      @cancel="shouldShowDeleteModal = false"
      @delete="handleDelete"
    />
    <EditModal
      v-if="shouldShowEditModal"
      :current-task="task.title"
      @cancel="shouldShowEditModal = false"
      @save="handleSave"
    />
  </div>
</template>

<style lang="scss">
@import "@/assets/css/variables";

.task-item {
  &__check svg path {
    fill: $white;
  }

  &__assignee svg path {
    transition: fill 150ms ease-in-out;
    fill: $gray-300;
  }

  &__assignee:hover svg path {
    fill: $gray-500;
  }

  &__important svg path {
    transition: fill 150ms ease-in-out;
    fill: $gray-300;
  }

  &__important--active svg path,
  &__important:hover svg path {
    fill: $yellow;
  }

  &__delete svg path {
    transition: fill 150ms ease-in-out;
    fill: $gray-300;
  }

  &__delete:hover svg path {
    fill: $danger;
  }
}
</style>
