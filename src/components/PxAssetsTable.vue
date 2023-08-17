<template>
  <table class="w-full">
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th :class="{ up: this.sortOrder === 1, down: this.sortOrder === -1 }">
          <span class="underline cursor-pointer" @click="changeOrder"
            >Ranking</span
          >
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block">
          <input
            class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="a in filteredAssets"
        :key="a.id"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      >
        <td>
          <img
            class="w-6 h-6"
            :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`"
            :alt="a.name"
          />
        </td>
        <td class="text-blue-500">
          #
          <b>
            {{ a.rank }}
          </b>
        </td>
        <td>
          <router-link
            class="hover:underline font-semibold hover:text-gray-700 text-gray-500"
            :to="{ name: 'coin-detail', params: { id: a.id } }"
          >
            {{ a.name }}
          </router-link>
          <small class="ml-1 font-semibold text-blue-500">
            {{ a.symbol }}
          </small>
        </td>
        <td class="text-yellow-600 font-semibold">
          {{ $filters.dollarFilter(a.priceUsd) }}
        </td>
        <td class="text-green-600 font-semibold">
          {{ $filters.dollarFilter(a.marketCapUsd) }}
        </td>
        <td
          :class="
            a.changePercent24Hr.includes('-')
              ? 'text-red-600 font-semibold down '
              : 'text-green-600 font-semibold up'
          "
        >
          {{ $filters.percentFilter(a.changePercent24Hr) }}
        </td>
        <td class="hidden sm:block">
          <px-button @custom-click="redirect(a.id)"> Detalle </px-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import PxButton from "./PxButton.vue";
export default {
  name: "PxAssetsTable",

  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      filter: "",
      sortOrder: 1,
    };
  },
  computed: {
    filteredAssets() {
      const altOrder = this.sortOrder === 1 ? -1 : 1;

      return this.assets
        .filter(
          (a) =>
            a.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
            a.name.toLowerCase().includes(this.filter.toLowerCase())
        )
        .sort((a, b) => {
          if (parseInt(a.rank) > parseInt(b.rank)) {
            return this.sortOrder;
          }
          return altOrder;
        });
    },
  },
  components: {
    PxButton,
  },
  methods: {
    redirect(id) {
      this.$router.push({ name: "coin-detail", params: { id: id } });
    },
    changeOrder() {
      this.sortOrder = this.sortOrder === 1 ? -1 : 1;
    },
  },
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
