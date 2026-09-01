import { useMemo, useState, type FormEvent } from 'react'
import { IconCalendar, IconCheck, IconClock, IconMail, IconPhone, IconUsers } from './icons'
import './Reservation.css'

interface FormState {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
  notes: string
}

const INITIAL_STATE: FormState = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  notes: '',
}

const TIME_SLOTS = ['12:00', '12:30', '13:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30']

type FormErrors = Partial<Record<keyof FormState, string>>

export default function Reservation() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const today = useMemo(() => new Date().toISOString().split('T')[0], [])

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }))
    }
  }

  function validate(): FormErrors {
    const next: FormErrors = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = 'Enter a valid email address.'
    }
    if (!form.phone.trim()) {
      next.phone = 'Please enter a phone number.'
    } else if (!/^[+()\-.\s\d]{7,}$/.test(form.phone)) {
      next.phone = 'Enter a valid phone number.'
    }
    if (!form.date) next.date = 'Please choose a date.'
    if (!form.time) next.time = 'Please choose a time.'
    return next
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validation = validate()
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    setStatus('submitting')
    window.setTimeout(() => {
      setStatus('success')
    }, 900)
  }

  function handleReset() {
    setForm(INITIAL_STATE)
    setErrors({})
    setStatus('idle')
  }

  return (
    <section id="reserve" className="section reservation">
      <div className="container reservation__inner">
        <div className="reservation__intro">
          <span className="section-eyebrow">Reservations</span>
          <h2 className="section-title">Book your table</h2>
          <p className="section-subtitle">
            Reserve online and we'll have your table warm and ready. For parties of 8 or more,
            please call us directly so we can prepare the right space for you.
          </p>

          <ul className="reservation__facts">
            <li>
              <IconClock width={20} height={20} />
              Tue–Sun, 11:30am – 10:00pm
            </li>
            <li>
              <IconPhone width={20} height={20} />
              (555) 214-8890
            </li>
            <li>
              <IconMail width={20} height={20} />
              hello@ssfamilyrestaurant.com
            </li>
          </ul>
        </div>

        <div className="reservation__card">
          {status === 'success' ? (
            <div className="reservation__success" role="status">
              <span className="reservation__success-icon">
                <IconCheck width={30} height={30} />
              </span>
              <h3>You're booked, {form.name.split(' ')[0]}!</h3>
              <p>
                We've reserved a table for {form.guests} on{' '}
                <strong>{form.date}</strong> at <strong>{form.time}</strong>. A confirmation has
                been sent to {form.email}.
              </p>
              <button type="button" className="btn btn-outline-dark" onClick={handleReset}>
                Make another reservation
              </button>
            </div>
          ) : (
            <form className="reservation__form" onSubmit={handleSubmit} noValidate>
              <div className="reservation__grid">
                <div className="field">
                  <label htmlFor="res-name">Full name</label>
                  <input
                    id="res-name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'res-name-error' : undefined}
                  />
                  {errors.name && (
                    <p className="field__error" id="res-name-error">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="res-email">Email</label>
                  <input
                    id="res-email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'res-email-error' : undefined}
                  />
                  {errors.email && (
                    <p className="field__error" id="res-email-error">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="res-phone">Phone number</label>
                  <input
                    id="res-phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'res-phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p className="field__error" id="res-phone-error">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="res-guests">
                    <IconUsers width={16} height={16} /> Guests
                  </label>
                  <select
                    id="res-guests"
                    value={form.guests}
                    onChange={(e) => update('guests', e.target.value)}
                  >
                    {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'guest' : 'guests'}
                      </option>
                    ))}
                  </select>
                  <p className="field__hint">8+ guests? Please call us instead.</p>
                </div>

                <div className="field">
                  <label htmlFor="res-date">
                    <IconCalendar width={16} height={16} /> Date
                  </label>
                  <input
                    id="res-date"
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => update('date', e.target.value)}
                    aria-invalid={Boolean(errors.date)}
                    aria-describedby={errors.date ? 'res-date-error' : undefined}
                  />
                  {errors.date && (
                    <p className="field__error" id="res-date-error">
                      {errors.date}
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="res-time">
                    <IconClock width={16} height={16} /> Time
                  </label>
                  <select
                    id="res-time"
                    value={form.time}
                    onChange={(e) => update('time', e.target.value)}
                    aria-invalid={Boolean(errors.time)}
                    aria-describedby={errors.time ? 'res-time-error' : undefined}
                  >
                    <option value="">Select a time</option>
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="field__error" id="res-time-error">
                      {errors.time}
                    </p>
                  )}
                </div>

                <div className="field field--full">
                  <label htmlFor="res-notes">Special requests (optional)</label>
                  <textarea
                    id="res-notes"
                    rows={3}
                    value={form.notes}
                    onChange={(e) => update('notes', e.target.value)}
                    placeholder="Allergies, celebrations, seating preferences…"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary reservation__submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Booking your table…' : 'Confirm Reservation'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
