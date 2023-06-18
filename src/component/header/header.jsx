import {  useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
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
            {active&&<div className="absolute h-screen w-full flex gap-4 flex-col items-center justify-center backdrop-blur-xl bg-white/3 z-50">
                <div className="w-3/4 flex justify-end m-9">
                    <div onClick={disableSearch} className="text-white text-4xl">X</div>
                </div>
                <input onChange={fill}  placeholder="Search.." className="w-3/4 h-16 bg-[#c5c5c56c] rounded-md"/>
                <button onClick={() => {navigate(`/search/${query}`)}} className="w-3/4 h-16 text-2xl rounded-2xl bg-red-500">Search</button>
            </div>}
            <div  className="backdrop-blur-sm  flex flex-row h-16 md:h-28 justify-between px-4 md:px-12 items-center  text-white  top-0 z-10 w-full fixed">
                <div><h1 className="cursor-pointer font-bold"><Link to={"/"} >Movie Box</Link></h1></div>
                <div onClick={toggleSearch} className="cursor-pointer rounded-md  flex"><img className="bg-white  rounded-full mx-1  " width="35" height="35" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/> </div>
                
            </div>
            <Outlet />
        </>
    )
}

export default Header