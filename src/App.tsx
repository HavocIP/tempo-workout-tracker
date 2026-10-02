import { Dumbbell, Folder, LayoutGrid, MoreHorizontal } from 'lucide-react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TabBar } from './components/TabBar'
import { PlaceholderPage } from './pages/PlaceholderPage'
import { WorkoutPage } from './pages/WorkoutPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto min-h-full w-full max-w-md bg-bg pb-24">
        <Routes>
          <Route path="/" element={<WorkoutPage />} />
          <Route
            path="/mesos"
            element={
              <PlaceholderPage
                title="Mesos"
                description="Plan and review your mesocycles."
                Icon={Folder}
              />
            }
          />
          <Route
            path="/templates"
            element={
              <PlaceholderPage
                title="Templates"
                description="Reusable workout templates for new blocks."
                Icon={LayoutGrid}
              />
            }
          />
          <Route
            path="/exercises"
            element={
              <PlaceholderPage
                title="Exercises"
                description="Browse the exercise library and add your own."
                Icon={Dumbbell}
              />
            }
          />
          <Route
            path="/more"
            element={
              <PlaceholderPage
                title="More"
                description="Settings, units, and data export."
                Icon={MoreHorizontal}
              />
            }
          />
        </Routes>
      </div>
      <TabBar />
    </BrowserRouter>
  )
}
