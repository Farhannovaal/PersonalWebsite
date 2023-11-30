<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import About from "../components/About.vue";

const name = "Farhan Noval Hidayat";
const job = "Web Developer";
const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?";
const image = "https://source.unsplash.com/1600x1500/?programming";
</script>

<template>
    <TheWelcome :name="name" :job="job" :description="description" :image="image" />
<About
  small-description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?"
  github="Farhannovaal"
  linkedin="farhan-noval-38559a140"
  instagram="farhannovaaal"
  />
</template>
