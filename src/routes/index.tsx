import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { MobileSearchBar } from '@/components/SearchBar/MobileSearchBar'
import { SearchBar } from '@/components/SearchBar/SearchBar'
import { useAppForm } from '@/hooks/searchBarForm'
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

  const form = useAppForm({
    defaultValues: {
      position: '',
      location: '',
      contract: false,
    },
    onSubmit: ({ value }) => {
      console.log(value)
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
            onSubmit={onSubmit}
            handleFilterClick={handleFilterClick}
            isFilterModalOpen={isFilterModalOpen}
          />
        )
      }
    </>
  )
}
