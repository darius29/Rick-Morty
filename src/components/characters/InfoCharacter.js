import React, {useState ,useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'


function InfoCaracter() {
    
  const [items, setItems] = useState([])
  const [location, setLocation] = useState([])
  const [episode, setEpisode] = useState([])
  const { id } = useParams();
  const [origin, setOrigin] = useState([])
  
  
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => {
        setItems(res.data);
        //console.log("Response:", res.data);
        
        setOrigin(res.data.origin)
       // console.log("origin", res.data.origin)
        
      
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
       // console.log("location", res.data.location)
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
        console.log("episode", res.data.name)
        
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [id]);

  

  return (
    
    <SoloCharWrapper>
   
      <CardInfo>

        <div className="card-header-info">
            <img src={items.image} alt='img' />
        </div>
        <CardBodyInfo>
            <h4>
                Name: {items.name}
            </h4>
            <p>
                Status:  {items.status}
            </p>

            <p> 
                Species:  {items.species}
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

          </CardBodyInfo>
      
        
    
     

      </CardInfo>

      <div>
        <Link to='/'>
          <button className='btn-back' >
                Back
              </button>
        </Link>
      </div>
      </SoloCharWrapper>
     
  );


}



export default InfoCaracter

const CardInfo = styled.div`
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 550px;
    height: 600px;
    justify-content: center;
    align-items: center; 
  
`;

const CardBodyInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    padding: 10px;
    min-height: 250px;
    font-size: 25px;
  
`;


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
