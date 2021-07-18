import { useEffect, useState } from 'react'
import { connectToDatabase } from '../util/mongodb'
import useWindowSize from '../hooks/useWindowSize'
import { useForm, FormProvider } from 'react-hook-form'

import { getLayout } from '../layouts/IndexLayout'

import Button from '../components/Button'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import MobileSearchBar from '../components/MobileSearchBar'

export async function getServerSideProps() {
  const { db } = await connectToDatabase()

  const jobs = await db
    .collection('jobs')
    .find({})
    .sort({ _id: 1 })
    .limit(12)
    .toArray()

  return {
    props: {
      jobs: JSON.parse(JSON.stringify(jobs)),
    },
  }
}

export default function Home({ jobs }) {
  const windowSize = useWindowSize()
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

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
    console.log(data)
  }

  const onKeyDown = (event) => {
    if (event.keyCode === 27) {
      setIsFilterModalOpen(false)
    }
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
            onKeyDown={onKeyDown}
            handleFilterClick={handleFilterClick}
            isFilterModalOpen={isFilterModalOpen}
          />
        </FormProvider>
      )}
      {jobs.map((job) => (
        <Card key={job._id} job={job} />
      ))}
      <Button type="button" variant="primary" data-button-role="get-more">
        Load More
      </Button>
      <style jsx global>{`
        #main-content button[data-button-role='get-more'] {
          margin-bottom: 3.875em;

          @media screen and (min-width: 75em) {
            margin-bottom: 6.5em;
          }
        }
      `}</style>
    </>
  )
}

Home.getLayout = getLayout
