// next image 
import Image from "next/image";
// next link
import Link from "next/link";

// icons
import { HiArrowRight } from 'react-icons/hi2'

const ProjectsBtn = () => {
  return  (
  <div className='max-auto xl:mx-0 '>
      <Link href={'/work'}>
          <Image src={'/rounded-text.png'} width={141} height={148} alt='' className='animate-spin-slow w-full h-full max-w-[141px]' />
      </Link>
  </div>
  );
};

export default ProjectsBtn;
