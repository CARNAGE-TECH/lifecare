import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  { name: 'Amanda Foster', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&fit=crop&face', rating: 5, text: 'The care I received at LifeCare Hospital was exceptional. The doctors were knowledgeable, compassionate, and took time to explain everything. I felt truly cared for throughout my entire stay.' },
  { name: 'Robert Thompson', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&fit=crop&face', rating: 5, text: 'After my cardiac procedure, I was amazed at the level of post-operative care. The nursing staff was attentive 24/7 and the facilities were excellent. Highly recommend LifeCare.' },
  { name: 'Priya Sharma', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&fit=crop&face', rating: 5, text: 'LifeCare Hospital gave me a new lease on life. The orthopedic team was outstanding - I walked out pain-free after years of suffering. The entire staff made the experience comfortable.' },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-royal-blue uppercase">TESTIMONIALS</span>
          <h2 className="font-display text-4xl font-bold text-medical-blue mt-3 mb-4">What Our Patients Say</h2>
          <div className="w-16 h-1 bg-royal-blue mx-auto rounded-full" />
        </motion.div>

        <div className="relative bg-sky-blue rounded-3xl p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="text-center">
              <img src={testimonials[current].img} alt={testimonials[current].name}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-lg" />
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-muted text-lg leading-relaxed mb-6 italic">&quot;{testimonials[current].text}&quot;</p>
              <p className="font-bold text-medical-blue">{testimonials[current].name}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button type="button" aria-label="Previous testimonial" onClick={() => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-royal-blue hover:text-white transition-colors">
              <FiChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} type="button" aria-label={`Show testimonial ${i + 1}`} onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-royal-blue w-6' : 'bg-royal-blue/30'}`} />
              ))}
            </div>
            <button type="button" aria-label="Next testimonial" onClick={() => setCurrent(p => (p + 1) % testimonials.length)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-royal-blue hover:text-white transition-colors">
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
