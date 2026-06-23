import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi'

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-medical-blue text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v20M2 12h20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-xl leading-none">LifeCare</div>
                <div className="text-xs text-white/60 tracking-widest">HOSPITAL</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Delivering exceptional healthcare with compassion, innovation and excellence. Your health is our highest priority.
            </p>
            <div className="flex gap-3">
              {[FiFacebook, FiInstagram, FiLinkedin, FiYoutube].map((Icon, i) => (
                <button key={i} className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-bold tracking-widest text-white/50 mb-4">QUICK LINKS</p>
            <div className="flex flex-col gap-2">
              {['Home', 'About Us', 'Services', 'Doctors', 'Patient Guide', 'Contact Us'].map(link => (
                <button key={link} onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, '-'))}
                  className="text-sm text-white/70 hover:text-white text-left transition-colors">
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold tracking-widest text-white/50 mb-4">OUR SERVICES</p>
            <div className="flex flex-col gap-2">
              {['Cardiology', 'Neurology', 'Orthopedics', 'Obstetrics & Gynecology', 'General Medicine', 'Emergency Care'].map(s => (
                <button key={s} className="text-sm text-white/70 hover:text-white text-left transition-colors">{s}</button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold tracking-widest text-white/50 mb-4">CONTACT</p>
            <div className="flex flex-col gap-4">
              {[
                { icon: <FiMapPin size={14} />, text: '123 HealthCare Avenue, Wellness City' },
                { icon: <FiPhone size={14} />, text: '+91 12345 67890' },
                { icon: <FiMail size={14} />, text: 'info@lifecarehospital.com' },
              ].map(item => (
                <div key={item.text} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="mt-0.5 flex-shrink-0 text-white/40">{item.icon}</span>
                  {item.text}
                </div>
              ))}
              <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-3">
                <div className="text-xs font-bold text-red-300 mb-1">24/7 EMERGENCY</div>
                <div className="text-white font-bold flex items-center gap-2">
                  <FiPhone size={14} /> +91 98765 43210
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">© 2026 LifeCare Hospital. All Rights Reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms & Conditions'].map(item => (
              <button key={item} className="text-xs text-white/50 hover:text-white transition-colors">{item}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}