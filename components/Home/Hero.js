import React from 'react'

export default function Hero () {
  return (
    <section className='container-fluid hero'>
      <div className='row'>
        <article className='col-lg-6'>
          <h1 className='hero__title'>hey there Noe</h1>
          <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' className='d-none d-lg-block hero__email'>noe.flores.code@gmail.com</a>
        </article>

        <article className='col-lg-6'>
          <p>esto body</p>
        </article>
      </div>
    </section>
  )
}
