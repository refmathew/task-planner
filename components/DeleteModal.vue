<script setup>
defineEmits(["cancel", "delete"]);
</script>

<template>
  <CustomModal
    color="red"
    @cancel="$emit('cancel')"
    @ctaClick="$emit('delete')"
  >
    <template #icon>
      <font-awesome-icon
        class="delete-modal__icon w-[2rem] h-[2rem]"
        icon="fa-solid fa-triangle-exclamation"
      />
    </template>

    <template #heading> Delete Task </template>

    <template #body
      >Are you sure you want to delete this task? This action cannot be undone.
    </template>

    <template #cta>Delete</template>
  </CustomModal>
</template>

<style lang="scss">
@import "@/assets/css/variables";

.delete-modal__icon path {
  fill: $red;
}
</style>
