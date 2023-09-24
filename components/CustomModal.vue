<script setup>
import { ref, onMounted } from "vue";

// Component
defineProps({
  // Theme of modal
  color: {
    type: String,
    required: true,
  },
});
defineEmits(["ctaClick", "cancel"]);

// Attach modal to body so as to make
// the overlay cover the whole page
const $modal = ref(null);
onMounted(() => {
  document.body.appendChild($modal.value);
});
</script>

<template>
  <div
    class="overlay fixed inset-0 z-50 grid w-screen h-screen bg-black place-items-center bg-secondary/75"
    ref="$modal"
    @click.self="$emit('cancel')"
  >
    <div
      class="custom-modal flex flex-col gap-[1.6rem] w-[38.4rem] p-[2.4rem] bg-white rounded-[.4rem] shadow-xl text-sm text-gray-700"
    >
      <div class="custom-modal__info flex gap-[1.6rem] items-start">
        <div
          class="custom-modal__icon p-[.8rem] rounded-full border-2 border-solid"
          :class="[`border-${color}`]"
        >
          <slot name="icon" />
        </div>
        <div class="custom-modal__text flex-1 flex flex-col gap-[.8rem]">
          <div class="custom-modal__heading font-medium text-md">
            <slot name="heading" />
          </div>
          <div class="custom-modal__body">
            <slot name="body" />
          </div>
        </div>
      </div>
      <div class="custom-modal__buttons flex justify-end gap-[1.6rem]">
        <button
          class="custom-modal__cancel-button px-[1.6rem] py-[.8rem] bg-white border border-solid !border-gray-300 rounded-[.4rem] shadow-sm font-bold"
          @click="$emit('cancel')"
        >
          Cancel
        </button>
        <button
          class="custom-modal__delete-button px-[1.6rem] py-[.8rem] rounded-[.4rem] shadow-sm font-bold text-white"
          :class="[`bg-${color}`]"
          @click="$emit('ctaClick')"
        >
          <slot name="cta" />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
