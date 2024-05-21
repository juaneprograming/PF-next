'use client'

import Image from 'next/image'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const reviewData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Julio Watsamara',
        job: 'Analista',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur minus commodi suscipit voluptate incidunt optio dolorem reprehenderit et, cum totam explicabo aspernatur cumque architecto omnis sapiente id harum obcaecati.',
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Carlos Barrera',
        job: 'Morrraniando',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur minus commodi suscipit voluptate incidunt optio dolorem reprehenderit et, cum totam explicabo aspernatur cumque architecto omnis sapiente id harum obcaecati.',

    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Mochito Dev',
        job: 'Dueño del real tapita',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur minus commodi suscipit voluptate incidunt optio dolorem reprehenderit et, cum totam explicabo aspernatur cumque architecto omnis sapiente id harum obcaecati.',
    },
]



const Reviews = () => {
  return <section className='mb-12 xl:mb-32'>
    <div className="container mx-auto">
        <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
        {/* slider */}
        <Swiper slidesPerView={1} breakpoints={{
            640: { slidesPerView: 2},
            1400: { slidesPerView: 3},
        }}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{
            clickable: true,
        }}
        className='h-[350px]'
        >
            {reviewData.map((person, index)=> {
                return <SwiperSlide key={index}>
                   <Card>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Vel maxime voluptatum numquam ullam. 
                    Tempora alias, 
                    deserunt fugiat dicta exercitationem accusamus 
                    consequuntur repudiandae esse fugit sapiente distinctio, 
                    maiores repellat dignissimos blanditiis.
                    </Card> 
                </SwiperSlide>
            })}
        </Swiper>
    </div>
  </section>
  
}

export default Reviews