import { motion } from 'framer-motion'
import { FiShield, FiFileText, FiMonitor, FiHelpCircle, FiArrowRight } from 'react-icons/fi'

const resources = [
  { icon: <FiShield size={28} />, title: 'Insurance Information', desc: 'We work with all major insurance providers. Verify your coverage before your visit.', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: <FiFileText size={28} />, title: 'Health Records', desc: 'Access your complete medical history, test results, and treatment records securely online.', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: <FiMonitor size={28} />, title: 'Patient Portal', desc: 'Manage appointments, communicate with doctors, and track your health journey digitally.', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: <FiHelpCircle size={28} />, title: 'FAQs', desc: 'Find answers to common questions about our services, procedures, and hospital policies.', color: 'text-orange-600', bg: 'bg-orange-50' },
]

export default function PatientResources() {
  const scrollToContact = () => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="patient-guide" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-royal-blue uppercase">FOR PATIENTS</span>
          <h2 className="font-display text-4xl font-bold text-medical-blue mt-3 mb-4">Patient Resources</h2>
          <div className="w-16 h-1 bg-royal-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((r, i) => (
            <motion.div key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-border-color rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className={`w-14 h-14 ${r.bg} rounded-2xl flex items-center justify-center mb-5 ${r.color} group-hover:scale-110 transition-transform`}>
                {r.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-medical-blue mb-3">{r.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">{r.desc}</p>
              <button
                type="button"
                onClick={scrollToContact}
                className={`flex items-center gap-1 text-sm font-semibold ${r.color} hover:gap-2 transition-all`}>
                Ask Support <FiArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
