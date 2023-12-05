<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";
import CardItem from "../components/CardItem.vue";
import List from "../components/ItemList.vue";

const skill = ref([
  "HTML",
  "CSS",
  "Javascript",
  "PHP",
  "SQL",
  "Node JS",
  "jQuery",
  "Laravel",
  "Vue",
  "React",
]);

const experience = ref([
  {
    year: "2023 - Present",
    job: "Full Stack Developer",
    location: "PT. Javan Cipta Solusi",
    description:
      "Collaborate with the team to develop website applications, handling both backend and frontend tasks using programming languages such as Javascript, Laravel, VueJs, and ReactJs.",
  },
  {
    year: "2022 - 2023",
    job: "Full Stack Developer",
    location: "Wegodev Indonesia",
    description:
      "Enroll in courses and engage in practical application development to enhance skills and deepen understanding of programming languages.",
  },
  {
    year: "2022 - 2023",
    job: "Mobile Developer Flutter",
    location: "Build With Angga",
    description:
      "Enroll in a Flutter mobile development course, grasp the structure and coding principles of Flutter, and engage in hands-on practice to create mobile projects.",
  },
  {
    year: "2022",
    job: "Junior PHP Developer",
    location: "Digitalent Kominfo x University Telkom",
    description:
      "Learn and comprehend the fundamental structure of PHP programming, then apply this knowledge by creating native PHP projects through practice.",
  },
]);

const education = ref([
  {
    year: "2021 - 2024",
    major: "Management of Business",
    location: "Ikopin University",
    description:
      "Study business management to directly apply the knowledge in practical work, particularly integrating it with IT skills. This will fuel your aspiration to pursue a career in the technology sector.",
  },
  {
    year: "2019 - 2021",
    major: "Senior High School",
    location: "MA Al Ihsan Baleendah",
    description:
      "Understand and study fundamental sciences to enhance critical thinking and communication skills with arabic and english language.",
  },
  {
    year: "2015 - 2019",
    major: "Junior High School",
    location: "MTS Nurul Iman",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit fugiat quidem beatae modi eius possimus expedita, sint, eum perferendis dignissimos quas",
  },
  {
    year: "2009 - 2015",
    major: "Elementary School",
    location: "MI Al - Husaeni",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit fugiat quidem beatae modi eius possimus expedita, sint, eum perferendis dignissimos quas",
  },
]);
</script>



<template>
    <!-- make resume component -->
    <div class="container" id="resume">
      <div class="col-md-6 mx-auto">
        <h1 class="text-center fw-bold fs-1">Resume</h1>
  
        <!-- Skill -->
        <h2 class="fw-bold mt-5">Skills</h2>
        <Card>
          <List :data="skill" />
        </Card>
  
        <!-- Experience -->
        <h2 class="fw-bold mt-5">Experiences</h2>
        <Card v-for="data in experience" class="mb-4">
          <CardItem
            :year="data.year"
            :job="data.job"
            :location="data.location"
            :description="data.description" />
        </Card>
  
        <!-- Education -->
        <h2 class="fw-bold mt-5">Education</h2>
        <Card v-for="data in education" class="mb-4">
          <CardItem
            yearColor="red"
            :year="data.year"
            :job="data.major"
            :location="data.location"
            :description="data.description" />
        </Card>
      </div>
    </div>
  </template>
  
  <style scoped>
  #resume {
    margin-top: 100px;
    min-height: 100vh;
  }
  
  #experience .card,
  #education .card {
    border: 0px;
  }
  
  #position {
    height: 150px;
    background-color: rgb(248, 248, 248);
    border-radius: 10px;
  }
  
  #position p {
    margin: 1px 0px;
  }
  
  #position #year {
    color: blue;
    font-weight: bold;
  }
  
  #position #location {
    font-size: 13px;
  }
  </style>
  