import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const InfoCharacter = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setCharacter(result.data);
      setIsLoading(false);
    };

    fetchCharacter();
  }, [id]);

  const handleBackClick = () => {
    navigate("/");
  };

  return isLoading ? (
    <LoadingMessage>Loading...</LoadingMessage>
  ) : (
    <CharacterDetail>
      <CharacterImage
        src={character.image}
        alt={character.name}
      />
      <CharacterInfo>
        <CharacterName>{character.name}</CharacterName>
        <CharacterAttribute>
          <strong>Status:</strong> {character.status}
        </CharacterAttribute>
        <CharacterAttribute>
          <strong>Species:</strong> {character.species}
        </CharacterAttribute>
        <CharacterAttribute>
          <strong>Gender:</strong> {character.gender}
        </CharacterAttribute>
        <CharacterAttribute>
          <strong>Origin:</strong> {character.origin.name}
        </CharacterAttribute>
        <CharacterAttribute>
          <strong>Location:</strong> {character.location.name}
        </CharacterAttribute>
      </CharacterInfo>
      <BackButton onClick={handleBackClick}>Back to List</BackButton>
    </CharacterDetail>
  );
};

export default InfoCharacter;

const LoadingMessage = styled.h1`
  text-align: center;
  color: #3498db;
`;

const CharacterDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2c3e50;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 20px auto;
`;

const CharacterImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const CharacterInfo = styled.div`
  color: #ecf0f1;
  text-align: left;
`;

const CharacterName = styled.h1`
  margin-bottom: 10px;
  color: #ff4757;
  font-size: 1.5rem;
`;

const CharacterAttribute = styled.p`
  margin: 5px 0;
  font-size: 1rem;
  color: #dfe4ea;
  line-height: 1.5;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9;
  }
`;
