import { motion } from 'framer-motion'
import { FiCalendar, FiArrowRight } from 'react-icons/fi'

const articles = [
  { title: 'Heart Health Tips for a Longer Life', date: 'June 10, 2026', category: 'Cardiology', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80&fit=crop', desc: 'Discover the essential habits and lifestyle changes that can significantly reduce your risk of heart disease.' },
  { title: 'Understanding Diabetes: Prevention & Management', date: 'June 5, 2026', category: 'General Medicine', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&fit=crop', desc: 'A comprehensive guide to understanding diabetes, its risk factors, and how to manage it effectively.' },
  { title: 'The Importance of Regular Health Checkups', date: 'May 28, 2026', category: 'Wellness', img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80&fit=crop', desc: 'Why preventive care and regular checkups are the cornerstone of long-term health and early disease detection.' },
]

export default function HealthArticles() {
  const scrollToAppointment = () => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-royal-blue uppercase">HEALTH BLOG</span>
          <h2 className="font-display text-4xl font-bold text-medical-blue mt-3 mb-4">Latest Health Articles</h2>
          <div className="w-16 h-1 bg-royal-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <motion.div key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-border-color rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="overflow-hidden aspect-video">
                <img src={a.img} alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-royal-blue bg-sky-blue px-3 py-1 rounded-full">{a.category}</span>
                  <div className="flex items-center gap-1 text-xs text-text-muted">
                    <FiCalendar size={12} />
                    {a.date}
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-medical-blue mb-3 leading-tight">{a.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{a.desc}</p>
                <button
                  type="button"
                  onClick={scrollToAppointment}
                  className="flex items-center gap-1 text-royal-blue text-sm font-semibold hover:gap-2 transition-all">
                  Discuss With a Doctor <FiArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
