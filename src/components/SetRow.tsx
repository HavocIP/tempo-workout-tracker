import { Check, MoreVertical } from 'lucide-react'
import type { PlannedSet } from '../data/plan'
import type { SetLog } from '../store/useWorkoutLog'

interface SetRowProps {
  set: PlannedSet
  log: SetLog
  onChange: (patch: Partial<SetLog>) => void
  onToggleDone: () => void
  isLast: boolean
}

export function SetRow({ set, log, onChange, onToggleDone, isLast }: SetRowProps) {
  return (
    <div
      className={`grid grid-cols-[32px_1fr_1fr_64px] items-center gap-2 py-4 ${
        isLast ? '' : 'border-b border-line'
      }`}
    >
      <button
        type="button"
        aria-label="Set options"
        className="flex h-8 w-8 items-center justify-center rounded-md text-ink hover:bg-surface-2"
      >
        <MoreVertical className="h-5 w-5" />
      </button>

      <div className="flex justify-center">
        <input
          type="number"
          inputMode="decimal"
          step="0.5"
          min="0"
          placeholder="lbs"
          value={log.weight}
          onChange={(e) => onChange({ weight: e.target.value })}
          className="h-12 w-full max-w-[156px] rounded-md bg-field text-center text-xl text-ink placeholder:text-ink-2 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div className="flex justify-center">
        <input
          type="number"
          inputMode="numeric"
          min="0"
          placeholder={`${set.targetRir} RIR`}
          value={log.reps}
          onChange={(e) => onChange({ reps: e.target.value })}
          className="h-12 w-full max-w-[156px] rounded-md bg-field text-center text-xl text-ink placeholder:text-ink-2 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          role="checkbox"
          aria-checked={log.done}
          aria-label="Log set"
          onClick={onToggleDone}
          className={`flex h-11 w-11 items-center justify-center rounded-md border-[3px] transition-colors ${
            log.done ? 'border-accent bg-accent text-white' : 'border-ink-3 bg-transparent'
          }`}
        >
          {log.done && <Check className="h-6 w-6" strokeWidth={3} />}
        </button>
      </div>
    </div>
  )
}
