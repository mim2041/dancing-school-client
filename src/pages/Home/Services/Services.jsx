import service1 from '../../../assets/images/services/service1.jpg';
import service2 from '../../../assets/images/services/service2.jpg';
import service3 from '../../../assets/images/services/service3.jpg';
import service4 from '../../../assets/images/services/service4.jpg';
import ServiceCard from './ServiceCard';

const Services = () => {
    return (
        <div className='bg-green-100 p-5 lg:p-12'>
            <h1 className='text-center py-1 my-12 text-4xl font-bold border-0 border-b-4  border-orange-500 w-1/5 mt-4 mx-auto'>Our Services</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-16'>
            <ServiceCard img={service1} title={"Dance Classes"}
                description={"OOur Dancing school offers varieties of dance classes for kids skill levels, knowledge and dance styles. These classes may include ballet, jazz, contemporary, hip-hop, tap, ballroom, Latin, salsa, breakdance, and more. Classes are typically structured to provide progressive learning, starting from foundational techniques and gradually advancing to more complex movements and choreography."}
            ></ServiceCard>

            <ServiceCard img={service2} title={"Private Lessons"}
                description={"OOur Dance school often offer private lessons for individuals/ small groups. Private lessons allow for personalized instruction tailored to the specific needs and goals of the student. They can be beneficial for dancers seeking focused attention, accelerated progress, or specialized training in a particular dance style or technique."}
            ></ServiceCard>

            <ServiceCard img={service3} title={'Choreography Services'}
                description={"WWe often offer choreography services for various purposes. Choreographers work closely with individuals or groups to create unique routines that showcase their skills, artistic expression, and fit the specific requirements of the occasion."}
            ></ServiceCard>

            {/* <ServiceCard img={service4} title={"Performance Opportunities"}
                description={"WWe may often organize many performance for Our students. These include recitals, events, with other kids performing arts organizations. Participating in performances allows dancers to apply their training, gain stage experience, and share their passion for dance with an audience."}
            ></ServiceCard> */}
            </div>
        </div>
    );
};

export default Services;