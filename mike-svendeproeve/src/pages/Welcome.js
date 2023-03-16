import { Link } from "react-router-dom";
const Welcome = () => {
    return ( 
            <div className='h-screen flex items-end justify-center pb-12 bg-center w-screen bg-cover  bg-no-repeat bg-splash'>
                <button className="bg-darkPurple w-64 h-14 text-md text-grey rounded-[10px]"><Link to="/activities">Kom i gang</Link></button>
            </div> 
    );
}
 
export default Welcome;