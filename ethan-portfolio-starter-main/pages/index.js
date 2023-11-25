// next image
import Image from 'next/image';

// componets
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';


// framer motion
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '../variants'

const Home = () => {
  return <div className='bg-primary/60 h-full'>
    { /* text*/}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black-30'>
      <div className=' flex flex-col justify-center  xl:pt-40 xl:text-left h-full container mx-auto'>
        {/* title */}
        <h1 className='h1'>Transforming Ideas <br /> Into <span className='text-accent'>Digital Reality</span></h1>
        {/* subtitle */}
        <p className='max-w-sm xl:max-w-xl max-auto xl:mx-0 mb-10 xl:mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maxime aut corrupti possimus reprehenderit numquam molestias corporis esse facere quo!</p>
        {/* BTN */}
        <div className=' xl:hidden'>
          <ProjectsBtn />
        </div>
      </div>
    </div>
    { /* Image*/}
    <div>image</div>
  </div>
}

export default Home
