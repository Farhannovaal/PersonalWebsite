<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import About from "../components/About.vue";

const name = "Farhan Noval Hidayat";
const job = "Fullstack Developer";
const description =
  "I am a full stack developer with experience in problem-solving and building applications and websites using PHP and JavaScript programming languages. I am proficient in well-known frameworks such as Laravel, Livewire, Vue.js, and React.js, I also have the ability to work with SQL databases, including MySQL, PostgreSQL, and DBeaver.";
const image = "https://source.unsplash.com/1600x1500/?programming";
</script>

<template>
 <div class="container">
  <div class="row">
    <div class="col-12">
      <div class="home-wrapper row">
        <div class="col-md-6">
          <div class="img-home">
            <!-- Your image component goes here -->
            <TheWelcome :name="name" :job="job" :description="description"  />
          </div>
        </div>
        <div class="col-md-6">
          <div class="about-home">
            <!-- Your About component goes here -->
            <About
              small-description="Farhan Noval Hidayat || Developer"
              description="Hello, I'm Farhan, an individual passionate about technology who closely follows technological advancements. I have experience in the tech industry and aspire to build a career in the IT world. I aim to leverage my skills and education to seize opportunities and integrate the knowledge I've acquired."
              github="Farhannovaal"
              linkedin="farhan-noval-38559a140"
              instagram="farhannovaaal"
              :image="image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
