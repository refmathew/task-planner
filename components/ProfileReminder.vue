<script setup>
defineProps({
  user: { type: Object, required: true },
});
</script>

<template>
  <div
    class="profile-page__reminder relative flex flex-col shadow-sm rounded bg-white text-gray-500"
  >
    <!-- Close -->
    <div
      class="profile-page__reminder-close absolute top-24 right-24 flex items-center gap-16"
    >
      <label
        class="flex items-center gap-8 h-full !mb-0 whitespace-nowrap"
        for="reminder"
      >
        <input
          class="outline-gray-500"
          type="checkbox"
          name="reminder"
          id="reminder"
        />
        Don't remind me again
      </label>
      <font-awesome-icon class="text-red" icon="fa-solid fa-xmark" />
    </div>

    <!-- Text -->
    <div
      class="profile-page__reminder-text flex flex-col w-full gap-8 px-24 pt-32 pb-24 border-b border-solid border-gray-100"
    >
      <div
        class="profile-page__reminder-heading font-semibold text-[1.8rem] text-secondary"
      >
        Welcome, <span v-text="user.name.first" />!
      </div>
      <div class="profile-page__reminder-subheading">
        <span class="text-success">You are almost done!</span> To further
        strengthen your profile, it is highly recommended for you to complete
        the 4 sections of your application.
      </div>
    </div>

    <!-- Progress -->
    <div
      class="profile-page__reminder-progress flex justify-stretch gap-32 width-full p-24"
    >
      <ProfileProgressReminder
        title="Application Profile"
        icon-name="user"
        :progress="user.profile.status.profile"
      />
      <ProfileProgressReminder
        title="Resume / CV"
        icon-name="file-lines"
        :progress="user.profile.status.resume"
      />
      <ProfileProgressReminder
        title="Assessment"
        icon-name="chart-bar"
        :progress="user.profile.status.assessment"
      />
      <ProfileProgressReminder
        title="Video Script"
        icon-name="circle-play"
        :progress="user.profile.status.video"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
