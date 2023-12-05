<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import About from "../components/About.vue";

const name = "Farhan Noval Hidayat";
const job = "Web Developer";
const description =
  "I am a full stack developer with experience in problem-solving and building applications and websites using PHP and JavaScript programming languages. I am proficient in well-known frameworks such as Laravel, Livewire, Vue.js, and React.js, I also have the ability to work with SQL databases, including MySQL, PostgreSQL, and DBeaver.";
const image = "https://source.unsplash.com/1600x1500/?programming";
</script>

<template>
    <TheWelcome :name="name" :job="job" :description="description" :image="image" />
<About
  small-description="Farhan Noval Hidayat || Developer"
  description="Hello, I'm Farhan, an individual passionate about technology who closely follows technological advancements. I have experience in the tech industry and aspire to build a career in the IT world. I aim to leverage my skills and education to seize opportunities and integrate the knowledge I've acquired."
  github="Farhannovaal"
  linkedin="farhan-noval-38559a140"
  instagram="farhannovaaal"
  />
</template>
