module.exports = function makeExchange(currency) {
  if (currency <= 0) return {};
  if (currency >= 10000)
    return { error: "You are rich, my friend! We don't have so much coins for exchange" };

  const result = {};
  const config = {
    H: 50,
    Q: 25,
    D: 10,
    N: 5,
    P: 1
  };

  for (const par in config) {
    if (config.hasOwnProperty(par)) {
      if (Math.floor(currency / config[par]) !== 0) {
        result[par] = Math.floor(currency / config[par]);
        currency = currency % config[par];
      }
    }
  }

  return result;
};
