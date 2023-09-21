import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Card from "../card/Card"
import Error from "../Error/Error";

const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  const currencysymbol= currency === "inr" ? "₹" : currency === "usd" ? "$" : "€"


  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`)
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
    {/* <h1 className="text-center font-bold text-5xl underline text-[#a1ebff] m-10">Top 100 List</h1> */}
      {loader ? (
        <Loader />
      ) : (
        <div className="w-11/12 md:w-3/4 flex flex-wrap justify-center mx-auto">
          {coins.map((i) => (
            <Card 
            key={i.id}
            name={i.name}
            symbol={i.symbol}
            image={i.image}
            price={i.current_price}
            lastupdate={i.last_updated}
            rank={i.market_cap_rank}
            currencysymbol={currencysymbol}
            />
        ))}
        </div>
      )}
    </>
  )
}

export default Coins