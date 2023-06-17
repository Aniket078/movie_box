import { useState } from "react"
import { Outlet } from "react-router-dom"
const Header = () => {
    const [active, setActive] = useState(false)
    const toggleNav = () => setActive(!active)
    const disableNav = () => setActive(false)

    return (
        <>
            <div  className="flex flex-row h-28 justify-between px-4 md:px-12 items-center  text-white  top-0 z-10 w-full fixed">
                <div><h1 className="cursor-pointer font-bold">Movie Box</h1></div>
                <div className=" text-xs gap-14 hidden md:flex">
                    <div>Movies</div>
                    <div>TV Shows</div>
                    <div className="">Favourites</div> 
                </div>
                <div className=" rounded-md  flex"><input className="w-20 bg-[#c5c5c56c] rounded-md"/><img className="bg-[#ffffffa2]  rounded-md mx-1 " width="25" height="25" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/> </div>
                <div  className="space-y-2 cursor-pointer md:hidden relative" onClick={toggleNav} >
                    <span className="block w-5 h-1 bg-white hover:bg-red-500"></span>
                    <span className="block w-8 h-1 bg-white hover:bg-red-500"></span>
                    <span className="block w-8 h-1 bg-white hover:bg-red-500"></span>
                    <div id="nav" onClick={disableNav} onMouseLeave={disableNav}  className="w-auto  right-0 top-10   absolute rounded-md bg-black  border-[1px] border-white  ">
                        <div className={active ? "" : "hidden"}>
                            <ul className="p-10 bg-[#c5c5c536]">
                                <li className="m-3 text-lg hover:text-red-500">Movies</li>
                                <li className="m-3 text-lg hover:text-red-500">TV shows</li>
                                <li className="m-3 text-lg hover:text-red-500">Favourites</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Header