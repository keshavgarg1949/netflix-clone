import React from 'react';
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrends} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documantaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Animation" fetchUrl={requests.fetchAnime} />
      <Row title="Fantasy" fetchUrl={requests.fetchFantasy} />
    </div>
  );
}

export default App;
