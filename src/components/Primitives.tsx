import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={twMerge('mx-auto w-full max-w-[1240px] px-5 sm:px-7 lg:px-10', className)}>
      {children}
    </div>
  )
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={twMerge('section-shell', className)}>
      <Container>{children}</Container>
    </section>
  )
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={twMerge('eyebrow', className)}>{children}</p>
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
}: {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
}) {
  return (
    <div className={twMerge('section-heading', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  )
}

type ButtonLinkProps = LinkProps & {
  variant?: 'primary' | 'secondary' | 'text'
  children: ReactNode
  className?: string
}

export function ButtonLink({
  variant = 'primary',
  children,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={twMerge(
        'button-link',
        variant === 'primary' && 'button-primary',
        variant === 'secondary' && 'button-secondary',
        variant === 'text' && 'button-text',
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={17} />
    </Link>
  )
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.62, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Accordion({
  items,
}: {
  items: { question: string; answer: string }[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}-${item.question.replace(/\W/g, '').slice(0, 12)}`
        return (
          <div className="accordion-item" key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" className={isOpen ? 'rotate-180' : ''} />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="overflow-hidden"
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
  children,
  image,
  imageAlt = '',
}: {
  eyebrow: string
  title: ReactNode
  description: ReactNode
  aside?: ReactNode
  children?: ReactNode
  image?: string
  imageAlt?: string
}) {
  return (
    <section className="page-hero">
      <Container>
        <div className={twMerge('page-hero-grid', image && 'page-hero-grid-with-image')}>
          <Reveal className="page-hero-copy">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1>{title}</h1>
            <p>{description}</p>
            {children}
          </Reveal>
          {image ? (
            <Reveal className="page-hero-art" delay={0.1}>
              <img src={image} alt={imageAlt} width="1536" height="1024" />
            </Reveal>
          ) : (
            aside && (
              <Reveal className="page-hero-aside" delay={0.1}>
                {aside}
              </Reveal>
            )
          )}
        </div>
      </Container>
    </section>
  )
}

export function Doctrine({ children }: { children: ReactNode }) {
  return (
    <blockquote className="doctrine">
      <span aria-hidden="true">“</span>
      <p>{children}</p>
    </blockquote>
  )
}
