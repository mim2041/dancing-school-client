import logo from '../../../assets/images/logo1.jpg';
import aboutImg from '../../../assets/images/service4.jpg';

const About = () => {
    return (
        <div className='flex flex-col lg:flex-row px-8 lg:px-24 py-12 my-16'>
            <div className='w-full relative'>
                <img className='w-4/5 lg:w-2/4 rounded-lg shadow-2xl' src={logo} alt="" />
                <img src={aboutImg} className='absolute w-3/5 lg:w-2/5 -bottom-20 right-2 lg:-bottom-20 lg:right-40 shadow-2xl rounded-lg' alt="" />
            </div>
            <div className='w-full mt-24 lg:mt-2'>
                <h2 className='text-2xl'>About Us</h2>
                <h1 className='text-4xl font-semibold my-4 text-yellow-500'>Send Your Kids <br/> With Our Guarantee<br/> To Widen their Creativity</h1>
                <p>Our Dancing school offers a variety of dance classes for kids skill levels, and dance styles. These classes may include ballet, jazz, contemporary, hip-hop, tap, ballroom, Latin, salsa, breakdance, and more.</p>
            </div>
        </div>
    );
};

export default About;