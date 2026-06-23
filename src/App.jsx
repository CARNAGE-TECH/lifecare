import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import AppointmentBooking from './components/sections/AppointmentBooking'
import Services from './components/sections/Services'
import Statistics from './components/sections/Statistics'
import About from './components/sections/About'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Doctors from './components/sections/Doctors'
import Testimonials from './components/sections/Testimonials'
import EmergencyBanner from './components/sections/EmergencyBanner'
import PatientResources from './components/sections/PatientResources'
import HealthArticles from './components/sections/HealthArticles'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AppointmentBooking />
        <Services />
        <Statistics />
        <About />
        <WhyChooseUs />
        <Doctors />
        <Testimonials />
        <EmergencyBanner />
        <PatientResources />
        <HealthArticles />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App