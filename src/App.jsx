import { useEffect } from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import './App.css'
import Header from './component/header/header'
import Home from './pages/home/home'
import Trending from './pages/trending/trending'
import { fetchData } from './utils/utils'
import { getApiConfigurations } from './store/homeSlice'
import { useDispatch } from 'react-redux'
import Details from './pages/Details/details'
import SearchResult from './pages/searchResult/searchResult'
import Explore from './pages/explore/explore'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetchApiConfig();
  }, [])
  
  const fetchApiConfig = async () => {
    const res = await fetchData("/configuration")
    console.log(res);
    const url = {
      backdrop: res.images.secure_base_url + "original",
      poster: res.images.secure_base_url + "original",
      profile: res.images.secure_base_url + "original",
    }
    dispatch(getApiConfigurations(url))
  }

  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Header />} >
          <Route index element = {<Home />} />
          <Route path="/:mediaType/:id" element = {<Details />} />
          <Route path="/search/:query"  element = {<SearchResult />} />
          <Route path="/explore/:mediaType" element = {<Explore />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
