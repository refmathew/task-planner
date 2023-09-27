<script setup>
import { ref, computed } from "@nuxtjs/composition-api";

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const sectionOne = computed(() => {
  return {
    title: "General Details",
    fields: [
      {
        title: "Date of Birth",
        datum: props.user.generalDetails.dob,
      },
      {
        title: "Gender",
        datum: props.user.generalDetails.gender,
      },
      {
        title: "Civil Status",
        datum: props.user.generalDetails.civilStatus,
      },
      {
        title: "Nationality",
        datum: props.user.generalDetails.nationality,
      },
    ],
  };
});

const sectionTwo = computed(() => {
  return {
    title: "Professional Status",
    fields: [
      {
        title: "Recent Job Title",
        datum: props.user.professionalStatus.recentJobTitle,
      },
      {
        title: "Interview Availability",
        datum: props.user.professionalStatus.interviewAvailability,
      },
      {
        title: "Current Monthly Salary (Gross)",
        datum: `Php ${props.user.professionalStatus.currentMontlySalary}`,
        isTextGreen: true,
      },
      {
        title: "Allowance (Non-Taxable)",
        datum: props.user.professionalStatus.allowance,
      },
      {
        title: "Pre-employment Leaves",
        datum: props.user.professionalStatus.preEmploymentLeaves.join(", "),
      },
      {
        title: "Where can you work?",
        datum: props.user.professionalStatus.workLocationAvailability,
      },
      {
        title: "Estimated Travel Time to Office",
        datum: props.user.professionalStatus.officeTravelTime,
      },
      {
        title: "Connection Type",
        datum: props.user.professionalStatus.isp,
      },
      {
        title: "Website / Portfolio",
        datum: props.user.professionalStatus.websiteOrPortfolio,
      },
    ],
  };
});

const sectionThree = computed(() => {
  return {
    title: "Preferences",
    fields: [
      {
        title: "Day Shift",
        datum: props.user.preferences.shift.day,
      },
      {
        title: "Mid Shift",
        datum: props.user.preferences.shift.mid,
      },
      {
        title: "Night Shift",
        datum: props.user.preferences.shift.night,
      },
      {
        title: "English Only Polincy (EOP)",
        datum: props.user.preferences.eop,
      },
      {
        title: "Where did you hear us?",
        datum: props.user.preferences.whereGoTeamWasHeard,
      },
      {
        title: "Marketing Permission",
        datum: props.user.preferences.marketingPermission,
      },
      {
        title: "Referral",
        datum: props.user.preferences.referral,
      },
    ],
  };
});

const recommendations = ref([
  { action: "Share", subject: "Date of Birth" },
  { action: "Specify", subject: "Current Monthly Salary" },
  { action: "Add one (1)", subject: "Character Reference" },
  { action: "Add", subject: "Current Address" },
  { action: "Add at least five (5) items in", subject: "Other Skills" },
]);
</script>

<script>
export default {
  layout: "profile",
};
</script>

<template>
  <main class="profile-page flex flex-col gap-24 ml-auto">
    <ProfileReminder :user="user" />

    <div class="profile-page__main-container flex w-full gap-24">
      <!-- Main -->
      <div class="profile-page__main flex-1 shadow-sm bg-white">
        <ProfileHeadingData :user="user" />
        <ProfileSection :title="sectionOne.title" :fields="sectionOne.fields" />
        <ProfileSection :title="sectionTwo.title" :fields="sectionTwo.fields" />
        <ProfileSection
          :title="sectionThree.title"
          :fields="sectionThree.fields"
        />
      </div>

      <!-- Right sidebar -->
      <div class="profile-page__sidebar flex flex-col gap-24 w-[24%]">
        <ProfileSidebarVideo />
        <ProfileSidebarProgress :user-name="user.name.first" :progress="100" />
        <ProfileSidebarProgress
          :user-name="user.name.first"
          :progress="50"
          :recommendations="recommendations"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
