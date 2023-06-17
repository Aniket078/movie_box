
const Home = () => {

    return (
        <>
            <div className="relative h-screen w-full ">
                <div className="absolute h-full w-full  brightness-50  bg-cover -z-20  bg-[url('https://images.unsplash.com/photo-1683009427660-b38dea9e8488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60')]"></div>
                <div className="h-[80vh] w-full flex justify-center items-center pt-16 z-20">
                    <div className="max-w-;g text-white flex flex-col gap-8">
                        <h1 className="tracking-widest uppercase text-6xl sm:text-8xl md:text-9xl text-white z-20">Top gun maverick </h1>
                        <div className="flex gap-3">
                            <div className="text-sm p-1 px-5 text-[rgba(255,255,255,0.5)]  border-[rgba(255,255,255,0.4)] border-lg rounded-full border-[1px]"><p1>by piyushh chddi</p1></div>
                            <div className="text-sm p-1 px-5 text-[rgba(255,255,255,0.5)] border-[rgba(255,255,255,0.4)] border-lg rounded-full border-[1px]"><p1>2022</p1></div>
                            <div className="text-sm p-1 px-5 text-[rgba(255,255,255,0.5)] border-[rgba(255,255,255,0.4)] border-lg rounded-full border-[1px]"><p1>1h20m</p1></div>
                        </div>
                    </div>
                </div>
                <div className="h-[20vh] flex justify-between ">
                    <div className="p-5 flex gap-3">
                        <div className="h-8 w-14 border-[1px] border-white rounded-lg text-center"><p className="text-xl text-white">&larr;</p></div>
                        <div className="h-8 w-14 border-[1px] border-white rounded-lg text-center"><p className="text-xl text-white">&rarr;</p></div>
                    </div>
                    <div className="h-16 w-32 border-[1px] border-white rounded-lg">

                    </div>
                    <div className="h-16 w-32 border-[1px] border-white rounded-lg">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home