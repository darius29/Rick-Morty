import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CharacterItem = ({ item }) => {
  return (
    <StyledLink to={"/character/" + item.id}>
      <Card>
        <CardHeader>
          <CardImage
            src={item.image}
            alt={item.name}
          />
        </CardHeader>
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          <CardDetail>Status: {item.status}</CardDetail>
          <CardDetail>Species: {item.species}</CardDetail>
          <CardDetail>Gender: {item.gender}</CardDetail>
        </CardBody>
      </Card>
    </StyledLink>
  );
};

export default CharacterItem;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Card = styled.div`
  background: #1e272e;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const CardHeader = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const CardBody = styled.div`
  padding: 15px;
  color: #ecf0f1;
`;

const CardTitle = styled.h4`
  font-size: 1.5rem;
  color: #ff4757;
  margin-bottom: 10px;
`;

const CardDetail = styled.p`
  font-size: 1rem;
  color: #dfe4ea;
  margin: 5px 0;
`;
