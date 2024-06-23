import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OptionsDataTable from '../components/OptionsDataTable';
import { setup } from "goober";

setup(React.createElement, undefined, undefined);


const optionsData = [
  {
    strike_price: 100,
    type: 'Call',
    bid: 10,
    ask: 12,
    long_short: 'long',
    expiration_date: '2024-12-31',
  },
];

test('renders OptionsDataTable with options data', () => {
  render(<OptionsDataTable optionsData={optionsData} handleInputChange={() => {}} />);
  
  // Check for input values
  expect(screen.getByDisplayValue('100')).toBeInTheDocument();
  expect(screen.getByDisplayValue('10')).toBeInTheDocument();
  expect(screen.getByDisplayValue('12')).toBeInTheDocument();
  expect(screen.getByDisplayValue('2024-12-31')).toBeInTheDocument();
});

test('calls handleInputChange on input change', () => {
  const handleInputChange = jest.fn();
  render(<OptionsDataTable optionsData={optionsData} handleInputChange={handleInputChange} />);
  
  const strikePriceInput = screen.getByDisplayValue('100');
  fireEvent.change(strikePriceInput, { target: { value: '110' } });
  expect(handleInputChange).toHaveBeenCalledWith(0, 'strike_price', '110');
});
