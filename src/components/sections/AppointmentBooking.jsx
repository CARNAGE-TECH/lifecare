import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiUser, FiGrid, FiArrowRight } from 'react-icons/fi'

const departments = ['Cardiology', 'Neurology', 'Orthopedics', 'Obstetrics & Gynecology', 'General Medicine', 'Emergency Care']
const doctors = {
  'Cardiology': ['Dr. Sarah Johnson', 'Dr. Robert Chen'],
  'Neurology': ['Dr. Michael Lee', 'Dr. Anna Williams'],
  'Orthopedics': ['Dr. Emily Carter', 'Dr. David Park'],
  'Obstetrics & Gynecology': ['Dr. Lisa Martinez', 'Dr. Rachel Kim'],
  'General Medicine': ['Dr. James Wilson', 'Dr. Tom Brown'],
  'Emergency Care': ['Dr. Chris Evans', 'Dr. Maria Santos'],
}

export default function AppointmentBooking() {
  const [dept, setDept] = useState('')
  const [doctor, setDoctor] = useState('')
  const [date, setDate] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleBook = () => {
    if (!dept || !doctor || !date) return
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="appointment" className="relative z-10 -mt-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl border border-border-color p-6 md:p-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-end">
            <div className="flex-shrink-0">
              <h2 className="font-display text-2xl font-bold text-medical-blue mb-1">Book an Appointment</h2>
              <p className="text-sm text-text-muted">Your health, our priority.</p>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {/* Department */}
              <div className="relative">
                <label className="text-xs font-semibold text-text-muted tracking-wider block mb-2">DEPARTMENT</label>
                <div className="relative">
                  <FiGrid size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-royal-blue" />
                  <select value={dept} onChange={e => { setDept(e.target.value); setDoctor(''); }}
                    className="w-full pl-9 pr-4 py-3 border border-border-color rounded-xl text-sm text-text-dark bg-white outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/10 transition-all appearance-none cursor-pointer">
                    <option value="">Select Department</option>
                    {departments.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>

              {/* Doctor */}
              <div className="relative">
                <label className="text-xs font-semibold text-text-muted tracking-wider block mb-2">DOCTOR</label>
                <div className="relative">
                  <FiUser size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-royal-blue" />
                  <select value={doctor} onChange={e => setDoctor(e.target.value)}
                    disabled={!dept}
                    className="w-full pl-9 pr-4 py-3 border border-border-color rounded-xl text-sm text-text-dark bg-white outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/10 transition-all appearance-none cursor-pointer disabled:opacity-50">
                    <option value="">Select Doctor</option>
                    {dept && doctors[dept]?.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="relative">
                <label className="text-xs font-semibold text-text-muted tracking-wider block mb-2">DATE</label>
                <div className="relative">
                  <FiCalendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-royal-blue" />
                  <input type="date" value={date} onChange={e => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-9 pr-4 py-3 border border-border-color rounded-xl text-sm text-text-dark bg-white outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/10 transition-all" />
                </div>
              </div>
            </div>

            <button onClick={handleBook}
              className={`flex items-center gap-2 font-semibold px-8 py-3 rounded-xl transition-all flex-shrink-0 ${
                submitted
                  ? 'bg-success text-white'
                  : 'bg-royal-blue text-white hover:bg-medical-blue shadow-lg shadow-royal-blue/25 hover:-translate-y-0.5'
              }`}>
              {submitted ? 'Booked!' : 'Book Now'}
              <FiArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
