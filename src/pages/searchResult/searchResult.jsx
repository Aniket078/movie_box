import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { fetchData } from '../../utils/utils'
import HomeLoading from '../loading/homeLoading'
import InfiniteScroll from 'react-infinite-scroll-component'
import MovieCard from '../../component/movieCard/movieCard'
import loader from "./../../assets/loader.png"
import SearchLoading from '../loading/searchLoading'


const SearchResult = () => {
  const {query} = useParams()
  const [ pageNum, setPageNum] = useState(1)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  const fetchInitialData = () => {
    setLoading(true)
    fetchData(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res)
        console.log(res);
        setPageNum( (prev) => prev+1)
        setLoading(false)
      }
    )
  }

  const fetchNextPageData = () => {
    fetchData(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if(data?.results.length > 0) {
          setData({
            ...data, results: [...data?.results, ...res.results]
          })
        }
        else{
          setData(res)
        }
        setPageNum((prev) => prev + 1)
      }
    )
  }

  useEffect( () => {
    fetchInitialData( )
  }, [query])

  return (
    <>
      {loading ? <HomeLoading /> : 
        (
          data?.results.length > 0 ? (
            <>
              <div className='text-white px-2 md:px-6 relative'>
                <h1 className='text-3xl pt-20 md:pt-28 mb-4'>{`Search ${data.total_results > 1 ? "results" : "result"} of ${query}`}</h1>
                {/* <InfiniteScroll className=' grid grid-cols-3 sm:grid-col-4 md:grid-cols-5 lg:grid-cols-7 gap-4' dataLength={data?.results?.length || []} next={fetchNextPageData} hasMore={pageNum <= data?.total_pages} loader={<SearchLoading />} >
                  {data.results.map((item, index) => {
                    if(item.media_type === 'person') return
                    return (
                      <MovieCard data={item} key={index} />
                    )
                  })}
                </InfiniteScroll> */}
                <div className=' grid grid-cols-3 sm:grid-col-4 md:grid-cols-5 lg:grid-cols-7 gap-4'  >
                  {data.results.map((item, index) => {
                    if(item.media_type === 'person') return
                    return (
                      <MovieCard data={item} key={index} />
                    )
                  })}
                </div>
                <div className='w-full flex items-center justify-center '>
                  <button className='bg-white w-72 p-2 rounded-lg' onClick={fetchNextPageData} >Load more</button>
                </div>
              </div>
            </>
          ) : 
            <>
              <h1 className='text-3xl text-white mt-20 md:mt-28 md:px-5'> sorry no result found</h1>
            </>
          
        )
      }
    </>
  )
}

export default SearchResult