import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import ClassCard from "./ClassCard";

const PopularClasses = () => {

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClasses(data);
            })
    } ,[])

    return (
        <div>
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
                <SwiperSlide>
                    <div>
                        
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default PopularClasses;