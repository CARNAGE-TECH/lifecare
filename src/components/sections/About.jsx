import { motion } from 'framer-motion'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'

const points = [
  'Modern diagnostic and treatment technology',
  'Specialist-led care across major departments',
  'Patient-centered support from admission to follow-up',
  'Clear safety, privacy, and quality standards',
]

export default function About() {
  return (
    <section id="about-us" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative">
          <img
            src="https://images.unsplash.com/photo-1640876777002-badf6aee5bcc?w=600&auto=format&fit=crop"
            alt="Doctor with patient"
            className="w-full rounded-3xl shadow-2xl object-cover aspect-[4/3]" />
          <div className="absolute -bottom-6 -right-6 bg-royal-blue text-white rounded-2xl p-6 shadow-xl">
            <div className="font-display text-3xl font-bold">25+</div>
            <div className="text-sm text-white/80">Years of Trust</div>
          </div>
          <div className="absolute -z-10 -top-4 -left-4 w-full h-full bg-sky-blue rounded-3xl" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <span className="text-xs font-bold tracking-widest text-royal-blue uppercase">ABOUT US</span>
          <h2 className="font-display text-4xl font-bold text-medical-blue mt-3 mb-6 leading-tight">
            Trusted Care. Advanced Technology. Better Outcomes.
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            At LifeCare Hospital, we combine advanced medical technology with compassionate care to deliver the best possible outcomes. Our team of experts is dedicated to your health and well-being, providing personalized treatment for every patient.
          </p>
          <p className="text-text-muted leading-relaxed mb-8">
            Since our founding, we have focused on practical access, careful diagnosis, and respectful communication, so patients and families understand each step of their care.
          </p>

          <div className="space-y-3 mb-8">
            {points.map(point => (
              <div key={point} className="flex items-start gap-3">
                <FiCheckCircle className="text-success flex-shrink-0 mt-0.5" size={18} />
                <span className="text-text-muted text-sm">{point}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => document.getElementById('patient-guide')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 bg-royal-blue text-white font-semibold px-7 py-4 rounded-xl hover:bg-medical-blue transition-all shadow-lg shadow-royal-blue/25 hover:-translate-y-0.5">
            View Patient Guide <FiArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
