# LifeCare Hospital

LifeCare Hospital is a responsive healthcare website built with React, Vite, Tailwind CSS, Framer Motion, and React Icons. It is designed as a polished frontend project for a modern private hospital, with appointment booking UI, department sections, doctor cards, patient resources, testimonials, emergency contact details, and a contact form.

## Project Status

This is a frontend-only project. The appointment booking and contact forms show local success states in the browser, but no backend, database, email service, or API integration is connected.

## Features

- Sticky responsive navbar with smooth in-page navigation
- Hospital hero section with appointment and doctor CTAs
- Appointment booking UI with department, doctor, patient type, date, and time fields
- Services section with booking-oriented actions
- Animated statistics section
- About section with patient safety and quality highlights
- Doctor cards with clinic availability and booking actions
- Auto-sliding testimonials carousel with manual controls
- Emergency banner with direct call link
- Patient resources and health article preview sections
- Contact form with local success state
- Responsive layout for desktop, tablet, and mobile
- Reduced-motion CSS support for users who prefer less animation

## Tech Stack

| Technology | Purpose |
|---|---|
| React + Vite | Frontend framework and build tool |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations and transitions |
| React Icons | Icon library |
| Google Fonts | Playfair Display + Inter typography |

## Getting Started

```bash
git clone https://github.com/CARNAGE-TECH/lifecare.git
cd lifecare
npm install
npm run dev
```

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Project Structure

```text
src/
  components/
    layout/
      Navbar.jsx
      Footer.jsx
    sections/
      Hero.jsx
      AppointmentBooking.jsx
      Services.jsx
      Statistics.jsx
      About.jsx
      WhyChooseUs.jsx
      Doctors.jsx
      Testimonials.jsx
      EmergencyBanner.jsx
      PatientResources.jsx
      HealthArticles.jsx
      Contact.jsx
  App.jsx
  main.jsx
  index.css
```

## Possible Next Steps

- Connect appointment booking to a backend or form service
- Add real doctor profile pages
- Add a patient portal authentication flow
- Add multilingual content
- Add real privacy policy and terms pages

## Author

Joseph Omokwale  
OMTECH INNOVATORS - The Future of Tech  
Edo State, Nigeria  
https://omtech-portfolio.vercel.app

## License

MIT License
