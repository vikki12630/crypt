
const ExchangeCard = ( {name, image, rank, link}  ) => {
  return (
    <div className='w-full h-44  flex justify-between md:justify-center md:w-44 md:h-64 shadow-xl bg-gradient-to-r from-violet-200 to-pink-200  md:flex-col m-5 rounded-xl items-center md:p-3 '>
      <div>
        <img src={image} alt="coin img" className="w-36 mx-4 md:mb-4 md:mx-auto md:w-24" />
      </div>
      <div className="flex flex-col gap-1 items-center p-8 md:p-0" >
        <p className="text-lg md:font-semibold  flex items-end">Rank: {rank}</p>
        <p className="text-center text-xl text-green-700 underline font-semibold">{name}</p>
        <a className="text-center" href={link}>Know More</a>
      </div>
    </div>
  )
}

export default ExchangeCard