<script setup>
import { ref, computed } from "@nuxtjs/composition-api";
import { useElementSize } from "@vueuse/core";

// User data
const user = ref({
  name: {
    first: "Reyven",
    middle: "S",
    last: "Biloy",
  },
  email: "reyvenb@gmail.com",
  title: "UI/UX Designer",
  degree: "Bachelor of Science in Computer Science",
  exp: "12",
  availability: "Immediately",
  desiredSalary: "35,000",
  generalDetails: {
    dob: "07 July 1986",
    gender: "Male",
    civilStatus: "Married",
    nationality: "Filipino",
  },
  professionalStatus: {
    recentJobTitle: "Web Designer and Developer",
    interviewAvailability: null,
    currentMontlySalary: "30,000",
    allowance: null,
    preEmploymentLeaves: ["07 July - Birthday"],
    workLocationAvailability: "Office and Home",
    officeTravelTime: 15,
    isp: "Globe Broadband",
    websiteOrPortfolio: null,
  },
  preferences: {
    shift: {
      day: null,
      mid: null,
      night: null,
    },
    eop: null,
    whereGoTeamWasHeard: null,
    marketingPermission: null,
    referral: null,
  },
  profile: {
    imgSrc: "https://i.pravatar.cc/120?img=68",
    status: {
      profile: 75,
      resume: 50,
      assessment: 0,
      video: 0,
    },
  },
  notifications: [
    {
      title: "Notification 1",
      subtitle: "This is the first notification",
      link: "#",
    },
    {
      title: "Notification 2",
      subtitle: "This is the second notification",
      link: "#",
    },
  ],
});

// Widths of main's child
const $profileLayoutMain = ref(null);
const { width: profileLayoutMainWidth } = useElementSize($profileLayoutMain);
const sidebarWidthPercent = 0.2;
const baseFontSize = 10;
const mainGap = 24;
const sidebarWidth = computed(() => {
  return `${
    (profileLayoutMainWidth.value / baseFontSize) * sidebarWidthPercent
  }rem`;
});
const pageWidth = computed(() => {
  return `calc(80% - ${mainGap}px)`;
});
</script>

<template>
  <div
    class="flex flex-col items-center w-full min-h-screen gap-24 text-sm profile-layout bg-gray-50"
  >
    <!-- Nav -->
    <ProfileNav class="sticky z-50 top-0" :user="user" />

    <!-- Main -->
    <div
      class="profile-layout__main relative w-[88%] max-w-[144rem] pb-24"
      ref="$profileLayoutMain"
    >
      <!-- Sidebar -->
      <ProfileSidebar
        class="fixed top-[9.6rem]"
        :style="{ width: sidebarWidth }"
        :notifications="user.notifications.length"
      />
      <!-- Main page -->
      <NuxtChild :style="{ width: pageWidth }" :user="user" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
