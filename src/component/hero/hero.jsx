/* eslint-disable no-unused-vars */
import React from 'react'
import {  useState } from "react"
import { useSelector } from 'react-redux'

const Hero = (props) => {
    const [current, setCurrent] = useState(0)
    // eslint-disable-next-line react/prop-types
    const details = props.data.results
    const baseUrl = useSelector(state => state.home.url.backdrop)
    console.log(details);
    React.useEffect(() => {
        const next = (current + 1) % details.length;
        const id = setTimeout(() => setCurrent(next), 100000);
        return () => clearTimeout(id);
      }, [current]);

    return (
        <div className="relative h-screen w-full">
            <div style={{backgroundImage: 'url(' + baseUrl + details[current].backdrop_path + ')' }} className= {`absolute h-full w-full  brightness-50  bg-cover bg-center -z-20  `} ></div>
            <div className="h-[80vh] w-full flex justify-center items-center pt-16 z-20">
                <div className=" text-white flex flex-col gap-8">
                    <h1 className="pl-4 tracking-widest uppercase text-6xl sm:text-8xl md:text-9xl text-white z-20">{details[current].original_title} </h1>
                    <p className=' pl-4 text-xs md:text-sm w-80 md:w-96 text-[rgba(255,255,255,0.5)]'>{details[current].overview}</p>
                    <div className="flex gap-3">
                        <div className="text-sm p-1 px-5 text-[rgba(255,255,255,0.5)]  border-[rgba(255,255,255,0.4)] border-lg rounded-full border-[1px]"><p>{details[current].adult ? "Adult: True" : "Adult: False"}</p></div>
                        <div className="text-sm p-1 px-5 text-[rgba(255,255,255,0.5)] border-[rgba(255,255,255,0.4)] border-lg rounded-full border-[1px]"><p>{details[current].release_date}</p></div>
                        <div className="text-sm p-1 px-5 text-[rgba(255,255,255,0.5)] border-[rgba(255,255,255,0.4)] border-lg rounded-full border-[1px]"><p>1h20m</p></div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-between ">
                <div className="p-5 flex gap-3">
                    <div className="h-8 w-14 border-[1px] border-white rounded-lg text-center"><p className="text-xl text-white">&larr;</p></div>
                    <div className="h-8 w-14 border-[1px] border-white rounded-lg text-center"><p className="text-xl text-white">&rarr;</p></div>
                </div>
                
                <div className="flex items-center p-3 h-auto md:p-7  border-[1px] border-white rounded-lg">
                    <h1 className='text-2xl text-white'>{details[current].vote_average} /10</h1>
                </div>
            </div>
        </div>
    )
}

export default Hero