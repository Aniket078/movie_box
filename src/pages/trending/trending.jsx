import { useEffect } from "react"
import { fetchData } from "../../utils/utils"

const Trending = () => {

    useEffect(() => {
        fetchData("/movie/popular").then((res) => console.log(res))
    }, [])
    return (
        <>
            TREnding
        </>
    )
}
export default Trending