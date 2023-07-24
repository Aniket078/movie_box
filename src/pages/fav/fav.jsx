import { useSelector } from "react-redux"
import MovieCard from "../../component/movieCard/movieCard"
import remove from  "./../../assets/remove.png"
import not from  "./../../assets/notfound.png"

import { useDispatch } from "react-redux"
import { getFav } from "../../store/homeSlice"
import Footer from "../../component/footer/footer"

const Favourites = () => {
    const dispatch = useDispatch()
    const fav = useSelector(state => state.home.fav.movies)
    const removeMovie = (item) => {
        console.log(item);
        const removed = fav.filter(movie => movie.id != item.id)
        dispatch(getFav(removed))
    }
    return (
        <>
        <div className="max-w-6xl mx-auto">
            <h1 className="text-6xl text-white mt-24 py-10 md:text-left text-center  ">Favourites</h1>
            {fav.length>0 ? <div className=' grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 justify-center'  >
                {fav.map((item, index) => {
                    if(item.media_type === 'person') return
                    return (
                        <div key={index} className="relative">
                            <MovieCard data={item}  />
                            <img onClick={() => {removeMovie(item)}} className="absolute top-0 right-0 h-12 w-12" src={remove} />
                        </div>
                    )
                })}
                </div> 
                :
                <>
                    <div className="flex items-center flex-col gap-5 backdrop-grayscale-100"> 
                        <img className="" src={not} />
                        <h1 className="text-red-500">Nothing found!</h1>
                    </div>
                </>
                }
        </div>
        <Footer/>   
        </>
    )
}

export default Favourites