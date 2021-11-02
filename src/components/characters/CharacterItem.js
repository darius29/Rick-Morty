import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const CharacterItem = ({ item }) => {

    return (
    
    <div>
        
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
            <p>
                Id: {item.id}
            </p>
        </div>
        
    </div>
    </div>
  
      
    
  )
}

export default CharacterItem