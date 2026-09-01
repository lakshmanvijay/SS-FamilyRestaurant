import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  )
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  )
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  )
}

export function IconClock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  )
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3.5l1.6 4.2-2 1.6a12.5 12.5 0 0 0 5.5 5.5l1.6-2 4.2 1.6V18a2 2 0 0 1-2 2C10.6 20 4 13.4 4 6a2 2 0 0 1 1-2z" />
    </svg>
  )
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <path d="M4.5 6.5 12 12l7.5-5.5" />
    </svg>
  )
}

export function IconLeaf(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 4c0 9.4-6.6 16-16 16C4 10.6 10.6 4 20 4z" />
      <path d="M9 19c2-4 5-7 9-9" />
    </svg>
  )
}

export function IconFlame(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21c-4 0-6.5-2.6-6.5-6 0-3 2-4.8 2.6-7.4.3 1.2 1 2 1.9 2.2-.4-2.6.6-5.3 3-6.8-.5 2 .1 3.6 1.4 4.8 1.6 1.5 3.6 3 3.6 7.2 0 3.4-2.5 6-6 6z" />
    </svg>
  )
}

export function IconWheat(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v18" />
      <path d="M12 6c-2 0-3.5 1.2-3.5 3S10 12 12 12" />
      <path d="M12 6c2 0 3.5 1.2 3.5 3S14 12 12 12" />
      <path d="M12 10c-2 0-3.5 1.2-3.5 3S10 16 12 16" />
      <path d="M12 10c2 0 3.5 1.2 3.5 3S14 16 12 16" />
    </svg>
  )
}

export function IconStar(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.6L12 17.6l-5.9 3 1.2-6.6-4.8-4.6 6.6-.9z" />
    </svg>
  )
}

export function IconQuote(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M9.5 6C6.5 7.4 5 9.7 5 12.7c0 2.3 1.4 3.9 3.4 3.9 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.6-3 .3-1.6 1.6-3 3.4-3.7L9.5 6zm9 0c-3 1.4-4.5 3.7-4.5 6.7 0 2.3 1.4 3.9 3.4 3.9 1.7 0 3-1.3 3-3 0-1.6-1.1-2.8-2.6-3 .3-1.6 1.6-3 3.4-3.7L18.5 6z" />
    </svg>
  )
}

export function IconCalendar(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
      <line x1="8" y1="3" x2="8" y2="6.5" />
      <line x1="16" y1="3" x2="16" y2="6.5" />
    </svg>
  )
}

export function IconUsers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="9" r="3" />
      <path d="M3.5 19c.7-3 2.8-4.5 5.5-4.5s4.8 1.5 5.5 4.5" />
      <circle cx="17" cy="9.5" r="2.3" />
      <path d="M15.5 14.7c1.8.3 3.2 1.6 3.9 4.3" />
    </svg>
  )
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  )
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <line x1="4" y1="12" x2="19" y2="12" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5.5 8.5L12 15l6.5-6.5" />
    </svg>
  )
}

export function IconFacebook(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.7-1.5H17V5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9V11H8.5v3H11v7z" />
    </svg>
  )
}

export function IconInstagram(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
