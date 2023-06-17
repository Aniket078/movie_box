/* eslint-disable no-unused-vars */
import React from 'react'
import {  useState, useEffect } from "react"
import { useSelector } from 'react-redux'

const Hero = (props) => {
    const [current, setCurrent] = useState(0)
    const details = props.data.results
    const baseUrl = useSelector(state => state.home.url.backdrop)
    const nextHero = () => setCurrent((current + 1) % details.length)
    const prevHero = () => {
        if(current===0)
            setCurrent(details.length-1)
        else
            setCurrent((current - 1) % details.length)
    }

    useEffect(() => {
        const next = (current + 1) % details.length;
        const id = setTimeout(() => setCurrent(next), 100000);
        return () => clearTimeout(id);
      }, [current]);

    return (
        <div className="relative h-screen w-full">
            <div style={{backgroundImage: 'url(' + baseUrl + details[current].backdrop_path + ')' }} className= {`absolute h-full w-full  brightness-50  bg-cover bg-center -z-20  `} ></div>
            <div className="h-[80vh] w-full flex justify-center items-center pt-16 z-20">
                <div className=" text-white flex flex-col gap-8">
                    <h1 className="pl-4 tracking-widest uppercase text-5xl sm:text-7xl md:text-8xl text-white ">{details[current].original_title} </h1>
                    <p className=' pl-4 text-xs md:text-sm w-80 md:w-96 text-[rgba(255,255,255,0.5)]'>{details[current].overview}</p>
                    <div className="flex gap-3">
                        <div className="text-sm p-1 px-5 text-[rgba(255,255,255,0.5)]  border-[rgba(255,255,255,0.4)] border-lg rounded-full border-[1px]"><p>{details[current].adult ? "Adult: True" : "Adult: False"}</p></div>
                        <div className="text-sm p-1 px-5 text-[rgba(255,255,255,0.5)] border-[rgba(255,255,255,0.4)] border-lg rounded-full border-[1px]"><p>{details[current].release_date}</p></div>
                        <div className="text-sm p-1 px-5 text-[rgba(255,255,255,0.5)] border-[rgba(255,255,255,0.4)] border-lg rounded-full border-[1px]"><p>1h20m</p></div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-between p-4 ">
                <div className="p-5 flex gap-3">
                    <div onClick={prevHero} className=" cursor-pointer h-8 w-14 border-[1px] hover:border-red-500 border-white rounded-lg text-center"><p className="text-xl hover:text-red-500 text-white">&larr;</p></div>
                    <div onClick={nextHero} className="cursor-pointer h-8 w-14 border-[1px] border-white hover:border-red-500 rounded-lg text-center"><p className="text-xl text-white hover:text-red-500">&rarr;</p></div>
                </div>
                
                <div className="flex items-center p-3 h-auto md:p-7  border-[1px] border-white rounded-lg">
                    <h1 className='text-2xl text-white'>{details[current].vote_average} /10</h1>
                </div>
            </div>
            <div className='h-14 bg-gradient-to-b from-[rgba(0,0,0)] to-grey-300'>

            </div>
        </div>
    )
}

export default Hero