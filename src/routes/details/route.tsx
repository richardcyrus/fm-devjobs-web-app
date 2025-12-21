import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/details')({
  component: DetailsLayoutComponent,
})

function DetailsLayoutComponent() {
  return (
    <main id="main-content">
      <Outlet />
    </main>
  )
}
