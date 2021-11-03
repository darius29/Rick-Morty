import React, {useState ,useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



function InfoCaracter() {
    
  const [items, setItems] = useState([])
  const [location, setLocation] = useState([])
  const [episode, setEpisode] = useState([])
  const [id, setId] = useState(1)
  const [origin, setOrigin] = useState([])
  
  
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => {
        
        setItems(res.data);
        setOrigin(res.data.origin)
   
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => {
        setLocation(res.data.location);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [id]);


   useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${id}`)
      .then(res => {
        setEpisode(res.data.name)
        
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [id]);

  
  return (
    
    <SoloCharWrapper>
      
    <CharCard>

      <div className="card-info">
        <div className="card-header-info">
            <img src={items.image} alt='img' />
        </div>
        <div className="card-body-info">
            <h4>
                Name: {items.name}
            </h4>
            <p>
                Status:  {items.status}
            </p>

            <p> 
                Specia:  {items.species}
            </p>

            <p className='gender'>
                Gender: 
                  <span className={items.gender === 'Male' ? 'gender-text-male' : items.gender==='Female' ? 'gender-text-female' : 'gender-text-other'}> 
                    {items.gender}
                  </span>
            </p>

            <p>
              Origin: {origin.name}
            </p>

            <p>
                Location: {location.name}
            </p>
            <p className='episode'>
                Episode: {episode}
            </p>

        </div>

    </div>
    
    <div>
      <Link to='/'>
        <button className='btn-prev' >
              Back
            </button>
      </Link>
    </div>

    </CharCard>
    </SoloCharWrapper>
  );
}

export default InfoCaracter

const SoloCharWrapper = styled.div`
margin-top: 10px;  
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 15px;
    filter: drop-shadow(0.1rem 0.1rem 0.25rem darkslategray);
  }
`;

const CharCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #258e8e;
  width: 50vw;
  border-radius: 15px;
  filter: drop-shadow(0.2rem 0.2rem 0.5rem darkblue);
 
`;