'use client'
import Link from 'next/link'
import { Button } from './ui/button'

//importar swiper style
import 'swiper/css'
import 'swiper/css/pagination'

//import required modules
import { Pagination } from 'swiper/modules'

//componentes
import ProjectCard from './ProjectCard'

const projectData = [
  {
    image: '/work/sap.png',
    category: 'PHP',
    name: 'SAP',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/work/R&M.png',
    category: 'React Js',
    name: 'Rick & Morty App',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: '/',
    github: '',
  },
  {
    image: '/work/sap.png',
    category: 'Next Js',
    name: 'Dashboard',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const Work = () => {
  return <section className='relative mb-12 xl:mb-48'>
    <div className="container mx-auto">
      {/* texto */}
      <div className='bg-pink-100 max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
        <h2 className='section-title mb-4'>Ultimos Proyectos</h2>
        <p className='subtitle mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Link href='/projects'>
          <Button>Todos los Proyectos</Button>
        </Link>
      </div>
      {/* slider */}
      <div>slider</div>
    </div>
  </section>

}

export default Work