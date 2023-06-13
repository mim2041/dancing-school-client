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


    const filterData = instructors.filter(instructor=>instructor.role === 'instructor');
    console.log(filterData);

    return (
      <div className="my-12">
        <h1 className="text-4xl font-semibold text-center text-orange-500 mb-12">
          Popular Instructor Section
        </h1>
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
            filterData.length > 6 ? filterData.slice(0,6).map((instructor) => (
              <SwiperSlide key={instructor._id}>
                <img className="h-[250px]" src={instructor.photo} alt="" />
                <h2 className=" text-2xl text-orange-500">
                  {instructor.name}
                </h2>
              </SwiperSlide>
            )) :
            filterData.map((instructor) => (
              <SwiperSlide key={instructor._id}>
                <img className="h-[250px]" src={instructor.photo} alt="" />
                <h2 className=" text-2xl text-orange-500">
                  {instructor.name}
                </h2>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    );
};

export default PopularInstructor;