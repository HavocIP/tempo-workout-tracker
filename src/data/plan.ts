export type MuscleGroup = 'calves' | 'quads' | 'hamstrings' | 'glutes' | 'chest' | 'back'

export interface PlannedSet {
  id: string
  targetRir: number
}

export interface Exercise {
  id: string
  name: string
  equipment: string
  muscleGroup: MuscleGroup
  sets: PlannedSet[]
}

export interface WorkoutDay {
  week: number
  day: number
  weekday: string
  mesoName: string
  exercises: Exercise[]
}

export const MUSCLE_GROUP_LABEL: Record<MuscleGroup, string> = {
  calves: 'Calves',
  quads: 'Quads',
  hamstrings: 'Hamstrings',
  glutes: 'Glutes',
  chest: 'Chest',
  back: 'Back',
}

export const MUSCLE_GROUP_COLOR: Record<MuscleGroup, string> = {
  calves: 'bg-calves',
  quads: 'bg-quads',
  hamstrings: 'bg-hamstrings',
  glutes: 'bg-glutes',
  chest: 'bg-chest',
  back: 'bg-back',
}

const sets = (exerciseId: string, count: number, rir = 2): PlannedSet[] =>
  Array.from({ length: count }, (_, i) => ({ id: `${exerciseId}-s${i + 1}`, targetRir: rir }))

export const todayWorkout: WorkoutDay = {
  week: 1,
  day: 1,
  weekday: 'Monday',
  mesoName: 'New meso plan',
  exercises: [
    {
      id: 'smith-calves',
      name: 'Smith Machine Calves',
      equipment: 'Smith Machine',
      muscleGroup: 'calves',
      sets: sets('smith-calves', 2),
    },
    {
      id: 'bb-split-squat-1',
      name: 'Barbell Split Squat',
      equipment: 'Barbell',
      muscleGroup: 'quads',
      sets: sets('bb-split-squat-1', 2),
    },
    {
      id: 'bb-split-squat-2',
      name: 'Barbell Split Squat',
      equipment: 'Barbell',
      muscleGroup: 'quads',
      sets: sets('bb-split-squat-2', 2),
    },
    {
      id: 'bb-good-morning',
      name: 'Barbell Good Morning (High Bar)',
      equipment: 'Barbell',
      muscleGroup: 'hamstrings',
      sets: sets('bb-good-morning', 2),
    },
    {
      id: 'hip-thrust',
      name: 'Barbell Hip Thrust',
      equipment: 'Barbell',
      muscleGroup: 'glutes',
      sets: sets('hip-thrust', 2),
    },
  ],
}
