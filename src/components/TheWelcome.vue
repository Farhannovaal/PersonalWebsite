<script setup>
const props = defineProps({
  name: String,
  job: String,
  description: String,
  image: String,
});
</script>

<template>
  <div
    class="container d-flex align-items-center justify-content-center"
    style="height: 100vh; wight: 100vh; margin-top: 30px;">
    <div class="row d-flex align-items-center items-centers">
      <div class="col-md-6 d-grid gap-3" style="max-width: 50rem">
        <h1 class="fs-1 fw-bold" v-html="props.name" />
        <h4 class="text-decoration-underline">{{ props.job }}</h4>
        <p align="justify">
          {{ props.description }}
        </p>
      </div>
    </div>
  </div>
</template>
