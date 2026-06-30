import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiUser, FiHome, FiSmile, FiShield } from 'react-icons/fi'

const stats = [
  { icon: <FiHome size={32} />, value: 25, suffix: '+', label: 'Years of Excellence' },
  { icon: <FiUser size={32} />, value: 120, suffix: '+', label: 'Specialists & Clinicians' },
  { icon: <FiShield size={32} />, value: 30, suffix: '+', label: 'Partner Insurers' },
  { icon: <FiSmile size={32} />, value: 98, suffix: '%', label: 'Patient Satisfaction' },
]

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = (value / duration) * 16
    const timer = setInterval(() => {
      start += step
      if (start >= value) { setCount(value); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Statistics() {
  return (
    <section className="py-20 bg-medical-blue">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center text-white">
              <div className="flex justify-center mb-4 text-white/60">{s.icon}</div>
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white/70 text-sm font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
