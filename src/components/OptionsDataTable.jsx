import React from "react";
import { styled } from "goober";
import { formatDate } from "../utils/utils";

const Table = styled('table')`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
`;

const TableHeader = styled('th')`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TableCell = styled('td')`
  border: 1px solid #ddd;
  padding: 8px;
`;

const EditableInput = styled('input')`
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
`;

const StyledSelect = styled('select')`
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
`;
const OptionsDataTable = ({ optionsData, handleInputChange }) => {
    console.log('option data: ', optionsData);
    return (
        <Table>
            <thead>
                <tr>
                    <TableHeader>Strike Price</TableHeader>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Bid</TableHeader>
                    <TableHeader>Ask</TableHeader>
                    <TableHeader>Long/Short</TableHeader>
                    <TableHeader>Expiration Date</TableHeader>
                </tr>
            </thead>
            <tbody>
                {optionsData.map((option, index) => (
                    <tr key={index}>
                        <TableCell>
                            <EditableInput
                                type="number"
                                value={option.strike_price}
                                onChange={(e) => handleInputChange(index, 'strike_price', e.target.value)}
                            />
                        </TableCell>
                        <TableCell>
                            <StyledSelect
                                value={option.type}
                                onChange={(e) => handleInputChange(index, 'type', e.target.value)}
                            >
                                <option value="Call">Call</option>
                                <option value="Put">Put</option>
                            </StyledSelect>
                        </TableCell>
                        <TableCell>
                            <EditableInput
                                type="number"
                                value={option.bid}
                                onChange={(e) => handleInputChange(index, 'bid', e.target.value)}
                            />
                        </TableCell>
                        <TableCell>
                            <EditableInput
                                type="number"
                                value={option.ask}
                                onChange={(e) => handleInputChange(index, 'ask', e.target.value)}
                            />
                        </TableCell>
                        <TableCell>
                            <StyledSelect
                                value={option.long_short}
                                onChange={(e) => handleInputChange(index, 'long_short', e.target.value)}
                            >
                                <option value="long">Long</option>
                                <option value="short">Short</option>
                            </StyledSelect>
                        </TableCell>
                        <TableCell>
                            <EditableInput
                                type="date"
                                value={formatDate(option.expiration_date)}
                                onChange={(e) => handleInputChange(index, 'expiration_date', e.target.value)}
                            />
                        </TableCell>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
};

export default OptionsDataTable;