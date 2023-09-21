import Top10exchanges from "../Top10exchanges/Top10exchanges"
import Top10coins from "../top10coins/Top10coins"

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
    <Top10coins />
    <Top10exchanges />
    </div>
  )
}

export default Home