import { Button } from '@/components/Button/Button'
import { MobileSearchModal } from '@/components/SearchBar/MobileSearchModal'

export function MobileSearchBar({
  onSubmit,
  handleFilterClick,
  isFilterModalOpen,
}) {
  return (
    <>
      <div className="mt-[-40px] h-20 w-[327px] rounded-md bg-white pe-4 ps-6 dark:bg-blue-800">
        <form
          id="mobile-search"
          className="flex h-full items-center"
          onSubmit={onSubmit}
        >
          <div className="flex h-full items-center">
            <input
              type="text"
              id="position"
              placeholder="Filter by title&hellip;"
              className="w-[19ch] border-none bg-transparent text-blue-800 placeholder-shown:text-blue-800/50 focus:outline-solid focus:outline-transparent dark:text-white dark:placeholder:text-white/50"
            />
          </div>
          <div className="flex items-center">
            <Button
              type="button"
              intent="filter"
              data-button-role="mobile-filter-open"
              onClick={handleFilterClick}
            >
              <svg
                viewBox="0 0 20 20"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                className="dark:fill-white"
                aria-hidden="true"
              >
                <path
                  d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                  fill="#6E8098"
                  fillRule="nonzero"
                />
              </svg>
            </Button>
            <Button
              type="submit"
              intent="primary"
              data-button-role="mobile-search"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                  fill="#5964E0"
                  fillRule="nonzero"
                />
              </svg>
            </Button>
          </div>
        </form>
      </div>
      {isFilterModalOpen ? <MobileSearchModal /> : null}
    </>
  )
}
