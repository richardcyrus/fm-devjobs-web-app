import axios from 'axios'
import { useInfiniteQuery, useQuery } from 'react-query'

const fetchJobs = (filters) => {
  return axios
    .get('/api/jobs', { params: filters })
    .then((response) => response.data)
}

const fetchInfiniteJobs = ({ queryKey, pageParam }) => {
  // eslint-disable-next-line no-unused-vars
  const [_key, { filters }] = queryKey
  const newFilters = { pageParam, ...filters }

  return axios
    .get('/api/jobs', { params: newFilters })
    .then((response) => response.data)
}

const fetchJob = (id) => {
  return axios.get(`/api/jobs/${id}`).then((response) => response.data)
}

export function useJobs(filters) {
  return useQuery(['jobs', filters], () => fetchJobs(filters))
}

export function useJob(id, options = {}) {
  return useQuery(
    ['job', id],
    async ({ queryKey: [_key, id] }) => {
      const data = await fetchJob(id)
      return data
    },
    {
      ...options,
    },
  )
}

export function useInfiniteJobs(filters) {
  return useInfiniteQuery(['jobs', { filters }], fetchInfiniteJobs, {
    getNextPageParam: (lastPage, pages) => {
      const currentJobs = lastPage[0].jobs

      if (currentJobs.length === 0) {
        return undefined
      }

      const currentMaxJobId = currentJobs[currentJobs.length - 1]._id

      if (currentMaxJobId === lastPage[0].totalCount[0].total) {
        return undefined
      }

      return currentMaxJobId
    },
  })
}
