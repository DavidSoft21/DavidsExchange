<template>
  <main id="app">
    <px-header :links="links" class="" />
    <router-view
      class="container px-5 sm:px-20 py-20 flex justify-center"
    ></router-view>
  </main>
</template>

<script>
import PxHeader from "./components/PxHeader.vue";
export default {
  name: "app",
  components: { PxHeader },
  data() {
    return {
      links: [
        {
          title: "BTC",
          to: { name: "coin-detail", params: { id: "bitcoin" } },
        },
        {
          title: "ETH",
          to: { name: "coin-detail", params: { id: "ethereum" } },
        },
        {
          title: "THT",
          to: { name: "coin-detail", params: { id: "tether" } },
        },
      ],
    };
  },
};
</script>

<style></style>
