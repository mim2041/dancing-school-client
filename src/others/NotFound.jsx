
import notFoundImg from '../assets/images/notFound.jpg'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Link  to="/"><h2 className=' text-center text-2xl text-violet-500 font-bold my-10 btn hover:bg-violet-900 hover:text-white'>Back To Home</h2></Link>
            <img src={notFoundImg} alt="" />
        </div>
    );
};

export default NotFound;