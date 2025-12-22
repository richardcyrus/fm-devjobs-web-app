import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'
import { Button } from '@/components/Button/Button'
import { Card } from '@/components/Card/Card'
import { MobileSearchBar } from '@/components/SearchBar/MobileSearchBar'
import { SearchBar } from '@/components/SearchBar/SearchBar'
import { useAppForm } from '@/hooks/searchBarForm'
import { useInfiniteJobs } from '@/hooks/useJobs'
import useWindowSize from '@/hooks/useWindowSize'
import { formOpts, searchFormSchema } from '@/lib/formOptions'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [isFilterModalOpen, setIsFilterModalOpen] = React.useState(false)
  const [filters, setFilters] = React.useState({ limit: 12 })
  const windowSize = useWindowSize()

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteJobs(filters)

  const handleFilterClick = () => {
    setIsFilterModalOpen(!isFilterModalOpen)
  }

  const form = useAppForm({
    ...formOpts,
    validators: {
      onChange: searchFormSchema,
    },
    onSubmit: ({ formApi, value }) => {
      const result = searchFormSchema.parse(value)

      setIsFilterModalOpen(false)
      setFilters({ ...filters, ...result })

      formApi.reset()
    },
  })

  return (
    <main
      id="main-content"
      className="mx-auto flex max-w-[327px] flex-col md:max-w-[689px] md:items-center md:justify-center lg:max-w-[1110px]"
    >
      {
        //@ts-expect-error TS18048
        windowSize.width >= 768 ? (
          <SearchBar form={form} />
        ) : (
          <MobileSearchBar
            form={form}
            handleFilterClick={handleFilterClick}
            isFilterModalOpen={isFilterModalOpen}
          />
        )
      }
      {status === 'pending' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <p>{error.message}</p>
      ) : (
        <>
          <div className="job-cards mx-auto flex max-w-[327px] flex-col md:max-w-[689px] md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-[.6875em] lg:max-w-[1110px] lg:gap-x-[1.875em]">
            {data.pages.map((pages, i) => (
              // biome-ignore-start lint/suspicious: is safe
              <React.Fragment key={i}>
                {pages.jobs.map((job) => (
                  <Card key={job.id} job={job} />
                ))}
              </React.Fragment>
              // biome-ignore-end lint/suspicious: is safe
            ))}
          </div>
          <Button
            type="button"
            intent="primary"
            data-button-role="get-more"
            className="mx-auto mt-8 mb-[3.875em] md:mt-14 lg:mb-[6.5em]"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? 'Loading more...'
              : hasNextPage
                ? 'Load More'
                : 'Load More'}
          </Button>
          <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
      )}
    </main>
  )
}
