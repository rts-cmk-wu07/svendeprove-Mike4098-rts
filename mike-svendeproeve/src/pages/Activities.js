import React from 'react'
import ActivitiesList from '../components/activitiesList/ActivitiesList';
import Navbar from '../components/nav/Navbar';
import Axios from '../hooks/UseAxios';
import Loading from '../components/animations/Loading';

export default function Activities() {
    
  const { data, loading } = Axios({
    url: "http://localhost:4000/api/v1/activities",
    headers: {
      accept: "application/json",
    },
  });
   return (
    <>
       <div className=' m-auto w-[22rem]  pb-24 flex flex-col gap-8'>
      <h1 className="my-4 text-lg font-ubuntu pl-4 text-grey">Aktiviteter</h1>
      {loading ? (
        <div className="w-full m-auto">
          <Loading />
        </div>
      ) : (
        data &&
        data.map((item) => {
          return <ActivitiesList key={item.id} item={item} />;
        })
      )}
        
    </div>
    <Navbar/>
    </>
 
    
  )
}
