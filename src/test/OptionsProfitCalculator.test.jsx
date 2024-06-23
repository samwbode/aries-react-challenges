import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import OptionsProfitCalculator from '../components/OptionsProfitCalculator';
import { setup } from "goober";

setup(React.createElement, undefined, undefined);

const initialData = [
  {
    strike_price: 100,
    type: 'Call',
    bid: 10,
    ask: 12,
    long_short: 'long',
    expiration_date: '2024-12-31',
  },
  {
    strike_price: 105,
    type: 'Put',
    bid: 5,
    ask: 7,
    long_short: 'short',
    expiration_date: '2024-12-31',
  },
];

test('renders OptionsProfitCalculator with initial data', () => {
  render(<OptionsProfitCalculator optionsData={initialData} />);
  
  expect(screen.getByText('Options Profit Calculator')).toBeInTheDocument();
  expect(screen.getByText('Type')).toBeInTheDocument();
  expect(screen.getByText('Bid')).toBeInTheDocument();
  expect(screen.getByText('Ask')).toBeInTheDocument();
  expect(screen.getByText('Long/Short')).toBeInTheDocument();
  expect(screen.getByText('Expiration Date')).toBeInTheDocument();
});

test('handles input change', () => {
  render(<OptionsProfitCalculator optionsData={initialData} />);
  
  // Change strike price input
  const strikePriceInput = screen.getAllByRole('spinbutton')[0];
  fireEvent.change(strikePriceInput, { target: { value: '110' } });
  expect(strikePriceInput.value).toBe('110');
});
