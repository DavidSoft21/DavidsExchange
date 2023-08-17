<template>
  <div class="flex justify-center mt-10">
    <BounceLoader :loading="isLoading" :color="'#68d391'" :size="'400px'" />
  </div>
  <div class="flex-col">
    <template v-if="asset.id">
      <div class="flex flex-col sm:flex-row justify-around items-center">
        <div class="flex flex-col items-center">
          <img
            :src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`"
            :alt="asset.name"
            class="w-20 h-20 mr-5"
          />
          <h1 class="text-5xl">
            {{ asset.name }}
            <small class="sm:mr-2 text-gray-500">{{ asset.symbol }}</small>
          </h1>
        </div>

        <div class="my-10 flex flex-col">
          <ul>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Ranking</b>
              <span>#{{ asset.rank }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio actual</b>
              <span>{{ $filters.dollarFilter(asset.priceUsd) }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio más bajo</b>
              <span>{{ $filters.dollarFilter(min) }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio más alto</b>
              <span>{{ $filters.dollarFilter(max) }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio Promedio</b>
              <span>{{ $filters.dollarFilter(avg) }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Variación 24hs</b>
              <span>{{ $filters.percentFilter(asset.changePercent24Hr) }}</span>
            </li>
          </ul>
        </div>

        <div class="my-10 sm:mt-0 flex flex-col justify-center text-center">
          <button
            @click="toggleConverter"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            {{
              this.fromUsd
                ? `USD a ${this.asset.symbol}`
                : `${this.asset.symbol} a USD`
            }}
          </button>

          <div class="flex flex-row my-5">
            <label class="w-full" for="convertValue">
              <input
                v-model="convertValue"
                :placeholder="`Valor en ${fromUsd ? 'USD' : asset.symbol}`"
                id="convertValue"
                type="number"
                class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              />
            </label>
          </div>

          <span class="text-xl">
            {{ this.fromUsd ? `${this.asset.symbol}` : `USD` }} {{ $filters.dollarFilter(convertResult)}}</span
          >
        </div>
      </div>
      <div class="m-5 h-96">
        <Line :data="dataset" :options="options" />
      </div>

      <div class="flex flex-col justify-center m-5 p-5">
        <h3 class="text-xl my-10 text-center font-semibold">
          Mejores Ofertas de Cambio
        </h3>
        <table>
          <tr
            v-for="market in markets"
            :key="`${market.exchangeId}-${market.priceUsd}`"
            class="border-b"
          >
            <td class="text-green-500">
              <b>{{ market.exchangeId }}</b>
            </td>
            <td class="text-yellow-600">
              {{ $filters.dollarFilter(market.priceUsd) }}
            </td>
            <td>
              <small class="font-semibold">
                {{ market.baseSymbol }} - {{ market.quoteSymbol }}
              </small>
            </td>
            <td>
              <px-button
                :is-loading="market.isLoading || false"
                v-if="!market.url"
                @custom-click="getWebsite(market)"
              >
                <slot>Obtener Link</slot>
              </px-button>
              <a
                v-else
                class="hover:underline text-green-600"
                target="_blanck"
                >{{ market.url }}</a
              >
            </td>
          </tr>
        </table>
      </div>
    </template>
  </div>
</template>

<script>
import api from "@/api";
import PxButton from "../components/PxButton.vue";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "CoinDetail",
  components: {
    Line,
    PxButton,
  },
  data() {
    return {
      asset: {},
      history: [],
      isLoading: false,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      markets: [],
      fromUsd: true,
      convertValue: null,
    };
  },

  computed: {
    convertResult() {
      if (!this.convertValue) {
        return 0;
      }
      const result = this.fromUsd
        ? this.convertValue / this.asset.priceUsd
        : this.convertValue * this.asset.priceUsd;
      return result.toFixed(4);
    },

    min() {
      return Math.min(
        ...this.history.map((h) => parseFloat(h.priceUsd).toFixed(2))
      );
    },

    max() {
      return Math.max(
        ...this.history.map((h) => parseFloat(h.priceUsd).toFixed(2))
      );
    },

    avg() {
      return Math.abs(
        ...this.history.map((h) => parseFloat(h.priceUsd).toFixed(2))
      );
    },

    dataset() {
      return {
        labels: this.history.map((h) => this.$filters.convertDate(h.date, 2)),
        datasets: [
          {
            label: "Price",
            backgroundColor: "#68d391",
            data: this.history.map((h) => parseFloat(h.priceUsd).toFixed(2)),
          },
        ],
      };
    },
  },

  created() {
    this.getCoin();
  },

  watch: {
    $route() {
      this.getCoin();
    },
  },

  methods: {
    toggleConverter() {
      this.fromUsd = !this.fromUsd;
    },
    getWebsite(exchange) {
      exchange.isLoading = true;

      return api
        .getExchange(exchange.exchangeId)
        .then((res) => {
          //this.$set(exchange, "url", res.exchangeUrl);
          exchange.url = res.exchangeUrl;
        })
        .finally(() => {
          exchange.isLoading = false;
        });
    },
    getCoin() {
      this.isLoading = true;
      const id = this.$route.params.id;

      Promise.all([
        api.getAsset(id),
        api.getAssetHistory(id),
        api.getMarkets(id),
      ])
        .then(([asset, history, markets]) => {
          this.asset = asset;
          this.history = history;
          this.markets = markets;
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>

<style scoped>
td {
  padding: 10px;
  text-align: center;
}
</style>
