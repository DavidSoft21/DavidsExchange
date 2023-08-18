const api = "https:/api.coincap.io/v2";

const getAssets = () => {
  return fetch("https://api.coincap.io/v2/assets?limit=10")
    .then((response) => response.json())
    .then((response) => response.data);
};

const getAsset = (coin) => {
  return fetch(`${api}/assets/${coin}`)
    .then((response) => response.json())
    .then((response) => response.data);
};

function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return fetch(
    `${api}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data);
}

function getMarkets(coin) {
  return fetch(`${api}/assets/${coin}/markets?limit=5`)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getExchange(id) {
  return fetch(`${api}/exchanges/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
};
