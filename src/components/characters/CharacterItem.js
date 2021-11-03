import React from 'react'
import { BrowserRouter as Router, Link} from "react-router-dom";

const CharacterItem = ({ item }) => {

    return (
    
    <div>
     <Link className='link' to="/character/{id}">   
    <div className="card">
        <div className="card-header">
            <img src={item.image} alt='img' />
        </div>
        <div className="card-body">
            <h4>
                Name: {item.name}
            </h4>
            <p>
                Status:  {item.status}
            </p>
        </div>  
    </div>
    </Link>
    </div>
  
      
    
  )
}

export default CharacterItem