import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@/components/Button/Button'
import { Card } from '@/components/Card/Card'
import { MobileSearchBar } from '@/components/SearchBar/MobileSearchBar'
import { SearchBar } from '@/components/SearchBar/SearchBar'
import { getJobs } from '@/data/data'
import { useAppForm } from '@/hooks/searchBarForm'
import useWindowSize from '@/hooks/useWindowSize'
import { formOpts, searchFormSchema } from '@/lib/formOptions'

export const Route = createFileRoute('/')({
  loader: async () => ({
    jobs: await getJobs(),
  }),
  component: Home,
})

function Home() {
  const { jobs } = Route.useLoaderData()
  const windowSize = useWindowSize()

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

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
