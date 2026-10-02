import { CalendarCheck, Dumbbell, Folder, LayoutGrid, MoreHorizontal } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const LEFT_TABS = [
  { to: '/mesos', label: 'Mesos', Icon: Folder },
  { to: '/templates', label: 'Templates', Icon: LayoutGrid },
] as const

const RIGHT_TABS = [
  { to: '/exercises', label: 'Exercises', Icon: Dumbbell },
  { to: '/more', label: 'More', Icon: MoreHorizontal },
] as const

type Tab = (typeof LEFT_TABS)[number] | (typeof RIGHT_TABS)[number]

function TabLink({ to, label, Icon }: Tab) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 pb-3 pt-3 text-xs font-medium ${
            isActive ? 'text-ink' : 'text-ink-3'
          }`
        }
      >
        <Icon className="h-7 w-7" strokeWidth={1.75} />
        {label}
      </NavLink>
    </li>
  )
}

export function TabBar() {
  return (
    <nav aria-label="Primary" className="relative z-30 shrink-0 bg-bg pt-12">
      <div className="relative">
        {/* Raised primary action: Workout */}
        <NavLink
          to="/"
          end
          aria-label="Workout"
          className={({ isActive }) =>
            `absolute left-1/2 top-0 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full shadow-lg shadow-black/40 ring-4 ring-bg transition-colors ${
              isActive ? 'bg-accent text-white' : 'bg-accent-strong text-white hover:bg-accent'
            }`
          }
        >
          <CalendarCheck className="h-7 w-7" strokeWidth={2.25} />
        </NavLink>

        {/* Bar with a semicircular notch cut out under the action button */}
        <div
          className="border-t border-line bg-surface pb-[env(safe-area-inset-bottom)]"
          style={{
            WebkitMaskImage:
              'radial-gradient(circle 44px at 50% 0, transparent 43px, black 44px)',
            maskImage: 'radial-gradient(circle 44px at 50% 0, transparent 43px, black 44px)',
          }}
        >
          <ul className="grid grid-cols-5 items-end">
            {LEFT_TABS.map((tab) => (
              <TabLink key={tab.to} {...tab} />
            ))}
            <li className="flex flex-col items-center pb-3 pt-3 text-xs font-medium text-ink">
              <span className="h-7 w-7" aria-hidden />
              Workout
            </li>
            {RIGHT_TABS.map((tab) => (
              <TabLink key={tab.to} {...tab} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
