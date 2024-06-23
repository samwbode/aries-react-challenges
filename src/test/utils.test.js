import { calculateProfitLoss, generateDataPoints, calculateMetrics } from '../utils/utils';

// Unit tests for calculateProfitLoss
describe('calculateProfitLoss', () => {
    it('calculates profit/loss correctly for a long call option', () => {
      const option = {
        strike_price: 100,
        type: 'Call',
        bid: 5,
        ask: 7,
        long_short: 'long'
      };
      expect(calculateProfitLoss(option, 110)).toBe(3);  // 110 - 100 - 7 = 3
      expect(calculateProfitLoss(option, 90)).toBe(-7);  // max(90 - 100, 0) - 7 = -7
    });
  
    it('calculates profit/loss correctly for a short call option', () => {
      const option = {
        strike_price: 100,
        type: 'Call',
        bid: 5,
        ask: 7,
        long_short: 'short'
      };
      expect(calculateProfitLoss(option, 110)).toBe(-5); // min(100 - 110, 0) + 5 = -5
      expect(calculateProfitLoss(option, 90)).toBe(5);   // 100 - 90 + 5 = 5
    });
  
    it('calculates profit/loss correctly for a long put option', () => {
      const option = {
        strike_price: 100,
        type: 'Put',
        bid: 5,
        ask: 7,
        long_short: 'long'
      };
      expect(calculateProfitLoss(option, 90)).toBe(3);   // 100 - 90 - 7 = 3
      expect(calculateProfitLoss(option, 110)).toBe(-7); // max(100 - 110, 0) - 7 = -7
    });
  
    it('calculates profit/loss correctly for a short put option', () => {
      const option = {
        strike_price: 100,
        type: 'Put',
        bid: 5,
        ask: 7,
        long_short: 'short'
      };
      expect(calculateProfitLoss(option, 90)).toBe(-5);  // min(90 - 100, 0) + 5 = -5
      expect(calculateProfitLoss(option, 110)).toBe(5);  // 110 - 100 + 5 = 5
    });
  });
  
  // Unit tests for generateDataPoints
  describe('generateDataPoints', () => {
    it('generates data points correctly', () => {
      const optionsData = [
        {
          strike_price: 100,
          type: 'Call',
          bid: 5,
          ask: 7,
          long_short: 'long'
        },
        {
          strike_price: 105,
          type: 'Put',
          bid: 5,
          ask: 7,
          long_short: 'short'
        }
      ];
      const dataPoints = generateDataPoints(optionsData);
      expect(dataPoints).toHaveLength(26); // 80 to 105
      expect(dataPoints[0]).toEqual({ price: 90, totalProfitLoss: -17 });
      expect(dataPoints[dataPoints.length - 1]).toEqual({ price: 115, totalProfitLoss: 13 });
    });
  });
  
  // Unit tests for calculateMetrics
  describe('calculateMetrics', () => {
    it('calculates metrics correctly', () => {
      const data = [
        { price: 90, totalProfitLoss: -10 },
        { price: 100, totalProfitLoss: 0 },
        { price: 110, totalProfitLoss: 10 }
      ];
      const metrics = calculateMetrics(data);
      expect(metrics.maxProfit).toBe(10);
      expect(metrics.maxLoss).toBe(-10);
      expect(metrics.breakEvenPoints).toEqual([100]);
    });
  });