
export const calculateProfitLoss = (option, underlyingPrice) => {
  const { strike_price, type, bid, ask, long_short } = option;
  let profitLoss = 0;

  if (type === 'Call') {
    if (long_short === 'long') {
      profitLoss = Math.max(underlyingPrice - strike_price, 0) - ask;
    } else {
      profitLoss = Math.min(strike_price - underlyingPrice, 0) + bid;
    }
  } else if (type === 'Put') {
    if (long_short === 'long') {
      profitLoss = Math.max(strike_price - underlyingPrice, 0) - ask;
    } else {
      profitLoss = Math.min(underlyingPrice - strike_price, 0) + bid;
    }
  }

  return profitLoss;
};


  export const generateDataPoints = (optionsData) => {
    const minPrice = Math.min(...optionsData.map(opt => opt.strike_price)) - 10;
    const maxPrice = Math.max(...optionsData.map(opt => opt.strike_price)) + 10;
    const step = 1;
  
    let dataPoints = [];
    for (let price = minPrice; price <= maxPrice; price += step) {
      let totalProfitLoss = 0;
      optionsData.forEach(option => {
        totalProfitLoss += calculateProfitLoss(option, price);
      });
      dataPoints.push({ price, totalProfitLoss });
    }
  
    return dataPoints;
  };
  
  
  export const calculateMetrics = (data) => {
    const maxProfit = Math.max(...data.map(d => d.totalProfitLoss));
    const maxLoss = Math.min(...data.map(d => d.totalProfitLoss));
    const breakEvenPoints = data.filter(d => {
      const isBreakEven = Math.abs(d.totalProfitLoss) < 1;
      return isBreakEven;
    }).map(d => d.price);
  
    return { maxProfit, maxLoss, breakEvenPoints };
  };

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate() + 1).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

  
  