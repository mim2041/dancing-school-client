

const ServiceCard = ({img, title, description}) => {
    return (
        <div className="max-w-xl">
            <div className='max-w-xl overflow-hidden rounded-2xl shadow-lg group relative'>
                <div className="full ">
                    <img className='w-full h-[500px] transition-transform group-hover:scale-110 duration-200' src={img} alt="" />
                </div>
                <div className='flex flex-col -bottom-10 absolute inset-0  bg-gradient-to-t from-black/60 to-transparent'>
                    <h1 className='text-[20px] font-semibold text-orange-500 leading-7 my-2 mt-80 px-2'>{title}</h1>
                    <p className='mb-4 px-2 text-justify text-white w-full'>{description.slice(1,120)}...</p>
                    <button className="bg-orange-600 text-white btn btn-block mt-2">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;