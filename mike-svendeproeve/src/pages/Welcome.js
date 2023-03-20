import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const Welcome = () => {
    return ( 
            <div className='h-screen  flex flex-col justify-center pb-12 bg-center w-screen bg-cover relative  bg-no-repeat bg-splash'>
                <div className="absolute bottom-1/3 -translate-y-12 left-8 z-30 leading-[3rem]">
                    <h1 className="textStroke font-roboto">LANDRUP</h1>
                     <p className="WelcomeText font-racing">DANS</p>
                 <div className="w-72 h-4 translate-y-5 -ml-12 bg-darkPurple "></div>
             </div>         
       
                <motion.div
                    initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1.5, duration: 0.5 }}
                    >
                    <button className="bg-darkPurple absolute bottom-16 left-16 w-64 h-14 text-md text-grey font-ubuntu rounded-[10px]"><Link to="/activities" >Kom i gang</Link></button>
                </motion.div>
            </div> 
    );
}
 
export default Welcome;