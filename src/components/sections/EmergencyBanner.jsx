import { motion } from 'framer-motion'
import { FiPhone, FiAlertCircle } from 'react-icons/fi'

export default function EmergencyBanner() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-white text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <FiAlertCircle size={28} className="text-white" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">Need Immediate Medical Assistance?</h2>
              <p className="text-white/80 mt-1">Our emergency team is available 24/7 - don't wait, call now.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a href="tel:+2348009110000"
              className="flex items-center gap-2 bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors shadow-lg">
              <FiPhone size={18} />
              Call Emergency
            </a>
            <div className="flex items-center gap-2 bg-white/10 border border-white/30 px-6 py-3 rounded-xl">
              <FiPhone size={16} />
              <span className="font-semibold">+234 800 911 0000</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
