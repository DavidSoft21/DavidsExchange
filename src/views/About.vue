<template>
  <div class="flex-col items-center">
    <h1 class="text-gray-700 text-6xl">DavidExchange v1.0.0</h1>
    <p class="text-gray-600 text-xl text-center">
      Proyecto para visualizar cotizaciones de las criptomonedas más importantes
      del mercado <br />
      Este proyecto esta usando Vue Js
    </p>
    <router-link
      to="/"
      class="bg-green-400 mt-2 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >Inicio</router-link
    >
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>
