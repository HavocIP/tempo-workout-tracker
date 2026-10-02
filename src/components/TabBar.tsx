import { CalendarCheck, Dumbbell, Folder, LayoutGrid, MoreHorizontal } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const TABS = [
  { to: '/', label: 'Workout', Icon: CalendarCheck },
  { to: '/mesos', label: 'Mesos', Icon: Folder },
  { to: '/templates', label: 'Templates', Icon: LayoutGrid },
  { to: '/exercises', label: 'Exercises', Icon: Dumbbell },
  { to: '/more', label: 'More', Icon: MoreHorizontal },
] as const

export function TabBar() {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-bg pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {TABS.map(({ to, label, Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
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
        ))}
      </ul>
    </nav>
  )
}
