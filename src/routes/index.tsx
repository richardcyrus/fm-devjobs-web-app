import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { MobileSearchBar } from '@/components/SearchBar/MobileSearchBar'
import { SearchBar } from '@/components/SearchBar/SearchBar'
import useWindowSize from '@/hooks/useWindowSize.ts'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const windowSize = useWindowSize()

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

  const handleFilterClick = () => {
    setIsFilterModalOpen(!isFilterModalOpen)
  }

  const onSubmit = () => {
    setIsFilterModalOpen(false)
  }

  return (
    <>
      {
        //@ts-expect-error TS18048
        windowSize.width >= 768 ? (
          <SearchBar onSubmit={onSubmit} />
        ) : (
          <MobileSearchBar
            onSubmit={onSubmit}
            handleFilterClick={handleFilterClick}
            isFilterModalOpen={isFilterModalOpen}
          />
        )
      }
    </>
  )
}
