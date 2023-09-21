import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import ExchangeCard from "../ExchangeCard/ExchangeCard";


const Top10exchanges = () => {

    const [coins, setCoins] = useState([]);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(false);
    const [currency, setCurrency] = useState("inr");
  
    useEffect(() => {
      fetch(`https://api.coingecko.com/api/v3/exchanges`)
        .then((status)=>{
          return status.json();
        })
        .then((response)=>{
          setCoins(Object.values(response))
          setLoader(false)
        }).catch(()=>{
          console.log("error")
          setError(true)
          setLoader(false)
        });
    
        }, [currency])
  
  
        if(error) return <Error />



  return (
    <>
      <h1 className="text-center font-bold text-5xl underline text-[#a1ebff] m-10">Top 10 Exchanges</h1>
      <div>
      {loader ? (
        <Loader />
      ) : (
        <div className="w-11/12 md:w-3/4 flex flex-wrap justify-center mx-auto">
          {coins.slice(0,10).map((i) => (
            <ExchangeCard 
            key={i.id}
            name={i.name}
            image={i.image}
            rank={i.trust_score_rank}
            link={i.url}
            />
        ))}
        </div>
      )}
      </div>
    </>
  )
}

export default Top10exchanges