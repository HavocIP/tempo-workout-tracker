import { useCallback, useEffect, useState } from 'react'

export interface SetLog {
  weight: string
  reps: string
  done: boolean
}

export interface WorkoutLogState {
  sets: Record<string, SetLog>
  dismissedTips: Record<string, boolean>
}

const STORAGE_KEY = 'workout-tracker:log:v1'
const EMPTY: WorkoutLogState = { sets: {}, dismissedTips: {} }

function load(): WorkoutLogState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return EMPTY
    const parsed = JSON.parse(raw) as Partial<WorkoutLogState>
    return { sets: parsed.sets ?? {}, dismissedTips: parsed.dismissedTips ?? {} }
  } catch {
    return EMPTY
  }
}

function save(state: WorkoutLogState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // storage unavailable (private mode, quota) — keep in-memory state only
  }
}

export function useWorkoutLog() {
  const [state, setState] = useState<WorkoutLogState>(load)

  useEffect(() => {
    save(state)
  }, [state])

  const getSet = useCallback(
    (setId: string): SetLog => state.sets[setId] ?? { weight: '', reps: '', done: false },
    [state.sets],
  )

  const updateSet = useCallback((setId: string, patch: Partial<SetLog>) => {
    setState((prev) => ({
      ...prev,
      sets: {
        ...prev.sets,
        [setId]: { ...(prev.sets[setId] ?? { weight: '', reps: '', done: false }), ...patch },
      },
    }))
  }, [])

  const toggleDone = useCallback((setId: string) => {
    setState((prev) => {
      const cur = prev.sets[setId] ?? { weight: '', reps: '', done: false }
      return { ...prev, sets: { ...prev.sets, [setId]: { ...cur, done: !cur.done } } }
    })
  }, [])

  const dismissTip = useCallback((exerciseId: string) => {
    setState((prev) => ({ ...prev, dismissedTips: { ...prev.dismissedTips, [exerciseId]: true } }))
  }, [])

  const isTipDismissed = useCallback(
    (exerciseId: string) => Boolean(state.dismissedTips[exerciseId]),
    [state.dismissedTips],
  )

  const reset = useCallback(() => setState(EMPTY), [])

  return { getSet, updateSet, toggleDone, dismissTip, isTipDismissed, reset }
}

export type WorkoutLogApi = ReturnType<typeof useWorkoutLog>
