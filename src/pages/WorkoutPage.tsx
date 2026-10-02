import { ExerciseCard } from '../components/ExerciseCard'
import { MuscleGroupChip } from '../components/MuscleGroupChip'
import { WorkoutHeader } from '../components/WorkoutHeader'
import { todayWorkout, type Exercise } from '../data/plan'
import { useWorkoutLog } from '../store/useWorkoutLog'

function groupConsecutive(exercises: Exercise[]): Exercise[][] {
  return exercises.reduce<Exercise[][]>((groups, ex) => {
    const last = groups[groups.length - 1]
    if (last && last[0].muscleGroup === ex.muscleGroup) last.push(ex)
    else groups.push([ex])
    return groups
  }, [])
}

export function WorkoutPage() {
  const log = useWorkoutLog()
  const { week, day, weekday, mesoName, exercises } = todayWorkout

  return (
    <div className="min-h-full">
      <WorkoutHeader week={week} day={day} weekday={weekday} mesoName={mesoName} />

      <main className="space-y-7 pb-6 pt-2">
        {groupConsecutive(exercises).map((group) => (
          <section key={group[0].id} aria-label={group[0].muscleGroup}>
            <div className="relative z-10">
              <MuscleGroupChip group={group[0].muscleGroup} />
            </div>
            <div className="-mt-4 overflow-hidden rounded-2xl bg-surface">
              {group.map((exercise, i) => (
                <ExerciseCard
                  key={exercise.id}
                  exercise={exercise}
                  log={log}
                  isFirstInGroup={i === 0}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
