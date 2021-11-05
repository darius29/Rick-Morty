 import React, { useState, useEffect } from 'react';
 import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
 import axios from 'axios';
 import styled from 'styled-components';

 import './App.css';
 
 import Header from './components/ui/Header';
 import Character from './components/characters/Character';
 import Search from './components/ui/Search';
 
 import Dropdown from './components/ui/DropDown';
import InfoCaracter from './components/characters/InfoCharacter';
  
 function App() {
   
   const [items, setItems] = useState([])
   const [info, setInfo] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [query, setQuery]=useState('')
   const [page, setPage] = useState(1)
   const [status, setStatus] = useState()
 
   useEffect(() => {
     const fetchItems = async () => {
       const result = await axios(`https://rickandmortyapi.com/api/character?name=${query}&page=${page}`)
   
       setItems(result.data.results)
       setInfo(result.data.info)
     
       
       setIsLoading(false)
     }
 
     fetchItems()
   }, [query, page ])

   const nextHandler = (event) => {
     event.preventDefault()
     if(page <= info.pages) {
       setPage(page + 1)
     }else {
       setPage(1)
     }
   }
 
   const prevHandler = (event) => {
     event.preventDefault()
     if(page>1){
       setPage(page - 1)
     }else{
       setPage(page)
     }
   }
 
   return (
 
   <Container>
   
     <Router>
       <Switch>
         <Route exact path='/' >
           <Header />
           
           <Search getQuery={(q) =>setQuery(q) } />
           
           <Dropdown getStatus={(s) => setStatus(s) } />
           <Character isLoading={isLoading} items={items} />
          <Page>
 
             <button className='btn-prev'
             onClick={(event) => prevHandler(event)}
             >
               Prev
             </button>
             <NumberPage>
               {page}/{info.pages}
             </NumberPage>
             <button className='btn-next'
             onClick={(event) => nextHandler(event)}
             >
             Next
             </button>
             </Page>
         </Route>
          <Route path='/character/:id'>
           <Header />
           <InfoCaracter key={items.id} items={items} />
         </Route>
       </Switch>
     </Router>
   
   </Container>
 )
 }
 
 export default App;
 
 const Page = styled.div`
     display: flex;
     justify-content: center;
     padding: 8px 16px;
     margin-top: 10px;
     margin-bottom: 50px;
   
 `;
 
 const NumberPage = styled.div`
     font-size: 30px;
     margin-left: 10px;
     margin-right: 10px;
     margin-bottom: 10px;
   
 `;

 const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 0 20px;
  
`;
 