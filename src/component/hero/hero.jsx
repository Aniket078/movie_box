/* eslint-disable no-unused-vars */
import React from 'react'
import {  useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import HeroVideo from '../heroVideo/heroVideo'
import dayjs from 'dayjs'
import HeroText from '../animate/heroText'
import HeroBackground from '../animate/heroBackground'
import visit from  "./../../assets/visit.png"
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = (props) => {
    const [current, setCurrent] = useState(0)
    const details = props.data.results
    const navigate = useNavigate()
    const baseUrl = useSelector(state => state.home.url.backdrop)
    const nextHero = () => setCurrent((current + 1) % details.length)
    const prevHero = () => {
        if(current===0)
            setCurrent(details.length)
        else
            setCurrent((current - 1) % details.length)
    }
    useEffect(() => {
        const next = (current + 1) % details.length;
        const id = setTimeout(() => setCurrent(next), 7000);
        return () => clearTimeout(id);
    }, [current]);

    return (
        <>
        { details && 
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{duration:0.7}}
                key={current}
            >
                <div style={{background:"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)"}} className="overflow-hidden relative h-screen w-full">
                    <HeroBackground key={current} url={baseUrl + details[current].backdrop_path} />
                    <div className="h-[70vh] w-full flex justify-center items-center pt-16 z-20 ">
                        <div className=" text-white flex flex-col gap-8">
                            <div className="pl-4 overflow-hidden tracking-widest uppercase text-5xl sm:text-7xl md:text-8xl text-white  "> <HeroText key={current} text={details[current].original_title} /></div>
                            <div className='flex justify-between p-2 items-center'>
                                <div className='flex gap-3 flex-col  '>
                                <p className=' pl-4 text-xs md:text-sm w-52 md:w-96 text-[rgba(255,255,255,0.5)] '>{details[current].overview.slice(0, 200)}.......</p>
                                    <div className="flex  md:flex-row gap-3 pl-4">
                                        <div className="h-10 flex items-center text-xs  md:text-sm p-1 md:px-5 text-[rgba(255,255,255,0.5)]  border-[rgba(255,255,255,0.4)] border-lg rounded-full border-[1px]"><p>{details[current].adult ? "Adult: True" : "Adult: False"}</p></div>
                                        <div className="h-10 flex items-center text-xs  md:text-sm p-1 md:px-5 text-[rgba(255,255,255,0.5)] border-[rgba(255,255,255,0.4)] border-lg rounded-full border-[1px]"><p>{dayjs(details[current].release_date).format("MMM D, YYYY")}</p></div>
                                    </div>
                                </div>
                                <div className='w-full flex justify-center'>
                                    <div className=" bg-[rgba(87,78,78,0.5)] animate-pulse flex items-center p-3  md:p-7  border-[3px] border-white rounded-full">
                                        <h1 className='text-2xl text-white relative'>{details[current].vote_average} /10<img onClick={() => {navigate(`/${details[current].first_air_date ? "tv" : "movie"}/${details[current].id}`)}}  className='absolute h-10 w-10 bottom-12  right-0' src={visit} ></img></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex h-48 gap-9'>
                        <div className='flex flex-col md:flex-row-reverse md:gap-9 gap-3'>
                            <div className='h-full'>
                                <h1 className='text-white ml-5'>Now showing</h1>
                                <div className='h-full w-40 md:w-72 overflow-hidden  bg-red-500 rounded-xl border-2 border-red-500'>
                                    <HeroVideo index={current} results={props.data.results} />
                                </div>
                            </div>
                            <div className="h-20 md:h-full flex gap-3 items-end justify-center">
                                <div onClick={prevHero} className="transition duration-500 cursor-pointer h-8 w-14 border-[1px] hover:border-red-500 border-gray-400 rounded-lg text-center"><p className="text-xl hover:text-red-500 text-gray-400">&larr;</p></div>
                                <div onClick={nextHero} className="transition duration-500 cursor-pointer h-8 w-14 border-[1px] border-white hover:border-red-500 rounded-lg text-center"><p className="text-xl text-white hover:text-red-500">&rarr;</p></div>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center md:justify-end w-full overflow-x-scroll '>
                            <h1 className='text-gray-200'>coming up</h1>
                            <div className='w-full '>
                                <div className='flex gap-9 w-full ' >
                                    <div onClick={() => {setCurrent((current+1)%details.length)}} className='rounded-lg'>
                                        <div className='md:w-52 md:h-32 w-32 h-20 bg-cover bg-center rounded-lg ' style={{backgroundImage: 'url(' + baseUrl + details[(current+1)%details.length].backdrop_path + ')' }}  >
                                            <div className='flex transition duration-400 hover:bg-[rgba(255,255,255,0.3)] text-transparent hover:text-white h-full w-full text-center justify-center  items-center'><h1>{details[(current+1)%details.length].original_title}</h1></div>
                                        </div>
                                    </div>
                                    <div onClick={() => {setCurrent((current+2)%details.length)}} className='rounded-lg'>
                                        <div className='md:w-52 md:h-32 w-32 h-20 bg-cover bg-center rounded-lg ' style={{backgroundImage: 'url(' + baseUrl + details[(current+2)%details.length].backdrop_path + ')' }}  >
                                            <div className='flex transition duration-400 hover:bg-[rgba(255,255,255,0.3)] text-transparent hover:text-white h-full w-full text-center justify-center  items-center'><h1>{details[(current+2)%details.length].original_title}</h1></div>
                                        </div>
                                    </div>
                                    <div onClick={() => {setCurrent((current+3)%details.length)}} className='rounded-lg'>
                                        <div className='md:w-52 md:h-32 w-32 h-20 bg-cover bg-center rounded-lg ' style={{backgroundImage: 'url(' + baseUrl + details[(current+3)%details.length].backdrop_path + ')' }}  >
                                            <div className='flex transition duration-400 hover:bg-[rgba(255,255,255,0.3)] text-transparent hover:text-white h-full w-full text-center justify-center  items-center'><h1>{details[(current+3)%details.length].original_title}</h1></div>
                                        </div>
                                    </div>
                                    <div onClick={() => {setCurrent((current+4)%details.length)}} className='rounded-lg'>
                                        <div className='md:w-52 md:h-32 w-32 h-20 bg-cover bg-center rounded-lg ' style={{backgroundImage: 'url(' + baseUrl + details[(current+4)%details.length].backdrop_path + ')' }}  >
                                            <div className='flex transition duration-400 hover:bg-[rgba(255,255,255,0.3)] text-transparent hover:text-white h-full w-full text-center justify-center  items-center'><h1>{details[(current+4)%details.length].original_title}</h1></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </motion.div>}
            
        
    </>
    )
}

export default Hero