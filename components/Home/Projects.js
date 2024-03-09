import React from 'react'


// Import Swiper React components
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Link from 'next/link';
import 'swiper/css/pagination';


const projects = [
    {
        id: 1,
        title: 'MoveBike',
        subtitle: 'Motorcycle rental platform',
        imageCover: './assets/projects/laptop.png',
        color: ' #FE5F3B',
    },
    {
        id: 2,
        title: 'MoveBike',
        subtitle: 'Motorcycle rental platform',
        imageCover: './assets/projects/laptop.png',
        color: ' #FE5F3B',
    },
  
 
    
    {
        id: 3,
        title: 'MoveBike',
        subtitle: 'Motorcycle rental platform',
        imageCover: './assets/projects/laptop.png',
        color: ' #FE5F3B',
    },
    {
        id: 4,
        title: 'MoveBike',
        subtitle: 'Motorcycle rental platform',
        imageCover: './assets/projects/laptop.png',
        color: ' #FE5F3B',
    },
    {
        id: 4,
        title: 'MoveBike',
        subtitle: 'Motorcycle rental platform',
        imageCover: './assets/projects/laptop.png',
        color: ' #FE5F3B',
    },

]

export default function Projects() {
    return (
        <seccion className=' projects'>
            <div className='contanier-fluid' >
                <div className='row'>
                    <div className='col-12 d-flex justify-content-between'>
                        <div>
                            <h2 className=' projects__title'>My Work Experience</h2>
                            <p className=' projects__subtitle'>Perfect solutions for digital experience</p>
                        </div>

                        <Link href='/' className='projects__explore d-none d-md-block'>
                            Explore More Works
                        </Link>

                    </div>

                    <div className='col-12 '>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1.3}

                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}

                            navigation={true}
                            modules={[Autoplay]}
                            loop

                            breakpoints={{
                                576: {
                                    slidesPerView: 1.9,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                992: {
                                    slidesPerView: 2.6,
                                    spaceBetween: 50,
                                },

                                1024: {
                                    slidesPerView: 2.6,
                                    spaceBetween: 100,
                                },

                            }}


                            className='projects__swiper'
                        >
                            {
                                projects.map((projects) => (
                                    <SwiperSlide key={projects.id}>
                                        <section className='  projects__item' style={{ backgroundColor: projects.color }}>
                                            <h3 className='projects__item-title'>{projects.title}</h3>
                                            <p className='projects__item-subtitle'>{projects.subtitle}</p>
                                            {
                                                projects.imageCover ? (
                                                    <img src={projects.imageCover} alt={`Imagen ${projects.title}`} className='projects__item-img' />

                                                ) : ''
                                            }

                                        </section>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </seccion>)
}
