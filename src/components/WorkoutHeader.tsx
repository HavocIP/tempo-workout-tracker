import { CalendarDays, MoreVertical } from 'lucide-react'

interface WorkoutHeaderProps {
  week: number
  day: number
  weekday: string
  mesoName: string
  hasNotification?: boolean
}

export function WorkoutHeader({
  week,
  day,
  weekday,
  mesoName,
  hasNotification = true,
}: WorkoutHeaderProps) {
  return (
    <header className="sticky top-0 z-20 bg-bg px-6 pb-4 pt-5">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[28px] font-extrabold uppercase leading-none tracking-tight">
            <span className="text-ink">DOINK {week}</span>{' '}
            <span className="text-ink-3">Day {day}</span>
          </h1>
          <p className="mt-2 text-lg text-ink-2">
            {weekday} · {mesoName}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Calendar"
            className="relative flex h-11 w-11 items-center justify-center rounded-md text-ink hover:bg-surface"
          >
            <CalendarDays className="h-7 w-7" />
            {hasNotification && (
              <span className="absolute right-1 top-1 h-3.5 w-3.5 rounded-full bg-accent-strong ring-2 ring-bg" />
            )}
          </button>
          <button
            type="button"
            aria-label="More options"
            className="flex h-11 w-11 items-center justify-center rounded-md text-ink hover:bg-surface"
          >
            <MoreVertical className="h-7 w-7" />
          </button>
        </div>
      </div>
    </header>
  )
}
