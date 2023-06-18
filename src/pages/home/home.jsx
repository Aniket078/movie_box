import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import Hero from "../../component/hero/hero"
import HomeLoading from "../loading/homeLoading"
import Trending from "../../component/trending/trending"
import Popular from "../../component/popular/popular"
import TopRated from "../../component/topRated/topRated"

const Home = () => {
    const {data, loading, error} = useFetch("/movie/upcoming")
    console.log(error);
    console.log(data);
    console.log(loading);

    return (
        <>
            {loading ? <HomeLoading /> : data ? (
                <>
                    <Hero data={data} />
                    <Trending />
                    <Popular />
                    <TopRated />
                </>
            ) : 
                <h1 className="text-4xl text-white">error</h1>}
        </>
    )
}

export default Home