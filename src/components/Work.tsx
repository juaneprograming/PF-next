'use client'
import Link from 'next/link'
import { Button } from './ui/button'

//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//import required modules
import { Pagination } from 'swiper/modules'

//componentes
import ProjetctCard from '@/components/ProjetctCard'

const projectData = [
    {
        image: '/work/sap.png',
        category: 'php',
        name: 'Sistema de Atencion Psicologica',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    {
        image: '/work/R&M.jpg',
        category: 'React js',
        name: 'Rick & Morty Project',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        link: '/',
        github: '/',
    },
]


const Work = () => {
  return <section className='relative mb-12 xl:mb-48'>
    <div className="container mx-auto">
        {/* texto */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
            <h2 className='section-title mb-4'>Ultimos Proyectos</h2>
            <p className='subtitle mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link href={'/projects'}>
                <Button>Todos los Proyectos</Button>
                </Link>
        </div>
        {/* sliders */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
            <Swiper className='h-[480px]' slidesPerView={1} spaceBetween={20} pagination={{clickable: true}} modules={[Pagination]}>
                {/* muestra los dos primeros proyectos para el slide */}
                {projectData.slice(0.4).map((project, index)=>{
                    return <SwiperSlide key={index}>
                        <ProjetctCard project={project} />
                    </SwiperSlide>
                })}
            </Swiper>
        </div> 
    </div>
  </section>
  
}

export default Work