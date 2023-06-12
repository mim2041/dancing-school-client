import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useEffect, useState } from "react";


const PopularClasses = () => {

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://dancing-school-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClasses(data);
            })
    } ,[])

    return (
        <div className="my-12">
            <h1 className="text-4xl font-semibold text-center text-orange-500 mb-12">Popular Classes Section</h1>
            <Swiper
                slidesPerView={4}
                // centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div className="mt-12">
                    {
                        classes.map(singleClass => <SwiperSlide key={singleClass._id}>
                            <img src={singleClass.photo} alt="" />
                            <h2 className="text-center text-2xl text-orange-500">{singleClass.class_name}</h2>
                        </SwiperSlide>)
                    }
                </div>
                
            </Swiper>
        </div>
    );
};

export default PopularClasses;