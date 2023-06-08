import service1 from '../../../assets/images/services/service1.jpg';
import service2 from '../../../assets/images/services/service2.jpg';
import service3 from '../../../assets/images/services/service3.jpg';
import service4 from '../../../assets/images/services/service4.jpg';

const Services = () => {
    return (
        <div className='bg-green-100 p-5 lg:p-12'>
            <h1 className='text-center my-12 text-4xl font-bold '>Our Services</h1>
            <div className='flex gap-16 mx-auto justify-between'>
                <div className='full'>
                    <h1 className='text-3xl'>Dance Classes</h1>
                    <p className='lg:w-3/4'>Our Dancing school offers a variety of dance classes for kids skill levels, and dance styles. These classes may include ballet, jazz, contemporary, hip-hop, tap, ballroom, Latin, salsa, breakdance, and more. Classes are typically structured to provide progressive learning, starting from foundational techniques and gradually advancing to more complex movements and choreography.</p>
                </div>
                <div>
                    <img className='w-3/4' src={service1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Services;