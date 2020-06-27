<template>
  <!-- Check to make sure item isnt null before loading. just to stop us from getting any errors on runtime -->
  <div
    class="card"
    style="width: 18rem;"
    v-if="loadedItem != null && loadedItem != null"
  >
    <div class="card-body">
      <h5 class="card-title">
        {{ loadedItem.name }}
      </h5>
      <p class="card-text">Dim1: {{ loadedItem.dim1 }}</p>
      <p class="card-text">Dim2: {{ loadedItem.dim2 }}</p>
      <div>
        <button class="btn btn-primary" @click="pushToHome">Home</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // loaded item from furniture page
    loadedItem: Object,
  },
  methods: {
    pushToHome() {
      this.$router.push({
        path: `/home`,
      });
    },
  },
};
</script>

<style></style>
