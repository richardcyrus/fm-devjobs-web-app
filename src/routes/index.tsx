import { formOptions } from '@tanstack/react-form'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@/components/Button/Button'
import { Card } from '@/components/Card/Card'
import { MobileSearchBar } from '@/components/SearchBar/MobileSearchBar'
import { SearchBar } from '@/components/SearchBar/SearchBar'
import { getJobs } from '@/data/data'
import { useAppForm } from '@/hooks/searchBarForm'
import useWindowSize from '@/hooks/useWindowSize.ts'

export const Route = createFileRoute('/')({
  loader: async () => await getJobs(),
  component: Home,
})

type SearchForm = {
  position: string
  location: string
  contract: boolean
}

const defaultSearchForm: SearchForm = {
  position: '',
  location: '',
  contract: false,
}

const formOpts = formOptions({
  defaultValues: defaultSearchForm,
})

function Home() {
  const jobs = Route.useLoaderData()
  const windowSize = useWindowSize()

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

  const handleFilterClick = () => {
    setIsFilterModalOpen(!isFilterModalOpen)
  }

  const form = useAppForm({
    ...formOpts,
    onSubmit: ({ value }) => {
      setIsFilterModalOpen(false)
      console.log(value)
    },
  })

  return (
    <>
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
      <div className="job-cards flex flex-col mx-auto max-w-[327px] md:items-center md:justify-center md:flex-wrap md:flex-row md:max-w-[689px] md:gap-x-[.6875em] lg:max-w-[1110px] lg:gap-x-[1.875em]">
        {jobs.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </div>
      <Button
        type="button"
        intent="primary"
        data-button-role="get-more"
        className="mx-auto mt-8 mb-[3.875em] md:mt-14 lg:mb-[6.5em]"
      >
        Load More
      </Button>
    </>
  )
}
