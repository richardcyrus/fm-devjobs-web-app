import { connectToDatabase } from '../util/mongodb'

import { getLayout } from '../layouts/IndexLayout'
import Button from '../components/Button'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'

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
  return (
    <>
      {jobs.map((job) => (
        <Card key={job._id} job={job} />
      ))}
      <Button variant="primary">Load More</Button>
    </>
  )
}

Home.getLayout = getLayout
