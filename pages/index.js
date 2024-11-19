import Layout from '@/components/Layout'
import Hero from '@/components/Home/Hero'
import Services from '@/components/Home/Services'
import Experience from '@/components/Home/Experience'
import Projects from '@/components/Home/Projects'
export default function Home() {
  return (
    <Layout title='Noe - dev' description={'Descripcionhome'}>
      <main>
        <Hero />
        <Services />
        <Experience />
        <Projects />
      </main>
    </Layout>
  )
}
