import { useDispatch, useSelector } from "react-redux"
import useFetch from "../../hooks/useFetch"
import { useParams } from "react-router-dom"
import HomeLoading from "../loading/homeLoading"
import dayjs from "dayjs"
import HeroBackground from "../../component/animate/heroBackground"
import { motion, AnimatePresence } from "framer-motion"
import Casts from "../../component/casts/casts"
import Carousel from "../../component/carousel/carousel"
import HeroText from "../../component/animate/heroText"
import { useEffect, useState } from "react"
import { getFav, removeFav } from "../../store/homeSlice"

const Details = () => {
  const [liked, setLiked] = useState(false)
  const fav = useSelector(state => state.home.fav.movies)
  const dispatch = useDispatch()
  const {media_type, id} = useParams()
  const {data, loading} = useFetch(`/${media_type}/${id}`)
  const {data: credits, loading: creditsLoading} = useFetch(`/${media_type}/${id}/credits`)
  const {data: sim, loading: simLoading} = useFetch(`/${media_type}/${id}/similar`)
  const url = useSelector(state => state.home.url)

  const genres = useSelector(state => state.home.genres)

  const isLiked = fav.filter((f) => f.id == data?.id)
  
  // console.log(isLiked);
  // if(isLiked.length > 0) {
  //     setLiked(true)
  // }
  // else setLiked(false)

  const like = () => {
    
    const isLiked = fav.filter((f) => f.id == data?.id)
    if(isLiked.length > 0){
      const removed = fav.filter(movie => movie.id != data.id)
      dispatch(getFav(removed))
      setLiked(false)
    }
    else{
      const added = [...fav,   data]
      dispatch(getFav(added))
      setLiked(true)
    }
    console.log(fav);
  }
  function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return (hours+"hr " + minutes + "min");
    // return { hours, minutes };
  }
  useEffect(() => {
    const isLiked = fav.filter((f) => f.id == data?.id)
    if(isLiked.length > 0) {
      console.log(isLiked);
      setLiked(true)
    }
    else setLiked(false)
  }, [data])

  return (
    <>
      {loading ? <HomeLoading /> : data ? 
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration:1}}
        >
          
        <div style={{background:"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)"}} className="relative overflow-hidden  w-full flex flex-col items-center ">
        <HeroBackground  url={url.backdrop + data.backdrop_path} />
          {/* poster and intro */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:mx-10 pt-24 md:pt-52 justify-center">
            <div className=" " ><img className="h-72 " src={url.poster + data.poster_path} /></div>
            <div className=" max-w-xl h-full backdrop-blur-lg bg-black/30 m-2 p-2  md:p-5 rounded-lg">
              <div className="text-2xl md:text-6xl text-white overflow-hidden ">
                <HeroText text={data.original_title || data.original_name} /> 
              </div>
              {/* <h1 className="text-3xl md:text-6xl text-white">{data.original_title || data.original_name}</h1> */}
              <h1 className="  text-gray-300 text-sm mt-1">{data.tagline}</h1>
              <div className="flex gap-3 my-3 overflow-hidden">
                {data.genres.map( (genre) => {
                  return (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{duration:0.7}} key={genre.id} className="p-1 rounded-md text-white border">{genre.name}</motion.div>
                  )})}
              </div>
            </div>
          </div>
          <div className="mt-3 flex flex-col md:flex-row gap-5 justify-center w-full  text-white">
            <div className="flex justify-center gap-5">
              <div className="h-24 flex items-center bg-red-600 rounded-2xl relative"><h1 className="text-xs m-2 absolute top-0">Releasing on</h1><h1 className='text-white text-xl md:text-2xl w-40 md:w-36 text-center'>{data.first_air_date ? dayjs(data.first_air_date).format("MMMM D, YYYY"): dayjs(data.release_date).format("MMMM D, YYYY")}</h1></div>
              <div onClick={like} className="h-24 flex items-center  bg-white rounded-2xl relative border justify-center">
              { liked ? 
                <>
                  <h1 className="text-xs text-black m-2 absolute top-0">Favourite</h1>
                  <div  className="w-40 md:w-36 flex items-center justify-center"><img  src="/liked.gif" /></div>
                </>
                :
                <>
                  <h1 className="text-xs text-black m-2 absolute top-0">Add to Favourites</h1>
                  <div  className="w-40 md:w-36 flex items-center justify-center"><img  src="/icons/like.gif" /></div>
                </>
              }</div>
            </div>
            <div className="flex gap-5 justify-center">
              <div className="h-24 flex items-center backdrop-blur-lg bg-white/30 rounded-2xl"><h1 className="text-xs m-2 absolute top-0">Duration</h1><h1 className='text-white text-xl md:text-2xl w-40 md:w-36 text-center'>{toHoursAndMinutes(data.runtime)}</h1></div>
              <div className="h-24 flex items-center backdrop-blur-lg bg-white/30 rounded-2xl"><h1 className="text-xs m-2 absolute top-0">Budget</h1><h1 className='text-white w-40 text-xl md:text-xl  md:w-36 text-center'>${data.budget}</h1></div>
            </div>
          </div>

          <div className="flex flex-col justify-center my-5 max-w-2xl">
              <h1 className="w-80 text-gray-200 px-3 text-2xl my-2">Overview</h1>
              <p className="text-gray-300 px-3 text-sm border p-3 rounded-xl">{data.overview}</p>
          </div>
        </div>
        <div className="flex flex-col px-3 justify-center  max-w-2xl mx-auto">
              <Casts data={credits?.cast} loading={creditsLoading} /> 
              <motion.h1 initial={{ opacity:0 }} whileInView={{opacity:1 }} transition={{ duration: 0.5, }}   className="text-2xl text-gray-200  mt-5 mb-4">Similar Movies</motion.h1>
              <motion.div
                initial={{ y:60 }}
                whileInView={{y:0 }}
                transition={{ duration: 0.2, }}  
              >
                <Carousel loading={simLoading} data={sim?.results} />
              </motion.div>
          </div>
        </motion.div> 
      </AnimatePresence>
    : <h1>error</h1>}
    </>
  )
}

export default Details