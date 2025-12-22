import { useInfiniteQuery } from '@tanstack/react-query'
import { getPagedJobs } from '@/data/data'

export function useInfiniteJobs(filters: FilterParams) {
  return useInfiniteQuery({
    queryKey: ['jobs', { filters }],
    queryFn: async (filters) => {
      const jobs = await getPagedJobs({
        data: { pageParam: filters.pageParam },
      })
      // console.log('jobs', jobs)
      return jobs
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined
      }

      return lastPageParam + 1
    },
  })
}
