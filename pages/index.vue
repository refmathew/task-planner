<script setup></script>

<template>
  <main
    class="home flex flex-col items-center gap-[4.8rem] min-h-screen pt-[25.6rem]"
  >
    <div
      class="home__heading-container flex flex-col items-center gap-[.8rem] text-center"
    >
      <h1 class="home__heading-main font-medium text-2xl">
        Welcome to Task Planner
      </h1>
      <h2 class="home__heading-subheading max-w-[26.8rem] font-normal text-md">
        Get things done with your day, a list that refreshes everyday
      </h2>
      <NuxtLink
        class="home__tasks-link rounded-[.4rem] mt-[.8rem] px-[1.6rem] py-[.8rem] bg-primary text-md font-normal text-white !no-underline"
        to="/tasks"
      >
        View tasks
      </NuxtLink>
    </div>
    <TaskInput />
  </main>
</template>

<style lang="scss" scoped></style>
