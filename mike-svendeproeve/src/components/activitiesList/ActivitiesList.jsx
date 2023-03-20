const ActivitiesList = ({item}) => {
    return ( 
    <div className=" rounded-[3rem] w-[22rem] h-[22rem]  relative">
          <img
        src={item.asset.url}
        alt={item.name}
        className="h-full w-full rounded-[3rem] max-h-[22rem] object-cover rounded-br-none"
      />
      <div className="bg-pink bg-opacity-80 w-full h-24 rounded-tr-[3rem] rounded-bl-[3rem] absolute bottom-0">
        <div className="pt-5 pl-5">
          <h3 className=" font-ubuntu text-sm">{item.name}</h3>
          <h4 className=" font-ubuntu text-sm">
            {item.minAge}-{item.maxAge} år
          </h4>
        </div>
      </div>
    </div> 
    );
}
 
export default ActivitiesList;