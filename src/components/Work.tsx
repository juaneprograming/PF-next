// 'use client' directive must be at the top of the file
'use client'

import Link from 'next/link';
import { Button } from './ui/button';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjetctCard';  // Corrected component name

const projectData: any[] = [
  // ... (project data is the same)
];

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className="container mx-auto">
        {/* ... (rest of the component) */}

        {/* sliders */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[480px]'
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {/* Show the first four projects for the slide */}
            {projectData.slice(0, 4).map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} /> {/* Corrected component name */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
