import { connectToDatabase } from '../../../util/mongodb'

export default async function handler(req, res) {
  const fields = {
    _id: 1,
    logo: 1,
    logoBackground: 1,
    company: 1,
    postedAt: 1,
    contract: 1,
    position: 1,
    location: 1,
  }
  let recordLimit = 12
  let query = {}
  const queryFragment = []

  const { position, location, contract, limit, pageParam } = req.query

  if (pageParam) {
    queryFragment.push({ _id: { $gt: parseInt(pageParam, 10) } })
  }

  if (position) {
    const positionParam = new RegExp(position, 'i')
    queryFragment.push({ position: { $in: [positionParam] } })
  }

  if (location) {
    const locationParam = new RegExp(location, 'i')
    queryFragment.push({ location: { $in: [locationParam] } })
  }

  if (contract) {
    queryFragment.push({ contract })
  }

  if (limit) {
    recordLimit = parseInt(limit, 10)
  }

  if (queryFragment.length > 1) {
    query.$and = queryFragment
  } else if (queryFragment.length === 1) {
    query = { ...queryFragment[0] }
  }

  /**
   * Pipeline for InfiniteQuery
   *
   * totalCount is needed so we know when to set getNextPageParam to
   * `undefined` with react-query `useInfiniteQuery()`
   *
   * This will only work because the _id field is an integer and not a
   * MongoDB ObjectID. If they were ObjectIds, totalCount would have to
   * become the maximum ObjectId in the collection.
   */
  const pipeline = [
    {
      $facet: {
        jobs: [
          { $match: { ...query } },
          { $sort: { _id: 1 } },
          { $limit: recordLimit },
          { $project: fields },
        ],
        totalCount: [{ $count: 'total' }],
      },
    },
  ]

  const { db } = await connectToDatabase()

  const jobs = await db.collection('jobs').aggregate(pipeline).toArray()

  res.status(200).json(jobs)
}
