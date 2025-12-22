import { createFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react'
import { Button } from '@/components/Button/Button'
import { Card } from '@/components/Card/Card'
import { MobileSearchBar } from '@/components/SearchBar/MobileSearchBar'
import { SearchBar } from '@/components/SearchBar/SearchBar'
import { getJobs } from '@/data/data'
import { useAppForm } from '@/hooks/searchBarForm'
import { useInfiniteJobs } from '@/hooks/useJobs'
import useWindowSize from '@/hooks/useWindowSize'
import { formOpts, searchFormSchema } from '@/lib/formOptions'

export const Route = createFileRoute('/')({
  loader: async () => ({
    jobs: await getJobs(),
  }),
  component: Home,
})

function Home() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [filters, _setFilters] = useState({ pageParam: 1 })
  // const { jobs } = Route.useLoaderData()
  const windowSize = useWindowSize()
  // console.log('filters:', filters)
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteJobs(filters)
  // console.log('data', data)

  const handleFilterClick = () => {
    setIsFilterModalOpen(!isFilterModalOpen)
  }

  const form = useAppForm({
    ...formOpts,
    validators: {
      onChange: searchFormSchema,
    },
    onSubmit: (params) => {
      // console.log('params: ', params)
      // console.log('value: ', params.value)
      setIsFilterModalOpen(false)
      const result = searchFormSchema.parse(params.value)
      console.log('result: ', result)
      // TODO: get filtered jobs from server.
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
            {data.pages.map((group, i) => (
              // biome-ignore-start lint/suspicious: is safe
              <React.Fragment key={i}>
                {group.map((job) => (
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
