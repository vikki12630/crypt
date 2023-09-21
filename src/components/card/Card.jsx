
const Card = ( { name, symbol, image, price,rank, currencysymbol="₹" } ) => {
  return (
    <div className='w-full h-44  flex justify-center md:w-44 md:h-60 shadow-xl bg-gradient-to-r from-violet-200 to-pink-200  md:flex-col m-5 rounded-xl items-center md:p-3'>
      <div>
        <img src={image} alt="coin img" className="w-36 mr-4 md:mb-4 md:mx-auto md:w-24" />
      </div>
      <div className="flex flex-col gap-1" >
        <div className="flex items-center gap-5">
        <p className="text-center font-bold text-2xl">{symbol}</p>
        <p className="text-lg font-semibold  flex items-end">Rank: {rank}</p>
        </div>

        <p className="text-center text-xl text-green-700 underline font-semibold">{name}</p>
        <p className="text-center font-semibold text-green-700 text-xl"><span className="text-black">{currencysymbol}</span> {price}</p>
      </div>
    </div>
  )
}

export default Card