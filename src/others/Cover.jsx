
import { Parallax } from 'react-parallax';

const Cover = ({img, title, subtitle}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 40 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div>
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">{subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
        <div style={{ height: '200px' }} />
    </Parallax>
        
    );
};

export default Cover;