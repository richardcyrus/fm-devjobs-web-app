import { Link } from '@tanstack/react-router'
import { Button } from '@/components/Button/Button'

// biome-ignore lint/suspicious/noExplicitAny: expected
export function NotFound({ children }: { children?: any }) {
  return (
    <div className="space-y-2 p-2">
      <div>
        {children || <p>The page you are looking for does not exist.</p>}
      </div>
      <p>
        <Button intent="primary" onClick={() => window.history.back()}>
          Go Back
        </Button>
        <Link
          to="/"
          className="button mt-6 inline-flex min-h-12 min-w-[148px] cursor-pointer items-center justify-center self-start rounded-[5px] border-none bg-violet-100/10 p-0 text-center font-sans font-bold text-violet-300 hover:bg-violet-300 focus:shadow-button-focus focus:outline-transparent focus:outline-solid md:mt-0 dark:text-white"
        >
          Start Over
        </Link>
      </p>
    </div>
  )
}
