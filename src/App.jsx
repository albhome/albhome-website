import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import ModularHomes from './components/ModularHomes'
import AboutSection from './components/AboutSection'
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
      <Sidebar />
      {/* Main content area - offset for desktop sidebar */}
      <main className="lg:ml-64 pt-14 lg:pt-0">
        <Hero />
        <ModularHomes />
        <AboutSection />
        <Materials />
        <WhyChooseUs />
        <ComparisonTable />
        <ProcessSteps />
        <Gallery />
        <Testimonials />
        <BlogSection />
        <Footer />
      </main>
      <BackToTop />
    </div>
  )
}