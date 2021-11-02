import React from 'react'
import Spinner from '../ui/Spinner'
import CharacterItem from './CharacterItem'



const Character = ({ items, isLoading }) => {
  return isLoading ? (
   <Spinner />
  ) : (
    <div>

    <section className='cards'>
      {items.map((item) => (
          <CharacterItem key={item.id} item={item}></CharacterItem>
          ))}
    </section>

   

    </div>
    
  )
}

export default Character
