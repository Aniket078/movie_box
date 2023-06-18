
const SwitchTab = ({data, onTabChange, sTab}) => {

  return (
    <div className='flex justify-center border-2 rounded-3xl overflow-hidden items-center h-6 md:h-10'>
        {data.map((tab) => {
            return (
              <div onClick={() => {onTabChange(tab)}} key={tab} className={` rounded-2xl transition-all duration-300 text-xs md:text-lg w-10 md:w-16 justify-center flex items-center h-full text-white ${sTab===tab ? 'text-black bg-white' : ''}`} ><h1>{tab}</h1></div>
            )
        })}
    </div>
  )
}

export default SwitchTab