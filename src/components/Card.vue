<script setup>
const props = defineProps({
  title: String,
  class: String,
});
</script>

<template>
  <div class="card shadow bg-body rounded-4" :class="class">
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 0px;
}
</style>
