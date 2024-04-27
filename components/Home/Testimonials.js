import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const testimonials = [
    {
        id: 1,
        avatar: '/assets/testimonials/Ellipse.webp',
        subtitle: 'I got a job that was in accordance with the salary and field of word. The process of submitting an application was quite cosy. I got a job that was in accordance with the salary and field of word. ',
        name: 'John Allendone',
        job: 'trabajo',
    },
    {
        id: 2,
        avatar: '/assets/testimonials/Ellipse.webp',
        subtitle: 'I got a job that was in accordance with the salary and field of word. The process of submitting an application was quite cosy. I got a job that was in accordance with the salary and field of word. ',
        name: 'John Allendone',
        job: 'CEO MoveBike',
    },
    {
        id: 3,
        avatar: '/assets/testimonials/Ellipse.webp',
        subtitle: 'I got a job that was in accordance with the salary and field of word. The process of submitting an application was quite cosy. I got a job that was in accordance with the salary and field of word. ',
        name: 'John Allendone',
        job: 'CEO MoveBike',
    },
    {
        id: 4,
        avatar: '/assets/testimonials/Ellipse.webp',
        subtitle: 'I got a job that was in accordance with the salary and field of word. The process of submitting an application was quite cosy. I got a job that was in accordance with the salary and field of word. ',
        name: 'John Allendone',
        job: 'CEO MoveBike',
    },

]
export default function Testimonials() {
    return (

        <section className=' container-fluid testimonials'>
            <div className='row'>
                <div className='col-12 '>
                    <h2 className='testimonials__title'>People Talk About Me </h2>
                    <p className='mb-0 testimonials__subtitle'>I got a job that was in accordance with the salary and field  of word. The process of submitting an application was quite cosy.</p>

                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}

                        breakpoints={{

                            768: {
                                spaceBetween: 20,
                                slidesPerView: 2.3,
                                centeredSlides: true,


                            },
                            992: {
                                spaceBetween: 10,
                                slidesPerView: 2.5,
                                centeredSlides: true,
                            },
                        }}
                        modules={[Pagination]}
                        className='testimonials__swiper'
                    >
                        {
                            testimonials.map(testimonials => (
                                <SwiperSlide key={testimonials.id}>
                                    {({ isActive }) => (
                                    <section className={`testimonials__card  ${isActive ? 'active':  ''}`}>
                                        <Image src={testimonials.avatar} alt='Chica del testimonio' width={60} height={60} className='testimonials__card-avatar' />
                                        <p className='mb-0 testimonials__card-subtitle'>{testimonials.subtitle} </p>
                                        <hr className='testimonials__card-divisor' />
                                        <h4 className='mb-0 testimonials__card-name'> {testimonials.name}</h4>
                                        <p className='testimonials__card-job'> <small>{testimonials.job}</small> </p>
                                    </section>
                                    )}
                                </SwiperSlide>

                            ))
                        }

                    </Swiper>
                </div>
            </div>
        </section>
    )
}
