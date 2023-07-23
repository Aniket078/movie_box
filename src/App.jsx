import { useEffect } from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import './App.css'
import Header from './component/header/header'
import Home from './pages/home/home'
import { fetchData } from './utils/utils'
import { getApiConfigurations } from './store/homeSlice'
import { useDispatch } from 'react-redux'
import Details from './pages/Details/details'
import SearchResult from './pages/searchResult/searchResult'
import Explore from './pages/explore/explore'
import { getGenres } from './store/homeSlice'
import Favourites from './pages/fav/fav'
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, [])
  
  const genresCall = async () => {
    let promises = [];
    let endpoints = ['tv', 'movie'];
    let allGenres = {};

    endpoints.forEach( (url) => {
      promises.push(fetchData(`/genre/${url}/list`));
    })
    const data = await Promise.all(promises)
    data.map( ({genres}) => {
      return genres.map( (item) => allGenres[item.id] = item )
    })
    dispatch(getGenres(allGenres))
  }

  
  const fetchApiConfig = async () => {
    const res = await fetchData("/configuration")
    console.log(res);
    const url = {
      backdrop: res.images.secure_base_url + "original",
      poster: res.images.secure_base_url + "w780",
      profile: res.images.secure_base_url + "w185",
    }
    dispatch(getApiConfigurations(url))
  }

  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Header />} >
          <Route index element = {<Home />} />
          <Route path="/:media_type/:id" element = {<Details />} />
          <Route path="/search/:query"  element = {<SearchResult />} />
          <Route path="/explore/:mediaType" element = {<Explore />} />
          <Route path="/favourites" element = {<Favourites />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
