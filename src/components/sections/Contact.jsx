import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const info = [
    { icon: <FiMapPin size={20} />, label: 'Address', value: '123 HealthCare Avenue, Wellness City, 560001' },
    { icon: <FiMail size={20} />, label: 'Email', value: 'info@lifecarehospital.com' },
    { icon: <FiPhone size={20} />, label: 'Phone', value: '+91 12345 67890' },
    { icon: <FiPhone size={20} />, label: 'Emergency', value: '+91 98765 43210', emergency: true },
    { icon: <FiClock size={20} />, label: 'Hours', value: 'Mon–Sat: 8am–8pm | Emergency: 24/7' },
  ]

  const inputStyle = "w-full px-4 py-3 border border-border-color rounded-xl text-sm text-text-dark bg-white outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/10 transition-all placeholder:text-text-muted/50"

  return (
    <section id="contact-us" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-royal-blue uppercase">GET IN TOUCH</span>
          <h2 className="font-display text-4xl font-bold text-medical-blue mt-3 mb-4">Contact Us</h2>
          <div className="w-16 h-1 bg-royal-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-border-color">
            <h3 className="font-display text-2xl font-bold text-medical-blue mb-6">Send us a Message</h3>
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
                  <FiCheck size={28} className="text-success" />
                </div>
                <h4 className="font-bold text-xl text-medical-blue mb-2">Message Sent!</h4>
                <p className="text-text-muted text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-text-muted tracking-wider block mb-2">NAME</label>
                    <input value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      className={inputStyle} placeholder="Your full name" required />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-text-muted tracking-wider block mb-2">EMAIL</label>
                    <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                      className={inputStyle} placeholder="you@email.com" required />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-text-muted tracking-wider block mb-2">PHONE</label>
                  <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                    className={inputStyle} placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-text-muted tracking-wider block mb-2">MESSAGE</label>
                  <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    rows={4} className={`${inputStyle} resize-none`}
                    placeholder="How can we help you?" required />
                </div>
                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-royal-blue text-white font-semibold py-4 rounded-xl hover:bg-medical-blue transition-colors shadow-lg shadow-royal-blue/25">
                  <FiSend size={16} /> Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-border-color">
              <h3 className="font-display text-2xl font-bold text-medical-blue mb-6">Hospital Information</h3>
              <div className="space-y-5">
                {info.map(item => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.emergency ? 'bg-red-50 text-red-500' : 'bg-sky-blue text-royal-blue'}`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-text-muted tracking-wider">{item.label.toUpperCase()}</div>
                      <div className={`text-sm font-medium mt-0.5 ${item.emergency ? 'text-red-600' : 'text-text-dark'}`}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-sky-blue rounded-3xl h-48 flex items-center justify-center border border-border-color">
              <div className="text-center text-royal-blue">
                <FiMapPin size={32} className="mx-auto mb-2" />
                <p className="text-sm font-semibold">123 HealthCare Avenue</p>
                <p className="text-xs text-text-muted">Wellness City, 560001</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}