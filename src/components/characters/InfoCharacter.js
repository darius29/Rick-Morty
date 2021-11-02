import React, {useState ,useEffect} from 'react'
import axios from 'axios';





function InfoCaracter({props}) {
    
  const [items, setItems] = useState([])
  const [location, setLocation] = useState([])
  const [episode, setEpisode] = useState([])
  const [id, setId] = useState(1)
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => {
        setItems(res.data);
        console.log("Response:", res);
        setId(res.data.id);
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
        console.log("location", res.data.location)
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => {
        setEpisode(res.data.episode)
        console.log("episode", res.data.episode)
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [id]);

  return (
    
      
      <div className='cards-center'>

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
                Genul: 
                  <p className='gender-text'> 
                    {items.gender}
                  </p>
            </p>
            <p>
                Location: {location.name}
            </p>
            <p className='episode'>
                Episode: {episode}
            </p>
        </div>
    </div>
    </div>
        
     
  );


}



export default InfoCaracter