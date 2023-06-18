import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import Hero from "../../component/hero/hero"
import HomeLoading from "../loading/homeLoading"

const Home = () => {
    const {data, loading, error} = useFetch("/movie/upcoming")
    console.log(error);
    console.log(data);
    console.log(loading);

    return (
        <>
            {loading ? <HomeLoading /> : data ? <Hero data={data} /> : <h1>error</h1>}
        </>
    )
}

export default Home