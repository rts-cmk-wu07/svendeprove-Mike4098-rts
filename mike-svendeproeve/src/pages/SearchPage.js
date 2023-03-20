import Navbar from "../components/nav/Navbar";
import { FiSearch } from "react-icons/fi";
import useAxios from '../hooks/UseAxios'
import { useState } from "react";
import ActivitiesList from "../components/activitiesList/ActivitiesList";
import Loading from '../components/animations/Loading'
const SearchPage = () => {

    const { data } = useAxios({
        url: "http://localhost:4000/api/v1/activities",
        headers: {
          accept: "application/json",
        },
      });
      const [searchQuery, setSearchQuery] = useState("");
    
      const filter = data?.filter((e) =>
        e.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
      let results = searchQuery !== "" && filter?.length > 0;

    return ( 
    <div className='h-screen bg-darkPurple'>
        <h1 className="font-ubuntu text-lg pl-6 my-4 pt-6 text-grey">Søg</h1>
        <form className="flex w-[90%] relative m-auto">
        <input
          type="text"
          placeholder="søg efter en aktivitet"
          className="bg-[#C4C4C4] opacity-30  w-full text-black placeholder-black font-ubuntu px-3 py-3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FiSearch size={24} className="text-grey absolute top-3 right-2 " />
        </form>
        { !results  ? (
        <div className="text-center">
       <p className="text-grey text-sm font-ubuntu">Der blev ikke fundet nogle resultater, prøv og søg efter noget andet.</p>
       
        </div>
      ) :null }
      {!data ? (
        <Loading />
      ):null}
      {results &&  (
        <div className="flex flex-col w-[90%] mt-8 m-auto pb-24 gap-8 ">
          {filter.map((item) => {
            return <ActivitiesList key={item.id} item={item} />;
          })}
        </div>
      )}
        <Navbar/>
    </div> 
    );
}
 
export default SearchPage;