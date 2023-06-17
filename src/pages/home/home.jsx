import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import Hero from "../../component/hero/hero"

const Home = () => {
    const {data, loading} = useFetch("/movie/upcoming")
    console.log(data);

    return (
        <>
            {data && <Hero data={data} />}
        </>
    )
}

export default Home