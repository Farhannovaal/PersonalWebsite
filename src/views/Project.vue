<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";
import CardItem from "../components/CardProject.vue";
import List from "../components/ItemList.vue";

const projectInternship = ref([
  {
    year: "2022 - 2023",
    job: "Kominfo - Simpatik ",
    location: "PT. Javan Cipta Solusi",
    description:
      "Collaborate with the team to develop website applications, handling both backend and frontend tasks using programming languages such as Javascript, Laravel, VueJs, and ReactJs.",
      image:`https://api.lorem.space/image/dashboard?w=150&h=150`,
    detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    year: "2023 - 2024",
    job: "PLN - COS",
    location: "PT. Javan Cipta Solusi",
    description:
      "Collaborate with the team to develop website applications, handling both backend and frontend tasks using programming languages such as Javascript, Laravel, VueJs, and ReactJs.",
      image:`https://api.lorem.space/image/crm?w=150&h=150`,
      detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },

]);

const projectPersonal = ref([
  {
    year: "2021 - 2022",
    job: "Rumah Ngaji Yatim Assabil",
    location: "Farhan Noval",
    description:
      "Collaborate with the team to develop website applications, handling both backend and frontend tasks using programming languages such as Javascript, Laravel, VueJs, and ReactJs.",
      image:`https://api.lorem.space/image/crm?w=150&h=150`,
      detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      
  },
  {
    year: "2023 - Present",
    job: "News Page",
    location: "Farhan Noval",
    description:
      "Collaborate with the team to develop website applications, handling both backend and frontend tasks using programming languages such as Javascript, Laravel, VueJs, and ReactJs.",
      image:`../assets/github.svg`,
      detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },

]);
</script>
<template>
<div class="" id="project">
      <div class="col-md-6 mx-auto">
        <h1 class="text-center fw-bold fs-1 mt-5">Portofolio</h1>
  
         <!-- project Internship -->
         <h2 class="fw-bold mt-5">Internship Project</h2>
        <Card v-for="data in projectInternship" class="mb-4">
          <CardItem class="rounded"
            :year="data.year"
            :job="data.job"
            :location="data.location"
            :description="data.description"
            :image="data.image"
            :detail="data.detail"
            />
        </Card>

         <!-- project Internship -->
         <h2 class="fw-bold mt-5">Personal Project</h2>
        <Card v-for="data in projectPersonal" class="mb-4">
          <CardItem class="rounded"
            :year="data.year"
            :job="data.job"
            :location="data.location"
            :description="data.description"
            :image="data.image"
            :detail="data.detail"
            />
        </Card>
  
  
  
      </div>
    </div>
</template>

<style scoped>
  #resume {
    margin-top: 100px;
    min-height: 100vh;
  }
  
  #project .card {
    border: 0px;
  }
  </style>
  