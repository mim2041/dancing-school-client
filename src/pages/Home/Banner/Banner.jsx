import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/images/home/banner1.jpg';
import img2 from '../../../assets/images/home/banner2.jpg';
import img3 from '../../../assets/images/home/banner3.jpg';
import img4 from '../../../assets/images/home/banner4.jpg';
import img5 from '../../../assets/images/home/banner5.jpg';
import img6 from '../../../assets/images/home/banner6.jpg';

const Banner = () => {

    const bannerTitle = <div className='absolute top-10 lg:mt-64 bg-gradient-to-r from-green-500 text-left pl-8 py-12 lg:ml-8'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-yellow-500'>Welcome to <br/> Our Dancing School</h1>
        <p className='lg:w-1/2'>Send your kids to our institute to widen their extra caricular activities. Our dancing school instructors will driven by their deep passion for dance. They have dedicated their lives to their art form and want to share their knowledge and expertise with others.</p>
    </div>
    return (
        <Carousel className='mb-12'>
                <div className='mx-auto relative'>
                    <img className='' src={img1} />
                    {bannerTitle}
                </div>
                <div>
                    <img className='' src={img2} />
                    {bannerTitle}
                </div>
                <div>
                    <img className='' src={img3} />
                    {bannerTitle}
                </div>
                <div className='mx-auto'>
                    <img className='' src={img4} />
                    {bannerTitle}
                </div>
                <div>
                    <img className='' src={img5} />
                    {bannerTitle}
                </div>
                <div>
                    <img className='' src={img6} />
                    {bannerTitle}
                </div>
            </Carousel>
    );
};

export default Banner;