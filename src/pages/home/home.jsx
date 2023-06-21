import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import Hero from "../../component/hero/hero"
import HomeLoading from "../loading/homeLoading"
import Trending from "../../component/trending/trending"
import Popular from "../../component/popular/popular"
import TopRated from "../../component/topRated/topRated"
import Error from "../error/error"
import { motion , AnimatePresence } from "framer-motion"
const Home = () => {
    const {data, loading, error} = useFetch("/movie/upcoming")
    console.log(error);
    console.log(data);
    console.log(loading);

    return (
        <>
            {loading ? <HomeLoading /> : data ? (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{duration:2}}
                    >
                        <Hero data={data} />
                        <Trending />
                        <Popular />
                        <TopRated />
                    </motion.div>
                </AnimatePresence>
            ) : 
                <Error />}
        </>
    )
}

export default Home