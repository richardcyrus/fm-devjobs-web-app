import type { ErrorComponentProps } from '@tanstack/react-router'
import {
  ErrorComponent,
  Link,
  rootRouteId,
  useMatch,
  useRouter,
} from '@tanstack/react-router'
import { Button } from '@/components/Button/Button'

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter()
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId,
  })

  console.error('DefaultCatchBoundary Error:', error)

  return (
    <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-6 p-4">
      <ErrorComponent error={error} />
      <div className="flex flex-wrap items-center gap-2">
        <Button
          intent="primary"
          onClick={() => {
            router.invalidate()
          }}
        >
          Try Again
        </Button>
        {isRoot ? (
          <Link
            to="/"
            className={`button mt-6 inline-flex min-h-12 min-w-[148px] cursor-pointer items-center justify-center self-start rounded-[5px] border-none bg-violet-100/10 p-0 text-center font-sans font-bold text-violet-300 hover:bg-violet-300 focus:shadow-button-focus focus:outline-transparent focus:outline-solid md:mt-0 dark:text-white`}
          >
            Home
          </Link>
        ) : (
          <Link
            to="/"
            className={`button mt-6 inline-flex min-h-12 min-w-[148px] cursor-pointer items-center justify-center self-start rounded-[5px] border-none bg-violet-100/10 p-0 text-center font-sans font-bold text-violet-300 hover:bg-violet-300 focus:shadow-button-focus focus:outline-transparent focus:outline-solid md:mt-0 dark:text-white`}
            onClick={(e) => {
              e.preventDefault()
              window.history.back()
            }}
          >
            Go Back
          </Link>
        )}
      </div>
    </div>
  )
}
