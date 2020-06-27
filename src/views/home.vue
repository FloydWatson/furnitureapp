<template>
  <div class="container">
    <div
      v-for="item in allFurniture"
      :key="item.id"
      class="card"
      style="width: 18rem;"
    >
      <div class="card-body">
        <h5 class="card-title">
          {{ item.name }}
        </h5>
        <p class="card-text">
          Click on the button below to be pushed to item detail screen
        </p>
        <div>
          <button class="btn btn-primary" @click="pushToItem(item.id)">
            {{ item.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["allFurniture"]),
  },
  methods: {
    pushToItem(id) {
      // add the id to route
      this.$router.push({
        path: `/furniture-detail/${id}`,
      });
    },
  },
};
</script>

<style></style>
