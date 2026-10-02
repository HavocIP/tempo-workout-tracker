import { MUSCLE_GROUP_COLOR, MUSCLE_GROUP_LABEL, type MuscleGroup } from '../data/plan'

export function MuscleGroupChip({ group }: { group: MuscleGroup }) {
  return (
    <div className="px-6">
      <span
        className={`inline-flex items-center gap-2 rounded-lg ${MUSCLE_GROUP_COLOR[group]} px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-ink`}
      >
        <span className="flex items-end gap-[3px]" aria-hidden>
          <span className="h-4 w-1 rounded-sm bg-white/80" />
          <span className="h-4 w-1 rounded-sm bg-white/80" />
          <span className="h-4 w-1 rounded-sm bg-white/80" />
        </span>
        {MUSCLE_GROUP_LABEL[group]}
      </span>
    </div>
  )
}
