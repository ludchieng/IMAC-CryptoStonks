const fetchExchangeRates = async () => {
  return await fetch(`https://cryptostonks.ludchieng.fr/exchange-rates`)
};

export default fetchExchangeRates;
