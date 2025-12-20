import { formOptions } from '@tanstack/react-form'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { MobileSearchBar } from '@/components/SearchBar/MobileSearchBar'
import { SearchBar } from '@/components/SearchBar/SearchBar'
import { useAppForm } from '@/hooks/searchBarForm'
import useWindowSize from '@/hooks/useWindowSize.ts'

export const Route = createFileRoute('/')({ component: Home })

type SearchForm = {
  position: string
  location: string
  contract: boolean
}

const defaultSearchForm: SearchForm = {
  position: '',
  location: '',
  contract: false,
}

const formOpts = formOptions({
  defaultValues: defaultSearchForm,
})

function Home() {
  const windowSize = useWindowSize()

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

  const handleFilterClick = () => {
    setIsFilterModalOpen(!isFilterModalOpen)
  }

  const form = useAppForm({
    ...formOpts,
    onSubmit: ({ value }) => {
      setIsFilterModalOpen(false)
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
            form={form}
            handleFilterClick={handleFilterClick}
            isFilterModalOpen={isFilterModalOpen}
          />
        )
      }
    </>
  )
}
