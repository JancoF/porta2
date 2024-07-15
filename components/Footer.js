import React from 'react'

export default function Footer() {
  return (
    <section className='container-flex  footer '>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
            <h3 className='footer__wraper-title'>Let’s Make Something Amazing Together</h3>
            <h3 className='footer__wraper-subtitle'>Start by <span className='footer__wraper-subtitle-color'> saying hi</span> </h3>
          </div>

          <section className='col-12 col-md-6 col-lg-6 col-xl-6  '>
            <h5 className='footer__item-title'>Information</h5>
            <p className='footer__item-subtitle'> <small>Arequipa, Perú</small> </p>
            <ul className='footer__item-list'>
              <li className='footer__item-list-listing'> Services</li>
              <li className='footer__item-list-listing'> Proyectos </li>
              <li className='footer__item-list-listing'> Notas </li>
              <li className='footer__item-list-listing'>Experiencia</li>
            </ul>
          </section>
          <hr className='footer__line' />
          <div className='footer__wrap'>
            <div className='row row-cols-1 row-cols-md-2'>
              <div className='col'>
                <p className='footer__wrap-made d-none d-md-block'> Noe Dev</p>
              </div>
              <div className='col '>
                <p className='  footer__wrap-collaboration'>Power By <strong> DevKoore</strong>  <br /> con❤️</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
