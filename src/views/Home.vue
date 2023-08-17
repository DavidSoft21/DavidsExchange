<template>
  <div class="">
    <BounceLoader :loading="isLoading" :color="'#68d391'" :size="'400px'" />
    <px-assets-table v-show="!isLoading" :assets="assets" />
  </div>
</template>
<style></style>
<script>
import PxAssetsTable from "../components/PxAssetsTable.vue";
import api from "../api.js";
export default {
  name: "Home",
  components: { PxAssetsTable },
  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },

  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then((response) => (this.assets = response))
      .catch((error) => console.error(error))
     this.isLoading = false
  },
};
</script>
