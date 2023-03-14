import { Link } from "react-router-dom";
const Welcome = () => {
    return ( 
    <div className='h-screen w-screen bg-contain bg-no-repeat bg-splash'>
        welcome
        <button><Link to="/activities">Kom i gang</Link></button>
    </div> );
}
 
export default Welcome;