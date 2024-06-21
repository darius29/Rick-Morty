import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterItem from "./components/characters/CharacterItem";
import Search from "./components/ui/Search";
import Dropdown from "./components/ui/DropDown";
import InfoCharacter from "./components/characters/InfoCharacter";

function App() {
  const [items, setItems] = useState([]);
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character?name=${query}&page=${page}&status=${status}&gender=${gender}`
      );

      setItems(result.data.results);
      setInfo(result.data.info);
      setIsLoading(false);
    };

    fetchItems();
  }, [query, page, status, gender]);

  const nextHandler = (event) => {
    event.preventDefault();
    if (page < info.pages) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };

  const prevHandler = (event) => {
    event.preventDefault();
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(1);
    }
  };

  return (
    <Container>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Search getQuery={(q) => setQuery(q)} />
                <Dropdown
                  getStatus={(s) => setStatus(s)}
                  getGender={(g) => setGender(g)}
                />
                <Grid>
                  {isLoading ? (
                    <LoadingMessage>Loading...</LoadingMessage>
                  ) : (
                    items.map((item) => (
                      <CharacterItem
                        key={item.id}
                        item={item}
                      />
                    ))
                  )}
                </Grid>
                <Page>
                  <Button
                    className="btn-prev"
                    onClick={(event) => prevHandler(event)}>
                    Prev
                  </Button>
                  <NumberPage>
                    {page}/{info.pages}
                  </NumberPage>
                  <Button
                    className="btn-next"
                    onClick={(event) => nextHandler(event)}>
                    Next
                  </Button>
                </Page>
              </>
            }
          />
          <Route
            path="/character/:id"
            element={
              <>
                <Header />
                <InfoCharacter />
              </>
            }
          />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const LoadingMessage = styled.h1`
  text-align: center;
  color: #3498db;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 16px;
  margin-top: 10px;
  margin-bottom: 50px;
  gap: 20px;
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

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;
