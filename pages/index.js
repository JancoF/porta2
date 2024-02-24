import Layout from '@/components/Layout'
import Hero from '@/components/Home/Hero'
import Services from '@/components/Home/Services'
export default function Home () {
  return (
    <Layout title='Home' description={'Descripcionhome'}>
      <main>
        <Hero />
        <Services/>
      </main>
    </Layout>
  )
}
