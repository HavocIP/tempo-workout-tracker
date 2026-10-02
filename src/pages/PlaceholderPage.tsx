import type { LucideIcon } from 'lucide-react'

interface PlaceholderPageProps {
  title: string
  description: string
  Icon: LucideIcon
}

export function PlaceholderPage({ title, description, Icon }: PlaceholderPageProps) {
  return (
    <div className="flex min-h-full flex-col">
      <header className="px-6 pb-4 pt-5">
        <h1 className="text-[28px] font-extrabold uppercase leading-none tracking-tight text-ink">
          {title}
        </h1>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-10 pb-24 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-surface text-ink-2">
          <Icon className="h-10 w-10" strokeWidth={1.5} />
        </div>
        <p className="text-lg text-ink-2">{description}</p>
        <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink">
          Coming soon
        </span>
      </div>
    </div>
  )
}
