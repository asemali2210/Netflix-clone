import React from 'react';
import MyRow  from "./Row";
import requests from "./requests";
import Header from "./Header";
import Nav from "./Nav";

function App() {
    return(
        <div className="App">
            <Nav />
            <Header />
            <MyRow title="Netflix Originals" fetchUrl={requests.fetchActionMovies} isLargeRow />
            <MyRow title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <MyRow title="Trending" fetchUrl={requests.fetchTrending}/>
            <MyRow title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <MyRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <MyRow title="War Movies" fetchUrl={requests.fetchWarMovies}/>
            <MyRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <MyRow title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries}/>
        </div>
    )
}

export default App;

