import { useSelector } from "react-redux"
import { motion } from "framer-motion"

const Casts = ({data, loading}) => {
    const {url} = useSelector((state) => state.home)

    const container = {
        hidden: { scale: 0.9 },
        show: {
            scale: 1,
            transition: {
                duration: 0.2,
                delay:0.5
            }
        }
    }

    return (
        <>
            {!loading ?
            <>
                <h1 className="text-2xl text-gray-200  mt-5 mb-2">Top Cast</h1>
                <motion.div className="flex  overflow-y-scroll gap-4">
                    {data?.map((item, index) => {
                        let imgPath = item.profile_path ? url.profile + item.profile_path: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdigitalhealthskills.com%2Fno-user-image-icon-27-2%2F&psig=AOvVaw35P1JXbfjcWJxZ1s_qK6OM&ust=1690175182479000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOC9wK-HpIADFQAAAAAdAAAAABAE"
                        return (
                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show" 
                                className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" 
                                key={index}
                            >
                                <div className=" overflow-hidden shadow-lg">
                                    <div className="w-28 h-28 rounded-full overflow-hidden" >
                                        <img  src={imgPath} alt=""/>
                                    </div>
                                    <div className="px-1 py-1 text-center">
                                        <div className="font-bold text-sm text-gray-300">
                                            {item.name}
                                        </div>
                                        <div className="text-gray-400 text-xs">
                                            {item.character}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </>
            :
            <></>}
        </>
    )
}

export default Casts