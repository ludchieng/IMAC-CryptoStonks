import moment from 'moment'

const fetchExchangeRates = async (currency, count, step = 'hours') => {
  return await fetch(`https://api.nomics.com/v1/exchange-rates/history`
      + `?key=${process.env.REACT_APP_NOMICS_API_KEY}`
      + `&currency=${currency}`
      + `&start=${moment(new Date()).subtract(count, step).toISOString()}`
      + `&end=${moment(new Date()).toISOString()}`
      + `&format=json`)
};

export default fetchExchangeRates;
