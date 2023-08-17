import "./assets/css/tailwind.css";
import { createApp } from "vue";
import router from "./router.js";
import numeral from "numeral";
import App from "./App.vue";
import { vue3Spinner } from "vue3-spinner";
import moment from "moment";
// import "vue-loading-overlay/dist/vue-loading.css";
const app = createApp(App);
app.use(router);
app.use(vue3Spinner);
app.use(moment);

app.config.globalProperties.$filters = {
  dollarFilter(value) {
    if (!value) {
      return "$ 0";
    }

    return numeral(value).format("($ 0.00a)");
  },
  percentFilter(value) {
    if (!value) {
      return "0 %";
    }

    return `${Number(value).toFixed(2)}%`;
  },
  convertDate(dateIso, format = 1) {
    if (!dateIso) {
      return "0000-00-00T00:00:00.000Z";
    } else {
      if (format == 1) {
        return moment(dateIso).format("YYYY-MM-DD H:mm A");
      } else {
        return moment(dateIso).format("MMM-DD, hh:mm A");
      }
    }
  },
};

app.mount("#app");
