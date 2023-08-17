<template>
  <div class="flex-col items-center">
    <h1 class="text-gray-700 text-6xl uppercase">Error!</h1>
    <h1 class="text-gray-700 text-xl uppercase">
      La pagina solicitada no exite.
    </h1>
    <router-link
      to="/"
      class="bg-green-400 mt-2 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >Inicio</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Error",
};
</script>
