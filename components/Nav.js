import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <header data-bs-theme="dark" >
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top fw-bold navs ">
        <div className="container-fluid">
          <div className='navs__item'>
            <Link className="navbar-brand  fw-bold text navs__logotipo" href="/">Joni Dev</Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse offset-md-2  offset-lg-5 offset-xl-7 " id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text " aria-current="page" href="/">Servicios </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text" href="/nosotros">Proyectos</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text" href="/contactos">Notas </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text" href="/contactos">Experiencia </Link>
              </li>
              <div className='row'>
                <div className='col'>
                  <Link className="nav-link text" href="/contactos">+51 926 918 999 </Link>

                </div>

              </div>
              <li className="nav-item">
                <Link className="nav-link text" href="/contactos">+51 926 918 999 </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header >
  )
}

