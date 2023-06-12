import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://dancing-school-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInstructors(data);
            })
    } ,[])

    return (
        <div className="my-12">
            <h1 className="text-4xl font-semibold text-center text-orange-500 mb-12">Popular Instructor Section</h1>
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
                        instructors.map(instructor => <SwiperSlide key={instructor._id}>
                            <img src={instructor.instructor_photo} alt="" />
                            <h2 className=" text-2xl text-orange-500">{instructor.instructor}</h2>
                        </SwiperSlide>)
                    }
                </div>
                
            </Swiper>
        </div>
    );
};

export default PopularInstructor;