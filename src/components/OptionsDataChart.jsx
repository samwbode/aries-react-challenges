import React from "react";
import { styled } from "goober";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartContainer = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const MetricsContainer = styled('div')`
  margin-top: 20px;
`;

const OptionsDataChart = ({ data, maxLoss, maxProfit, breakEvenPoints }) => {
    return (
        <>
            <ChartContainer>
                <LineChart width={1000} height={500} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="price" type="number" domain={['dataMin', 'dataMax']} label={{ value: 'Underlying Price', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'Total Profit/Loss', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="totalProfitLoss" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ChartContainer>
            <MetricsContainer>
                <h3>Max Profit: {maxProfit.toFixed(2)}</h3>
                <h3>Max Loss: {maxLoss.toFixed(2)}</h3>
                <h3>Break Even Points: {breakEvenPoints.join(', ')}</h3>
            </MetricsContainer>
        </>
    )
};

export default OptionsDataChart