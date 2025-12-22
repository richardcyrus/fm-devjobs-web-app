import { useInfiniteQuery } from '@tanstack/react-query'
import { getPagedJobs } from '@/data/data'

export function useInfiniteJobs(filters) {
  return useInfiniteQuery({
    queryKey: ['jobs', { filters }],
    queryFn: async ({ pageParam }) => {
      console.log('filters', filters)

      const jobs = await getPagedJobs({
        data: { pageParam, ...filters },
      })

      return jobs
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _pages) => lastPage.nextCursor,
  })
}
