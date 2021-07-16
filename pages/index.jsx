import { connectToDatabase } from '../util/mongodb'
import useWindowSize from '../hooks/useWindowSize'

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

  return (
    <>
      {windowSize.width >= 768 ? <SearchBar /> : <MobileSearchBar />}
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
