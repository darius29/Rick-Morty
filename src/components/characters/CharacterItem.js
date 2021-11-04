import React from 'react'
import { BrowserRouter as Router,  Link} from "react-router-dom";
import styled from 'styled-components';

const CharacterItem = ({ item  }) => {

    return (
    
    
    <Link className='link' to={"/character/"+item.id}>

            <Card>
            <CardHeader>
                <div className='card-header'>
                <img src={item.image} alt='img' />
                </div>
            </CardHeader>
            <CardBody>

                <h4>
                    Name: {item.name}
                </h4>
                <p>
                    Status:  {item.status}
                </p>
            </CardBody>
            </Card>
    </Link>

  )
}

export default CharacterItem


const Card = styled.div`
  margin-right: 15px;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 200px;
  height: 300px;
  justify-content: center;
  flex-direction: row;
`;

const CardHeader = styled.div`
    width: 100%;
    height: 100px;
`;

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
    min-height: 300px;
    color: black;
    text-decoration: none;
  
  
`;



