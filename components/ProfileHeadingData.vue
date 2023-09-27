<script setup>
defineProps({ user: { type: Object, required: true } });
</script>

<template>
  <div
    class="profile-heading-data group relative flex border-b border-solid border-gray-100"
  >
    <!-- Image -->
    <div
      class="profile-heading-data__image p-24 border-r border-solid border-gray-100"
    >
      <img class="rounded-full" :src="user.profile.imgSrc" alt="User Image" />
    </div>

    <div class="profile-heading-data__right flex-1 flex flex-col gap-16 p-24">
      <!-- Name -->
      <div
        class="profile-heading-data__name-and-title flex flex-col gap-8 font-medium"
      >
        <div
          class="profile-heading-data__name font-semibold text-[2.4rem] text-secondary"
        >
          {{ `${user.name.first} ${user.name.middle}. ${user.name.last}` }}
        </div>
        <div
          class="profile-heading-data__title font-semibold text-md text-gray-700"
        >
          {{ user.title }}
        </div>
      </div>

      <!-- Degree -->
      <ProfileHeadingDatum icon-name="graduation-cap" :datum="user.degree" />

      <!-- Bottom part -->
      <div class="profile-heading-data__bottom flex justify-between w-[90%]">
        <ProfileHeadingDatum
          icon-name="briefcase"
          :datum="`${user.exp} years`"
        />
        <ProfileHeadingDatum
          icon-name="calendar-check"
          :datum="user.availability"
          :isSolid="false"
        />
        <ProfileHeadingDatum
          icon-name="dollar-sign"
          :datum="`Php ${user.desiredSalary}`"
          color="success"
        />
      </div>
    </div>
    <button>
      <font-awesome-icon
        class="absolute opacity-0 right-24 top-24 text-gray-600 group-hover:!opacity-100"
        icon="fa-regular fa-pen-to-square"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
