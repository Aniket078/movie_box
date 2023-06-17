
const Header = () => {

    return (
        <>
            <div className="flex flex-row h-28 justify-between items-center px-12 text-white absolute top-0 z-10 w-full">
                <div><h1 className="font-bold">Movie Box</h1></div>
                <div className="flex text-xs gap-3">
                    <div>Movies</div>
                    <div>TV Shows</div>
                    <div className="">Favourites</div> 
                </div>
                <div className="w-10 rounded-md bg-[#c5c5c56c] flex"><input className=" w-full bg-[#c5c5c56c] rounded-md"/><img className="bg-[#c5c5c56c] " width="25" height="25" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/> </div>
            </div>
        </>
    )
}

export default Header