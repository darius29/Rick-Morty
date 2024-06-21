import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Character = ({ isLoading, items }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/character/${id}`);
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Grid>
      {items.map((item) => (
        <Card
          key={item.id}
          onClick={() => handleCardClick(item.id)}>
          <CardImage
            src={item.image}
            alt={item.name}
          />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            <CardSubtitle>Status: {item.status}</CardSubtitle>
            <CardSubtitle>Species: {item.species}</CardSubtitle>
            <CardSubtitle>Gender: {item.gender}</CardSubtitle>
          </CardBody>
        </Card>
      ))}
    </Grid>
  );
};

export default Character;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background: #2c3e50;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardBody = styled.div`
  padding: 20px;
`;
