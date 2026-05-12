'use client'
import { useState } from 'react'

export default function ContactSection({ email = 'kontakt@kevinmuenkel.de' }) {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = {
      name: form.name.value,
      email: form.email.value,
      type: form.type.value,
      message: form.message.value,
    }
    // Mailto fallback – can be replaced with Resend/Formspree later
    const subject = encodeURIComponent(`Projektanfrage von ${data.name}`)
    const body = encodeURIComponent(`Name: ${data.name}\nE-Mail: ${data.email}\nArt: ${data.type}\n\n${data.message}`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="cta-section">
      <div className="contact-inner">
        <div className="contact-left">
          <p className="section-label">Kontakt</p>
          <h2 className="section-title">Let's create<br />something great.</h2>
          <p className="contact-sub">
            Egal ob Event, Werbeproduktion oder Corporate Shoot –
            ich freue mich auf Ihr Projekt. Gerne per Du!
          </p>
          <a href={`mailto:${email}`} className="cta-email">{email}</a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Dein Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-Mail</label>
              <input id="email" name="email" type="email" placeholder="deine@mail.de" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="type">Art des Projekts</label>
            <select id="type" name="type">
              <option value="">Bitte wählen …</option>
              <option value="event">Event / Konzert</option>
              <option value="corporate">Corporate</option>
              <option value="portrait">Portrait / People</option>
              <option value="advertising">Werbung / Kampagne</option>
              <option value="other">Sonstiges</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Nachricht</label>
            <textarea id="message" name="message" placeholder="Erzähl mir von deinem Projekt …" required />
          </div>

          <button type="submit" className="btn btn-primary">
            Nachricht senden →
          </button>

          {sent && (
            <p className="form-success">
              ✓ Dein E-Mail-Client öffnet sich gleich. Danke!
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
