import React from "react";
import styled from "styled-components";

const Dropdown = ({ getStatus, getGender }) => {
  return (
    <DropdownContainer>
      <Select onChange={(e) => getStatus(e.target.value)}>
        <option value="">All Statuses</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </Select>
      <Select onChange={(e) => getGender(e.target.value)}>
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </Select>
    </DropdownContainer>
  );
};

export default Dropdown;

const DropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
`;
