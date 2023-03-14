import {FiHome, FiSearch, FiCalendar} from 'react-icons/fi'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
    <div>
    <nav className="flex justify-evenly absolute bottom-4  items-center w-full ">
        <button className="border-2 flex items-center justify-center rounded-full border-black h-12 w-12"><Link to="/Activities"><FiHome size={24}/></Link></button>
        <button className="border-2 flex items-center justify-center rounded-full border-black h-12 w-12"><Link to="/Search"><FiSearch size={24}/></Link></button>
        <button className="border-2 flex items-center justify-center rounded-full border-black h-12 w-12"><Link to="/Calendar"><FiCalendar size={24}/></Link></button>
    </nav>
    </div> 
    );
}
 
export default Navbar;