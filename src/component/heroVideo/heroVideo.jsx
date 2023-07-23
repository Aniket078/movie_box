import useFetch from '../../hooks/useFetch'
import './styles.css'
const HeroVideo = (props) => {

    const {results, index} = props
    const movie_id = results[index].id
    const {data, loading, error} = useFetch(`/movie/${movie_id}/videos?language=en-US`)

    if(data)console.log(data.results[0]);
  return (
    <>
      { loading ? <div className='h-full w-full animate-pulse bg-red-500 transition-all duration-500'>
        
      </div> : 
      data ? <div className='video-background'>
        {data.results[0] ? <iframe
            width={1920}
            height={1080}
            src={`https://www.youtube.com/embed/${data.results[0].key}?autoplay=0&mute=1&controls=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>: <></>}
      </div>: <></>}
    </>
  )
}
export default HeroVideo