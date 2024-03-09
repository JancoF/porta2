import React from 'react'

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
                            [1, 2, 3].map(index => (
                                <section key={index} className='experience__company'>
                                    <h4 className='experience__company-mane'>Landrada Desarrollo S.A de C.V.</h4>
                                    <p className='experience__company-date'>Nov 21 - Current</p>
                                </section>
                            ))
                        }
                    </div>

                    <div className='col-2 col-lg-2'>
                        <section className='experience__timeline'>
                            {
                                [1, 2, 3].map(index => (
                                    <>
                            <div key={index} className='experience__timeline-wrapper-squere'>
                                <div className='experience__timeline-wrapper-squere-icons'>

                                </div>
                            </div>
                        <div className='experience__timeline-divisor'> </div>

                            </>

                            ))
                        }

                        </section>

                    </div>
                    <div className='col-10 col-lg-5'>
                        {
                            [1, 2, 3].map(index => (

                                <section key={index} className='experience__position'>
                                    <h3 className='experience__position-mane'>FullStack Developer JS</h3>
                                    <p className='exprecience__position-description|'>I design and develop strategic solutions for the company's web development. I also implement the integration of cloud services and technologies such as AWS. I also design interfaces based on user experience.</p>
                                    <section>
                                        <h4>Landrada Desarrollo S.A de C.V.</h4>
                                        <p>Nov 21 - Current</p>
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
