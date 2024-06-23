# Options Profit Calculator

This project is a React-based web application that allows users to calculate and visualize the profit or loss of options trading strategies. Users can input various options data, and the application will generate and display the profit/loss chart and key metrics like maximum profit, maximum loss, and break-even points.

## Table of Contents

- [Options Profit Calculator](#options-profit-calculator)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Components](#components)
    - [OptionsProfitCalculator](#optionsprofitcalculator)
    - [OptionsDataTable](#optionsdatatable)
    - [OptionsDataChart](#optionsdatachart)
  - [Utilities](#utilities)
  - [Deloyment](#deployment)
  - [Getting Started](#getting-staryed)
  - [Prerequisites](#prerequisites)
  - [Installation](#testing)
  - [Testing](#testing)
  - [Usage](#usage)

## Features

- Input options data including strike price, type (call/put), bid, ask, long/short, and expiration date.
- Generate profit/loss data points based on the input options data.
- Visualize profit/loss using a line chart.
- Display key metrics such as maximum profit, maximum loss, and break-even points.

## Components

1. **OptionsProfitCalculator.jsx**
    - Main component that handles the state and renders the table and chart components.

2. **OptionsDataTable.jsx**
    - Component that renders the editable options data table.

3. **OptionsDataChart.jsx**
    - Component that renders the chart and displays the calculated metrics.

## Utilities

- **calculateProfitLoss**: Function to calculate the profit or loss for a given option and underlying price.
- **generateDataPoints**: Function to generate data points for the chart based on the options data.
- **calculateMetrics**: Function to calculate maximum profit, maximum loss, and break-even points.
- **formatDate**: Function to format date strings for input fields.

## Deployment

The project is deployed using Vercel and can be accessed at: [Options Profit Calculator](https://aries-react-challenges.vercel.app/)

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

## Prerequisites

Make sure you have the following software installed on your system:

- Node.js (v14.x or later)
- npm (v6.x or later)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/samwbode/aries-react-challenges.git
   cd aries-react-challenges

2. Install dependencies:

   ```sh
   npm install

## Testing

1. Run the test in the terminal by running:

   ```sh
   npm test


## Usage

1. Start the development server:

   ```sh
   npm start

2. Open your browser and navigate to http://localhost:3000.

3. Input your options data in the table to see the profit/loss chart and key   
   metrics.
