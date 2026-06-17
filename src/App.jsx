import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import HomeRenovations from './components/HomeRenovations'
import BuildingSolutions from './components/BuildingSolutions'
import Materials from './components/Materials'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      {/* Main content area - offset for desktop sidebar */}
      <main className="lg:ml-64 pt-14 lg:pt-0">
        <Hero />
        <HomeRenovations />
        <BuildingSolutions />
        <Materials />
        <WhyChooseUs />
        <Gallery />
        <Footer />
      </main>
      <BackToTop />
    </div>
  )
}