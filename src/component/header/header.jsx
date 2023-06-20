import {  useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import search from  "./../../assets/search.png"
const Header = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState(false)
    const toggleSearch = () => setActive(!active)
    const disableSearch = () => setActive(false)
    const [query, setQuery] = useState("")
    const fill = (e) => {
        setQuery(e.target.value)
        console.log(query);
    }
    const submit = () => {
        console.log(query);

    }
    return (
        <>
            {active&&<div className="fixed h-screen w-full flex gap-4 flex-col items-center justify-center backdrop-blur-xl bg-white/3 z-50">
                <form onSubmit={submit} className="relative flex flex-col gap-4 w-72 md:w-96">
                    <input onChange={fill}  placeholder="Movie or TV shows.." className="text-white text-center text-2xl h-16 bg-[#c5c5c56c] rounded-md"/>
                    <button onClick={() => {navigate(`/search/${query}`)}} className=" h-16 text-2xl rounded-xl bg-red-500">Search</button>
                    <div onClick={disableSearch} className="absolute -top-20 px-3 right-0 bg-[#c5c5c56c] p-2 rounded-full text-red-700  text-2xl">&#10006;</div>
                </form>
            </div>}
            <div  className="backdrop-blur-sm  flex flex-row h-16 md:h-28 justify-between px-4 md:px-12 items-center  text-white  top-0 z-10 w-full fixed">
                <div><h1 className="cursor-pointer font-bold"><Link to={"/"} >Movie Box</Link></h1></div>
                <div onClick={toggleSearch} className="cursor-pointer rounded-md  flex"><img className="bg-[#c5c5c56c] m-7 p-2 rounded-full mx-1  " width="35" height="35" src={search}  alt="search--v1"/> </div>
                
            </div>
            <Outlet />
        </>
    )
}

export default Header