import {bigboy} from "../assets/images/index.js";

const Banner = () => {
    return (
        <section>
            <img src={bigboy} alt='bigboy' className='m-auto object-cover'/>
        </section>
    );
};

export default Banner;