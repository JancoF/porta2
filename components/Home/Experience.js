import React from 'react'
import business from '@/data/business.json'

export default function Experience() {
    return (
        <section className=' experience'>
            <div className='container '>
                <div className='row '>
                    <div className='col-12'>
                        <h2 className='experience__title'>My Work Experience</h2>
                    </div>

                </div>
                <div className='row '>
                    <div className='col-lg-5 d-none d-lg-block'>
                        {
                            business.map(item => (
                                <section key={item.id} className='experience__company'>
                                    <h4 className='experience__company-mane'>{item.name}</h4>
                                    <p className='experience__company-date'>{item.date}</p>
                                </section>
                            ))
                        }
                    </div>

                    <div className='col-2 col-lg-2'>
                        <section className='experience__timeline '>
                            {
                                [1, 2, 3].map(index => (
                                    <>
                                        <div key={index} className='experience__timeline-wrapper-squere'>
                                            <div className='experience__timeline-wrapper-squere-icons'>

                                            </div>
                                        </div>
                                        <div className='experience__timeline-divisor  '> </div>
                                    </>
                                ))
                            }

                        </section>
                    </div>

                    <div className='col-10 col-lg-5'>
                        {
                            business.map(item => (

                                <section key={item.id} className='experience__position'>
                                    <h3 className='experience__position-name'>{item.posicion}</h3>
                                    <p className='experience__position-description'>{item.description}</p>
                                    <section>
                                        <h4 className='experience__position-company'>{item.name}</h4>
                                        <p className='experience__position-date'>{item.date}</p>
                                    </section>
                                </section>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section >
    )
}
