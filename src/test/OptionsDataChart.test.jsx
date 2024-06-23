import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OptionsDataChart from '../components/OptionsDataChart';
import { setup } from "goober";

setup(React.createElement, undefined, undefined);

const data = [
  { price: 90, totalProfitLoss: -10 },
  { price: 100, totalProfitLoss: 0 },
  { price: 110, totalProfitLoss: 10 },
];

const maxProfit = 10;
const maxLoss = -10;
const breakEvenPoints = [100];

test('renders OptionsDataChart with data and metrics', () => {
  render(<OptionsDataChart data={data} maxLoss={maxLoss} maxProfit={maxProfit} breakEvenPoints={breakEvenPoints} />);
  
  // Check for metrics
  expect(screen.getByText('Max Profit: 10.00')).toBeInTheDocument();
  expect(screen.getByText('Max Loss: -10.00')).toBeInTheDocument();
  expect(screen.getByText('Break Even Points: 100')).toBeInTheDocument();
  
  // Check for chart elements
  expect(screen.getByText('Underlying Price')).toBeInTheDocument();
  expect(screen.getByText('Total Profit/Loss')).toBeInTheDocument();
});
