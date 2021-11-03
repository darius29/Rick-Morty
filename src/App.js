
 import React, { useState, useEffect } from 'react';

 import './App.css';
 
 import Header from './components/ui/Header';
 import Character from './components/characters/Character';
 import Search from './components/ui/Search';
 
 
 import axios from 'axios';
 import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
 
 import Dropdown from './components/ui/DropDown';
import InfoCaracter from './components/characters/InfoCharacter';
 
 function App(props) {
   
   const [items, setItems] = useState([])
   const [info, setInfo] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [query, setQuery]=useState('')
   const [page, setPage] = useState(1)
   const [id, setId] = useState()
   const [status, setStatus] = useState()
   
   useEffect(() => {
     const fetchItems = async () => {
       const result = await axios(`https://rickandmortyapi.com/api/character?name=${query}&page=${page}&id=${id}`)
   
       setItems(result.data.results)
       setInfo(result.data.info)
       
       
       setIsLoading(false)
     }
 
     fetchItems()
   }, [query, page, id ])
 
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
 
   <div className='container'>
   
     <Router>
       <Switch>
         <Route exact path='/' >
           <Header />
           
           <Search getQuery={(q) =>setQuery(q) } />
           
           <Dropdown getStats={(s) => setStatus(s) } />
           <Character isLoading={isLoading} items={items} />
           <div className='pagination'>
 
             <button className='btn-prev'
             onClick={(event) => prevHandler(event)}
             >
               Prev
             </button>
             <p className='number-page'>{page}/{info.pages}</p>
             <button className='btn-next'
             onClick={(event) => nextHandler(event)}
             >
             Next
             </button>
           </div>
         </Route>
          <Route path='/character/{id}'>
           <Header />
           <InfoCaracter key={items.id} items={items} />
         </Route>
       </Switch>
     </Router>
   
   </div>
 )
 }
 
 export default App;
 