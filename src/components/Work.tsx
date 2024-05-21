'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectCard from './ProjectCard';
import React from 'react';


// Interfaz Project
interface Project {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string; // Link ya no es opcional (según tu componente ProjectCard)
  github?: string; // Github sigue siendo opcional
}

const projectData: Project[] = [
  {
    image: '/work/sap.png',
    category: 'PHP',
    name: 'SAP',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'React Js',
    name: 'Rick & Morty App',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: '/',
    github: '/',
  },
  {
    image: '',
    category: 'Next Js',
    name: 'Dashboard',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: '/',
    github: '/',
  },
];

const Work: React.FC = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className="container mx-auto">
        {/* texto */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>Ultimos Proyectos</h2>
          <p className='subtitle mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link href='/projects'>
            <Button>Todos los Proyectos</Button>
          </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0 '>
          <Swiper
            className='h-[480px] '
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]} // Pasar Pagination como un array
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
          >
            {projectData.slice(0, 4).map((project, index) => (
              <SwiperSlide key={index}> 
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
