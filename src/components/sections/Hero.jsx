import { motion } from 'framer-motion'
import { FiCalendar, FiUser, FiClock, FiUsers, FiMonitor } from 'react-icons/fi'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-sky-blue via-white to-white pt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>

          <div className="inline-flex items-center gap-2 bg-royal-blue/10 text-royal-blue text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            World-Class Medical Care
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-medical-blue leading-tight mb-6">
            Compassionate Care for a{' '}
            <span className="bg-gradient-to-r from-royal-blue to-blue-400 bg-clip-text text-transparent">
              Healthier Life
            </span>
          </h1>

          <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-lg">
            Advanced medical care with empathy and excellence. Your health is our highest priority.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => scrollTo('appointment')}
              className="flex items-center gap-2 bg-royal-blue text-white font-semibold px-7 py-4 rounded-xl hover:bg-medical-blue transition-all shadow-lg shadow-royal-blue/30 hover:shadow-xl hover:-translate-y-0.5">
              <FiCalendar size={18} />
              Book Appointment
            </button>
            <button
              onClick={() => scrollTo('doctors')}
              className="flex items-center gap-2 border-2 border-royal-blue text-royal-blue font-semibold px-7 py-4 rounded-xl hover:bg-sky-blue transition-all">
              <FiUser size={18} />
              Find a Doctor
            </button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: <FiClock size={20} />, title: '24/7 Emergency', sub: 'Always here for you' },
              { icon: <FiUsers size={20} />, title: 'Expert Doctors', sub: 'Highly experienced' },
              { icon: <FiMonitor size={20} />, title: 'Advanced Tech', sub: 'World-class facilities' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-white shadow-sm border border-border-color">
                <div className="text-royal-blue mt-0.5 flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="text-xs font-bold text-text-dark">{item.title}</div>
                  <div className="text-xs text-text-muted">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Hospital Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10">
            <img
              src="/hospital.png"
              alt="LifeCare Hospital Building"
              className="w-full rounded-3xl shadow-2xl object-cover aspect-[4/3]" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-medical-blue/20 to-transparent" />
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 z-20">
            <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
              <FiUsers size={22} className="text-success" />
            </div>
            <div>
              <div className="font-bold text-xl text-text-dark">1M+</div>
              <div className="text-xs text-text-muted">Happy Patients</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 z-20">
            <div className="flex items-center gap-2 mb-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-xs font-semibold text-text-dark">Rated #1 Hospital</div>
            <div className="text-xs text-text-muted">in Patient Care</div>
          </motion.div>

          {/* Background decoration */}
          <div className="absolute -z-10 top-8 right-8 w-full h-full bg-sky-blue rounded-3xl" />
        </motion.div>
      </div>
    </section>
  )
}