import { motion } from 'framer-motion'
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

const doctors = [
  { name: 'Dr. Sarah Johnson', specialty: 'Cardiology', exp: '15 Years Experience', img: 'https://plus.unsplash.com/premium_photo-1664475543697-229156438e1e?w=600&auto=format&fit=crop&face' },
  { name: 'Dr. Michael Lee', specialty: 'Neurology', exp: '12 Years Experience', img: 'https://images.unsplash.com/photo-1712215544003-af10130f8eb3?w=600&auto=format&fit=crop&face' },
  { name: 'Dr. Emily Carter', specialty: 'Orthopedics', exp: '18 Years Experience', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80&fit=crop&face' },
  { name: 'Dr. James Wilson', specialty: 'General Medicine', exp: '20 Years Experience', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80&fit=crop&face' },
]

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-royal-blue uppercase">OUR TEAM</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-medical-blue mt-3 mb-4">Meet Our Specialists</h2>
          <div className="w-16 h-1 bg-royal-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, i) => (
            <motion.div key={doc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border-color hover:shadow-xl transition-all duration-300 group">
              <div className="overflow-hidden aspect-[3/4]">
                <img src={doc.img} alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-medical-blue">{doc.name}</h3>
                <p className="text-royal-blue text-sm font-semibold mt-1">{doc.specialty}</p>
                <p className="text-text-muted text-xs mt-1">{doc.exp}</p>
                <div className="flex gap-3 mt-4">
                  {[FiLinkedin, FiTwitter, FiMail].map((Icon, j) => (
                    <button key={j} className="w-8 h-8 bg-sky-blue rounded-lg flex items-center justify-center text-royal-blue hover:bg-royal-blue hover:text-white transition-colors">
                      <Icon size={14} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}