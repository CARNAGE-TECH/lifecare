import { motion } from 'framer-motion'
import { FiAward, FiCpu, FiHeart, FiPhone } from 'react-icons/fi'

const reasons = [
  { icon: <FiAward size={28} />, title: 'Experienced Specialists', desc: 'World-class physicians and surgeons with decades of expertise across every medical specialty.', color: 'text-royal-blue', bg: 'bg-blue-50' },
  { icon: <FiCpu size={28} />, title: 'Advanced Medical Equipment', desc: 'Latest diagnostic and treatment technologies for precise, effective patient care.', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: <FiHeart size={28} />, title: 'Patient-Centered Care', desc: 'A compassionate healthcare experience tailored to each patient\'s unique needs and well-being.', color: 'text-rose-500', bg: 'bg-rose-50' },
  { icon: <FiPhone size={28} />, title: '24/7 Emergency Support', desc: 'Always available for urgent care with rapid response teams ready around the clock.', color: 'text-success', bg: 'bg-green-50' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-royal-blue uppercase">WHY CHOOSE US</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-medical-blue mt-3 mb-4">
            Excellence in Every Aspect
          </h2>
          <div className="w-16 h-1 bg-royal-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-border-color rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 text-center group">
              <div className={`w-16 h-16 ${r.bg} rounded-2xl flex items-center justify-center mx-auto mb-5 ${r.color} group-hover:scale-110 transition-transform duration-300`}>
                {r.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-medical-blue mb-3">{r.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}