import { motion } from 'framer-motion'
import { FiHeart, FiActivity, FiZap, FiSun, FiPlus, FiAlertCircle, FiArrowRight } from 'react-icons/fi'

const services = [
  { icon: <FiHeart size={28} />, title: 'Cardiology', desc: 'Advanced heart care for a healthier heart. Expert diagnosis and treatment.', color: 'from-red-50 to-pink-50', iconBg: 'bg-red-100', iconColor: 'text-red-500' },
  { icon: <FiActivity size={28} />, title: 'Neurology', desc: 'Expert care for brain, spine & nervous system disorders.', color: 'from-purple-50 to-indigo-50', iconBg: 'bg-purple-100', iconColor: 'text-purple-500' },
  { icon: <FiZap size={28} />, title: 'Orthopedics', desc: 'Restoring mobility and improving lives through advanced bone and joint care.', color: 'from-orange-50 to-amber-50', iconBg: 'bg-orange-100', iconColor: 'text-orange-500' },
  { icon: <FiSun size={28} />, title: 'Obstetrics & Gynecology', desc: 'Compassionate care for women at every stage of life.', color: 'from-pink-50 to-rose-50', iconBg: 'bg-pink-100', iconColor: 'text-pink-500' },
  { icon: <FiPlus size={28} />, title: 'General Medicine', desc: 'Complete healthcare for you and your family with expert physicians.', color: 'from-blue-50 to-sky-50', iconBg: 'bg-blue-100', iconColor: 'text-blue-500' },
  { icon: <FiAlertCircle size={28} />, title: 'Emergency Care', desc: '24/7 emergency services with rapid response and expert trauma care.', color: 'from-red-50 to-orange-50', iconBg: 'bg-red-100', iconColor: 'text-red-600' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-royal-blue uppercase">OUR SERVICES</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-medical-blue mt-3 mb-4">
            Comprehensive Care for Every Need
          </h2>
          <div className="w-16 h-1 bg-royal-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(30,99,213,0.12)' }}
              className={`bg-gradient-to-br ${s.color} border border-border-color rounded-2xl p-6 cursor-pointer group transition-all duration-300`}>
              <div className={`w-14 h-14 ${s.iconBg} rounded-2xl flex items-center justify-center mb-5 ${s.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                {s.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-medical-blue mb-3">{s.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">{s.desc}</p>
              <button className="flex items-center gap-1 text-royal-blue text-sm font-semibold hover:gap-2 transition-all">
                Learn More <FiArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}