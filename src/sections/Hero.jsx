import { background } from '../assets/images/index.js'
const Hero = () => {
  return (
    <section>
      <img src={background} alt='background'
        className='top-0 left-0 w-full max-h-screen object-cover'
      />
    </section>
  );
};

export default Hero;