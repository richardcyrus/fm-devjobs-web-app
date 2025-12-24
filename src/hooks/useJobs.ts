import { useInfiniteQuery } from '@tanstack/react-query'
import { getPagedJobs } from '@/data/data'
import type { FilterParams } from '@/types'

export function useInfiniteJobs(filters: FilterParams) {
  return useInfiniteQuery({
    queryKey: ['jobs', { filters }],
    queryFn: async ({ pageParam }) => {
      console.log('filters', filters)

      const jobs = await getPagedJobs({
        data: { ...filters, pageParam },
      })

      return jobs
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _pages) => lastPage?.nextCursor,
  })
}
