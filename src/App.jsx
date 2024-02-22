
import './App.css';
import requests from './requests';
import Roww from './Components/Roww';
import tmdbAxiosInstance from './tmdbAxiosInstance';
import Banner from './Banner';
import './Banner.css';
import Nav from './Components/Nav';
import './Nav.css';
function App() {
  return (
    <div className="App">
<Nav/>
<Banner fetchUrl={requests.fetchNetflixOriginals}/>
    <Roww isPoster={true} title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Roww title="Trending in India" fetchUrl={requests. fetchTrending}/>
    <Roww title="Top-Rated" fetchUrl={requests.fetchTopRated}/>
    <Roww title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Roww title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Roww title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Roww title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Roww title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
  
    </div>
  );
}

export default App;
