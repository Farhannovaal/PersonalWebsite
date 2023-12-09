<template>
  <div class="row px-3 py-2 project-wrap">
    <div class="col-md-4">
      <div class="">
        <img v-bind:src="image" alt="">
      </div>
    </div>
    <div class="col-md-8 flex text-center" id="description">
      <div>
        <p id="job" class="font-weight-bold display-6">{{ props.job }}</p>
        <p id="location" class="text-secondary flex">
          <i>{{ props.location }} -  {{ props.year }}</i>
        </p>
    </div>
      <p class="align-self-center mt-3 lg-mt-0" align="justify">
        {{ props.description }}
      </p>
    </div>
    <button class="rounded mt-2" @click="isOpen=true"> Open Project </button>
    <div class="project-show" v-if="isOpen">
      <div class="data-detail">
        <p> {{ props.detail }}</p>
      </div>
      <button class="rounded mt-2" @click="isOpen=false"> Close Project </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  year: Number,
  job: String,
  location: String,
  description: String,
  yearColor: String,
  image:String,
  detail:String
});
import { ref } from 'vue'

const isOpen = ref(false)
</script>


<style scoped>
.col-md-4 {
  height: 150px;
  background-color: rgb(248, 248, 248);
  border-radius: 10px;
}

.col-md-4 p {
  margin: 1px 0px;
}

.col-md-4 #year {
  font-weight: bold;
}

.col-md-4 #location {
  font-size: 13px;
}

.project-show{
  position: absolute;
  z-index: 2;
  backdrop-filter: blur(5px);
  /* min-height: 300px; */
  border-radius: 5px;
  text-align: center;
}

.data-detail{
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 300px;
}

.project-show p{
  background-color: white;
  /* height: 300px; */
}
.project-wrap{
  position: relative;
}
</style>
