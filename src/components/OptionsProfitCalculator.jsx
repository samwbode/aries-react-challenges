import { styled } from 'goober';
import React, { useState, useMemo } from 'react';
import { calculateMetrics, generateDataPoints } from '../utils/utils.js';
import OptionsDataTable from './OptionsDataTable.jsx';
import OptionsDataChart from './OptionsDataChart.jsx';

const Container = styled('div')`
  font-family: Arial, sans-serif;
  text-align: center;
`;

const Title = styled('h1')`
  color: #333;
`;

const OptionsProfitCalculator = ({ optionsData: initialData }) => {
  const [optionsData, setOptionsData] = useState(initialData);

  const handleInputChange = (index, field, value) => {
    const updatedData = [...optionsData];
    updatedData[index][field] = field === 'strike_price' || field === 'bid' || field === 'ask'
      ? parseFloat(value) : value;
    setOptionsData(updatedData);
  };

  const data = useMemo(() => generateDataPoints(optionsData), [optionsData]);
  const { maxProfit, maxLoss, breakEvenPoints } = useMemo(() => calculateMetrics(data), [data]);

  return (
    <Container>
      <Title>Options Profit Calculator</Title>
      <OptionsDataTable optionsData={optionsData} handleInputChange={handleInputChange} />
      <OptionsDataChart
        data={data}
        maxLoss={maxLoss}
        maxProfit={maxProfit}
        breakEvenPoints={breakEvenPoints}
      />
    </Container>
  );
};

export default OptionsProfitCalculator;
