import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BADGE_KODEMIA from '@/public/assets/icons/badge-kodemia.png'
import IMG_I from '@/public/assets/home/i.webp'


export default function Hero() {
  return (
    <section className='container-fluid hero'>
      <div className="container">

    
      <div className='row'>
        <section className='col-lg-6'>
          <h1 className='hero__title'>Hey There, <br/>I’m Noe </h1>
          <p className='hero__subtitle-md d-none d-md-block d-lg-none  '>I design beautifully simple <br />  things, And I love what i do</p>

          <Link href='/' className='d-none d-lg-block  hero__email'>jonatanare.dev@gmail.com</Link>
          <div className='hero__experiencies'>
            <strong>3</strong>
            <p className='hero__experiencies-description'>Years <br/> Experiences</p>
          </div>
        </section>
        <section className='col-lg-6 position-relative '>
          <p className='hero__subtitle d-md-none d-lg-block '>I design beautifully simple <br />  things, And I love what i do</p>
          <figure className='hero__badge '>
            <Image src={BADGE_KODEMIA} alt='Badge Kodemia' />
          </figure>
          <div className='hero__wrap mx-auto'>
            <Image src={IMG_I} width={400} height={500} alt='Foto Noe Flores' className='hero__wrap-photo ' />

          </div>
          <p className='hero__description d-none d-md-block '>FullStack <br/> JavaScript<br/>  Developer</p>
        </section>
      </div>
      </div>
    </section>
  )
}
