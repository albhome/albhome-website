import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import ModularHomes from './components/ModularHomes'
import AboutSection from './components/AboutSection'
import BuildingSolutions from './components/BuildingSolutions'
import Materials from './components/Materials'
import WhyChooseUs from './components/WhyChooseUs'
import ComparisonTable from './components/ComparisonTable'
import ProcessPage from './components/ProcessPage'
import SystemPage from './components/SystemPage'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import BlogSection from './components/BlogSection'
import QuoteSection from './components/QuoteSection'
import CostCalculator from './components/CostCalculator'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import WhatsAppButton from './components/WhatsAppButton'
import ProductPage from './components/ProductPage'

function HomePage() {
  return (
    <>
      <Hero />
      <ModularHomes />
      <AboutSection />
      <BuildingSolutions />
      <Materials />
      <WhyChooseUs />
      <ComparisonTable />
      <Gallery />
      <Testimonials />
      <BlogSection />
      <QuoteSection />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/building-systems/:system" element={<SystemPage />} />
            <Route path="/cost-calculator" element={<CostCalculator />} />
            <Route path="/:productId" element={<ProductPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}