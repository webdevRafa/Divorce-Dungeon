import { AnimatePresence, motion } from 'framer-motion'
import { CalendarClock, CheckCircle2, MapPin, ShieldAlert } from 'lucide-react'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ButtonLink, Eyebrow, PageHero, Section } from '../components/Primitives'
import { usePageMeta } from '../hooks/usePageMeta'

type Errors = Partial<Record<'name' | 'email' | 'region' | 'campaign' | 'message' | 'consent', string>>

const requiredMessage = 'The archive needs this field before the raven can leave.'

export function SummonCounselPage() {
  const [errors, setErrors] = useState<Errors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const timerRef = useRef<number | null>(null)

  usePageMeta({
    title: 'Summon Counsel | Divorce Dungeon',
    description:
      'Request a fictional war council with Divorce Dungeon through a polished front-end consultation form demonstration.',
  })

  useEffect(
    () => () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    },
    [],
  )

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const nextErrors: Errors = {}
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const region = String(formData.get('region') ?? '').trim()
    const campaign = String(formData.get('campaign') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const consent = formData.get('consent') === 'on'

    if (!name) nextErrors.name = requiredMessage
    if (!email) nextErrors.email = requiredMessage
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'That address appears to have escaped the kingdom. Check the format.'
    }
    if (!region) nextErrors.region = requiredMessage
    if (!campaign) nextErrors.campaign = requiredMessage
    if (!message) nextErrors.message = requiredMessage
    if (!consent) nextErrors.consent = 'Please acknowledge the fictional nature of the war council.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      window.requestAnimationFrame(() => {
        form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
      })
      return
    }

    setLoading(true)
    timerRef.current = window.setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 950)
  }

  return (
    <>
      <PageHero
        eyebrow="REQUEST A WAR COUNCIL"
        title="Tell us where the kingdom cracked."
        description="Share only basic, non-confidential demonstration information. This form does not contact a real law firm, create an attorney-client relationship, or send a raven."
        aside={
          <div className="confidentiality-note">
            <ShieldAlert aria-hidden="true" />
            <strong>Demonstration form</strong>
            <span>Use fictional, non-sensitive information only.</span>
          </div>
        }
      />

      <Section className="contact-section">
        <div className="contact-grid">
          <div className="contact-form-shell">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  className="form-success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  aria-live="polite"
                >
                  <div className="success-seal">
                    <CheckCircle2 aria-hidden="true" />
                  </div>
                  <Eyebrow>MESSAGE ENTERED INTO THE FICTIONAL ARCHIVE</Eyebrow>
                  <h2>Your raven has been dispatched.</h2>
                  <p>
                    It has not, technically, been dispatched. This is a front-end success state.
                    But the animation was excellent.
                  </p>
                  <div className="hero-actions">
                    <ButtonLink to="/">Return to the Keep</ButtonLink>
                    <ButtonLink to="/campaigns" variant="secondary">
                      Review the Campaigns
                    </ButtonLink>
                  </div>
                  <button type="button" className="reset-form" onClick={() => setSuccess(false)}>
                    Enter another fictional message
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="form-heading">
                    <Eyebrow>ARCHIVE FORM DD-01</Eyebrow>
                    <h2>Campaign Intake</h2>
                    <p>
                      The fields marked “required” are needed only to demonstrate validation.
                    </p>
                  </div>
                  {Object.keys(errors).length > 0 && (
                    <div className="form-error-summary" role="alert" aria-live="assertive">
                      <strong>The raven is waiting.</strong>
                      <span>Review the marked fields before dispatch.</span>
                    </div>
                  )}
                  <form noValidate onSubmit={handleSubmit}>
                    <div className="form-row">
                      <Field
                        id="name"
                        label="Your name"
                        placeholder="Ruler, citizen, or exhausted account holder"
                        helper="Use a fictional name for this demonstration."
                        error={errors.name}
                        required
                      />
                      <Field
                        id="email"
                        type="email"
                        label="Email address"
                        placeholder="you@example.com"
                        helper="For demonstration only. No message is actually sent."
                        error={errors.email}
                        required
                      />
                    </div>
                    <div className="form-row">
                      <Field
                        id="phone"
                        type="tel"
                        label="Phone number"
                        placeholder="(555) 555-0147"
                        helper="Optional in the template."
                      />
                      <Field
                        id="region"
                        label="Kingdom, state, or province"
                        placeholder="Where would this fictional campaign occur?"
                        error={errors.region}
                        required
                      />
                    </div>
                    <div className="form-row">
                      <SelectField
                        id="campaign"
                        label="Which campaign resembles your situation?"
                        options={[
                          'The Swift Surrender — Uncontested Divorce',
                          'Trial by Paperwork — Contested Divorce',
                          'The Heir Accord — Parenting Plan',
                          'Divide the Hoard — Asset Division',
                          'The Peace Table — Mediation',
                          'Royal Decrees — Prenup or Postnup',
                          'I have no idea; send a map',
                        ]}
                        error={errors.campaign}
                        required
                      />
                      <SelectField
                        id="timeline"
                        label="How soon does the drawbridge move?"
                        options={[
                          'Immediately',
                          'Within 30 days',
                          'Within 1–3 months',
                          'I am only gathering information',
                          'Time has lost meaning',
                        ]}
                      />
                    </div>
                    <Field
                      id="other-party"
                      label="Name of the other fictional party"
                      placeholder="Use a fictional name only"
                      helper="A real law firm may use this for a conflict check. This parody form does not."
                    />
                    <div className="field">
                      <label htmlFor="message">
                        Briefly describe the campaign <span>required</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="What happened, what matters most, and which appliance has become unexpectedly important?"
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={`message-${errors.message ? 'error' : 'helper'}`}
                      />
                      <p id="message-helper" className="field-helper">
                        Do not submit confidential, dangerous, financial-account, medical, or
                        identifying information.
                      </p>
                      {errors.message && (
                        <p id="message-error" className="field-error">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <div className="checkbox-field">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        aria-invalid={Boolean(errors.consent)}
                        aria-describedby={errors.consent ? 'consent-error' : undefined}
                      />
                      <label htmlFor="consent">
                        I understand that Divorce Dungeon is a fictional parody, this form does not
                        create an attorney-client relationship, and no confidential information
                        should be submitted.
                      </label>
                    </div>
                    {errors.consent && (
                      <p id="consent-error" className="field-error">
                        {errors.consent}
                      </p>
                    )}
                    <button className="submit-button" type="submit" disabled={loading}>
                      {loading ? 'Preparing the Raven…' : 'Dispatch the Raven'}
                      <span aria-hidden="true">→</span>
                    </button>
                    <p className="submit-helper">
                      The raven is a button. The button is a demonstration.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <aside className="contact-aside">
            <div className="raven-art">
              <img
                src="/assets/illustrations/summon-counsel-raven-desk.webp"
                alt="A calm black raven beside a sealed envelope on an archive desk"
                width="819"
                height="1024"
              />
            </div>
            <div className="contact-aside-copy">
              <Eyebrow>BEFORE THE WAR COUNCIL</Eyebrow>
              <ul>
                {[
                  'Write down your top three priorities',
                  'Gather relevant non-confidential records',
                  'Separate urgent deadlines from general concerns',
                  'Do not organize evidence exclusively by emotional intensity',
                  'Leave all actual swords at home',
                ].map((item) => (
                  <li key={item}>
                    <CheckCircle2 aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="availability-card">
                <CalendarClock aria-hidden="true" />
                <div>
                  <strong>Fictional Office Hours</strong>
                  <p>
                    Monday–Thursday · 8:30 a.m.–5:30 p.m.
                    <br />
                    Friday · 8:30 a.m.–3:00 p.m.
                    <br />
                    Weekends · The gargoyles monitor the inbox.
                  </p>
                </div>
              </div>
              <div className="fictional-address">
                <MapPin aria-hidden="true" />
                <p>
                  13 Separate Kingdoms Way
                  <br />
                  Lower Keep, DD 00000
                  <small>Fictional address</small>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}

function Field({
  id,
  label,
  helper,
  error,
  required = false,
  type = 'text',
  placeholder,
}: {
  id: string
  label: string
  helper?: string
  error?: string
  required?: boolean
  type?: string
  placeholder?: string
}) {
  const descriptionId = `${id}-${error ? 'error' : 'helper'}`
  return (
    <div className="field">
      <label htmlFor={id}>
        {label} {required && <span>required</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={helper || error ? descriptionId : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="field-error">
          {error}
        </p>
      ) : (
        helper && (
          <p id={`${id}-helper`} className="field-helper">
            {helper}
          </p>
        )
      )}
    </div>
  )
}

function SelectField({
  id,
  label,
  options,
  error,
  required = false,
}: {
  id: string
  label: string
  options: string[]
  error?: string
  required?: boolean
}) {
  return (
    <div className="field">
      <label htmlFor={id}>
        {label} {required && <span>required</span>}
      </label>
      <select
        id={id}
        name={id}
        defaultValue=""
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        <option value="" disabled>
          Select an entry
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="field-error">
          {error}
        </p>
      )}
    </div>
  )
}
