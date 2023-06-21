import { useSelector } from "react-redux"
import useFetch from "../../hooks/useFetch"
import { useParams } from "react-router-dom"
import HomeLoading from "../loading/homeLoading"
import dayjs from "dayjs"
import HeroBackground from "../../component/animate/heroBackground"
import { motion, AnimatePresence } from "framer-motion"
motion

const Details = () => {
  const {media_type, id} = useParams()
  const {data, loading} = useFetch(`/${media_type}/${id}`)
  const url = useSelector(state => state.home.url)
  console.log(data);
  const genres = useSelector(state => state.home.genres)
  return (
    <>
      {loading ? <HomeLoading /> : data ? 
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration:2}}
        >
          
        <div style={{background:"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)"}} className="relative h-screen w-full flex flex-col items-center ">
        <HeroBackground url={url.backdrop + data.backdrop_path} />
          {/* poster and intro */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:mx-10 pt-52 justify-center">
            <div className=" " ><img className="h-52 " src={url.poster + data.poster_path} /></div>
            <div className=" max-w-xl h-full backdrop-blur-lg bg-black/30 md:p-5">
              <h1 className="text-3xl md:text-6xl text-white">{data.original_title || data.original_name}</h1>
              <h1 className="  text-gray-300 text-sm mt-1">{data.tagline}</h1>
              <div className="flex gap-3 my-3 overflow-hidden">
                {data.genres.map( (genre) => {
                  return (
                    <div key={genre.id} className="p-1 rounded-md text-white border">{genre.name}</div>
                  )})}
              </div>
            </div>
          </div>
          <div className="mt-3 flex flex-col md:flex-row gap-5 justify-center w-full  text-white">
            <div className="flex justify-center gap-5">
              <div className="h-24 flex items-center bg-red-600 rounded-2xl"><h1 className='text-white text-xl md:text-2xl w-40 md:w-36 text-center'>{data.first_air_date ? dayjs(data.first_air_date).format("MMMM D, YYYY"): dayjs(data.release_date).format("MMMM D, YYYY")}</h1></div>
              <div className="h-24 flex items-center backdrop-blur-lg bg-white/30 rounded-2xl"><h1 className='text-white w-40 text-xl md:text-2xl  md:w-36 text-center'>${data.budget}</h1></div>
            </div>
            <div className="flex gap-5 justify-center">
              <div className="h-24 flex items-center backdrop-blur-lg bg-white/30 rounded-2xl"><h1 className='text-white text-xl md:text-2xl w-40 md:w-36 text-center'>{data.runtime} min</h1></div>
              <div className="h-24 flex items-center backdrop-blur-lg bg-white/30 rounded-2xl"><h1 className='text-white text-xl md:text-2xl w-40 md:w-36 text-center'>{data.status}</h1></div>
            </div>
          </div>

          <div className="flex flex-col justify-center my-5 max-w-2xl">
              <h1 className="w-80 text-gray-500 px-3">Description</h1>
              <p className="text-gray-300 p-3 text-sm">{data.overview}</p>
          </div>
        </div>

        </motion.div> 
      </AnimatePresence>
    : <h1>error</h1>}
    </>
  )
}

export default Details