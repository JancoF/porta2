import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Nav() {
  return (
    <>
      <nav className="navbar navs ">
        <div className='container '>
          <h2 className='navbar-item me-5 '>&lt;/Noe dev&gt;</h2>
          <ul className='navbar-n navs__wrap d-none d-lg-block d-lg-flex'>
            <li className='nav-item navs__wrap-itms '>
              <Link className='nav-link navs__wrap-itms-title' href='/'> Service</Link>
            </li>
            <li className='nav-item navs__wrap-itms'>
              <Link className='nav-link navs__wrap-itms-title' href='/'>Proyectos</Link>
            </li>
            <li className='nav-item navs__wrap-itms'>
              <Link className='nav-link navs__wrap-itms-title' href='/'> Notas</Link>
            </li>
            <li className='nav-item navs__wrap-itms'>
              <Link className='nav-link navs__wrap-itms-title' href='/'> Experiencia</Link>
            </li>
            <li className=' nav-item pt-2  d-flex align-items-center'>
              <Link className='nav-link navs__wrap-itms-title m-3' href='/'> +51 926 918 999</Link>
              <div className="col navs__wrap-what">
                <Image src={'/assets/icons/whatsapp.png'} width={27} height={27} alt='Whastapp' className="navs__whatsapp"/>
              </div>
            </li>
          </ul>


          <button class="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="offcanvas offcanvas-start " tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header ">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">&lt;/Noe dev&gt;</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr className="navs__mobile-line"/>

            <div class="offcanvas-body ">
              <ul class="navbar-nav  ">
                <li class="nav-item ">
                  <Link class="nav-link navs__mobile-items "  href="#">Service</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link navs__mobile-items "  href="#">Proyectos</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link navs__mobile-items" href="#">Notas</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link navs__mobile-items" href="#">Experiencia</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav >
      <hr className="navs__line"/>
    </>

  )
}

