import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiCalendar } from 'react-icons/fi'
import { FaCross } from 'react-icons/fa'
import { RiCrossLine } from 'react-icons/ri'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['Home', 'About Us', 'Services', 'Doctors', 'Patient Guide', 'Contact Us']

  const scrollTo = (section) => {
    if (section === 'appointment') {
      document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      const id = section.toLowerCase().replace(/\s+/g, '-')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-royal-blue rounded-xl flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v20M2 12h20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="font-display font-bold text-xl text-medical-blue leading-none">LifeCare</div>
              <div className="text-xs text-text-muted tracking-widest font-medium">HOSPITAL</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map(link => (
              <button key={link} onClick={() => scrollTo(link)}
                className="text-sm font-medium text-text-muted hover:text-royal-blue transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-royal-blue group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo('appointment')}
              className="hidden lg:flex items-center gap-2 bg-royal-blue text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-medical-blue transition-colors shadow-lg shadow-royal-blue/25">
              <FiCalendar size={16} />
              Book Appointment
            </button>
            <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden">
            <div className="flex flex-col gap-4">
              {links.map(link => (
                <button key={link} onClick={() => scrollTo(link)}
                  className="text-left text-lg font-medium text-text-dark py-3 border-b border-border-color hover:text-royal-blue transition-colors">
                  {link}
                </button>
              ))}
              <button
                onClick={() => scrollTo('appointment')}
                className="mt-4 flex items-center justify-center gap-2 bg-royal-blue text-white font-semibold px-6 py-4 rounded-xl">
                <FiCalendar size={18} />
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}