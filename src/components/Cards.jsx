import Card from "./ui/Card";
import StatsCard from "./ui/StatsCard";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const { data } = useAppContext();
  const navigate = useNavigate()


  return (
    <>
      <div className="container mx-auto max-w-[90%]">
        <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 py-10">
          <StatsCard title="Total Friends" value={data.length} />
          <StatsCard title="Mutual Friends" value="5" />
          <StatsCard title="Online Friends" value="3" />
          <StatsCard title="Pending Requests" value="2" />
        </div>
        <h1 className="text-3xl font-bold mb-10">Your Friends</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto ">
          {data.map((item) => (
            <Card
              key={item.id}
              data={item}
              onClick={()=>navigate(`user/${item.id}`,{state : item})}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
