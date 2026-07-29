import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useRef, useState, type ReactNode } from 'react'
import { useCountUp } from 'react-countup'
import { Link, type LinkProps } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const revealItem: Variants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.62, ease: [0.16, 1, 0.3, 1] },
  },
}

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
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={twMerge('section-heading', align === 'center' && 'mx-auto text-center')}
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.09 } },
      }}
    >
      {eyebrow && (
        <motion.p className="eyebrow" variants={revealItem}>
          {eyebrow}
        </motion.p>
      )}
      <motion.h2 variants={revealItem}>{title}</motion.h2>
      {intro && (
        <motion.p className="section-intro" variants={revealItem}>
          {intro}
        </motion.p>
      )}
    </motion.div>
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
      initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.992 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.62, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerGroup({
  children,
  className,
  delay = 0,
  amount = 0.24,
}: {
  children: ReactNode
  className?: string
  delay?: number
  amount?: number
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.085,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={revealItem}>
      {children}
    </motion.div>
  )
}

export function AnimatedNumber({
  end,
  className,
  suffix = '',
  prefix = '',
  pad = 0,
  duration = 1.8,
  delay = 0,
}: {
  end: number
  className?: string
  suffix?: string
  prefix?: string
  pad?: number
  duration?: number
  delay?: number
}) {
  const reduceMotion = useReducedMotion()
  const format = (value: number) => {
    const number = pad ? String(Math.round(value)).padStart(pad, '0') : Math.round(value).toLocaleString()
    return `${prefix}${number}${suffix}`
  }

  if (reduceMotion) {
    return <span className={className}>{format(end)}</span>
  }

  return (
    <CountUpNumber
      className={className}
      start={end === 0 ? 7 : 0}
      end={end}
      duration={duration}
      scrollSpyDelay={Math.round(delay * 1000)}
      formattingFn={format}
    />
  )
}

function CountUpNumber({
  className,
  start,
  end,
  duration,
  scrollSpyDelay,
  formattingFn,
}: {
  className?: string
  start: number
  end: number
  duration: number
  scrollSpyDelay: number
  formattingFn: (value: number) => string
}) {
  const countUpRef = useRef<HTMLSpanElement>(null!)

  useCountUp({
    ref: countUpRef,
    start,
    end,
    duration,
    useEasing: true,
    enableScrollSpy: true,
    scrollSpyOnce: true,
    scrollSpyDelay,
    formattingFn,
  })

  return (
    <span className={className} ref={countUpRef}>
      {formattingFn(start)}
    </span>
  )
}

export function Accordion({
  items,
}: {
  items: { question: string; answer: string }[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const reduceMotion = useReducedMotion()

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}-${item.question.replace(/\W/g, '').slice(0, 12)}`
        return (
          <motion.div
            className="accordion-item"
            key={item.question}
            initial={reduceMotion ? false : { opacity: 0, x: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.48, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
          >
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
          </motion.div>
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
          <StaggerGroup className="page-hero-copy" amount={0.15}>
            <StaggerItem>
              <Eyebrow>{eyebrow}</Eyebrow>
            </StaggerItem>
            <StaggerItem>
              <h1>{title}</h1>
            </StaggerItem>
            <StaggerItem>
              <p>{description}</p>
            </StaggerItem>
            {children && <StaggerItem>{children}</StaggerItem>}
          </StaggerGroup>
          {image ? (
            <Reveal className="page-hero-art" delay={0.1}>
              <motion.img
                src={image}
                alt={imageAlt}
                width="1536"
                height="1024"
                initial={{ scale: 1.055 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
              />
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
