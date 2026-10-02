import { History, Info, MonitorPlay, MoreVertical } from 'lucide-react'
import type { Exercise } from '../data/plan'
import type { WorkoutLogApi } from '../store/useWorkoutLog'
import { SetRow } from './SetRow'

interface ExerciseCardProps {
  exercise: Exercise
  log: WorkoutLogApi
  isFirstInGroup: boolean
}

export function ExerciseCard({ exercise, log, isFirstInGroup }: ExerciseCardProps) {
  const tipVisible = !log.isTipDismissed(exercise.id)

  return (
    <section className={`px-6 pb-2 ${isFirstInGroup ? 'pt-9' : 'border-t-8 border-bg pt-5'}`}>
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-xl font-bold text-ink">{exercise.name}</h2>
          <p className="mt-1 text-lg text-ink-2">{exercise.equipment}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1 pt-1">
          <IconButton label="Watch demo">
            <MonitorPlay className="h-6 w-6" />
          </IconButton>
          <IconButton label="History">
            <History className="h-6 w-6" />
          </IconButton>
          <IconButton label="Exercise options">
            <MoreVertical className="h-6 w-6" />
          </IconButton>
        </div>
      </header>

      {tipVisible && (
        <button
          type="button"
          onClick={() => log.dismissTip(exercise.id)}
          className="mt-4 flex w-full items-center gap-3 rounded-md bg-accent-soft px-3 py-2.5 text-left text-base text-ink hover:bg-accent-soft/80"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-strong text-[11px] font-bold text-white">
            i
          </span>
          How to choose your starting weight
        </button>
      )}

      <div className="mt-5 grid grid-cols-[32px_1fr_1fr_64px] items-center gap-2 pb-2 text-lg font-semibold uppercase text-ink">
        <span />
        <span className="text-center">Weight</span>
        <span className="flex items-center justify-center gap-1.5">
          Reps <Info className="h-4 w-4" />
        </span>
        <span className="text-center">Log</span>
      </div>

      {exercise.sets.map((set, i) => (
        <SetRow
          key={set.id}
          set={set}
          log={log.getSet(set.id)}
          onChange={(patch) => log.updateSet(set.id, patch)}
          onToggleDone={() => log.toggleDone(set.id)}
          isLast={i === exercise.sets.length - 1}
        />
      ))}
    </section>
  )
}

function IconButton({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-surface-2"
    >
      {children}
    </button>
  )
}
