import React from 'react'
import styled from 'styled-components'

import Spinner from '../ui/Spinner'
import CharacterItem from './CharacterItem'

const Character = ({ items, isLoading }) => {
  return isLoading ? (
   <Spinner />
  ) : (
  
    <Cards>

      {items.map((item) => (
        <CharacterItem key={item.id} item={item}></CharacterItem>
        ))}
    </Cards>
    
  )
}

export default Character


const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 100px;
  
`;