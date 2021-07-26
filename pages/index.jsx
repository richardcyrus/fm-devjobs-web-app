import React, { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import { useInfiniteJobs } from '../hooks/useJobs'
import useWindowSize from '../hooks/useWindowSize'

import { getLayout } from '../layouts/IndexLayout'
import Button from '../components/Button'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import MobileSearchBar from '../components/MobileSearchBar'

export default function Home() {
  const windowSize = useWindowSize()
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [filters, setFilters] = useState({ limit: 12 })

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

  const methods = useForm()
  const {
    reset,
    formState: { isSubmitSuccessful, submittedData },
  } = methods

  const onSubmit = (data) => {
    setIsFilterModalOpen(false)

    setFilters({ ...filters, ...data })
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, submittedData, reset])

  return (
    <>
      {windowSize.width >= 768 ? (
        <FormProvider {...methods}>
          <SearchBar onSubmit={onSubmit} />
        </FormProvider>
      ) : (
        <FormProvider {...methods}>
          <MobileSearchBar
            onSubmit={onSubmit}
            handleFilterClick={handleFilterClick}
            isFilterModalOpen={isFilterModalOpen}
          />
        </FormProvider>
      )}
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <p>{error.message}</p>
      ) : (
        <>
          <div className="job-cards">
            {data.pages.map((group, i) => (
              <React.Fragment key={i}>
                {group.map((nextGroup, j) => (
                  <React.Fragment key={j}>
                    {nextGroup.jobs.map((job) => (
                      <Card key={job._id} job={job} />
                    ))}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </div>
          <Button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            type="button"
            variant="primary"
            data-button-role="get-more"
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
      <style jsx global>{`
        #main-content button[data-button-role='get-more'] {
          margin-bottom: 3.875em;

          @media screen and (min-width: 75em) {
            margin-bottom: 6.5em;
          }
        }
      `}</style>

      <style jsx>{`
        .job-cards {
          display: flex;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
          max-width: 327px;

          @media screen and (min-width: 48em) {
            align-item: center;
            column-gap: 0.6875em;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 689px;
          }

          @media screen and (min-width: 75em) {
            column-gap: 1.875em;
            max-width: 1110px;
          }
        }
      `}</style>
    </>
  )
}

Home.getLayout = getLayout
