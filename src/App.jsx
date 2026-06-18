import Header from './components/Header'
import Hero from './components/Hero'
import ModularHomes from './components/ModularHomes'
import AboutSection from './components/AboutSection'
import BuildingSolutions from './components/BuildingSolutions'
import Materials from './components/Materials'
import WhyChooseUs from './components/WhyChooseUs'
import ComparisonTable from './components/ComparisonTable'
import ProcessSteps from './components/ProcessSteps'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ModularHomes />
        <AboutSection />
        <BuildingSolutions />
        <Materials />
        <WhyChooseUs />
        <ComparisonTable />
        <ProcessSteps />
        <Gallery />
        <Testimonials />
        <BlogSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}