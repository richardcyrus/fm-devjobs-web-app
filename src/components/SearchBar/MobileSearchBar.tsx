import { Button } from '@/components/Button/Button'
import { MobileSearchModal } from '@/components/SearchBar/MobileSearchModal'
import { searchJobs } from '@/data/data'
import { withForm } from '@/hooks/searchBarForm'

export const MobileSearchBar = withForm({
  props: {
    handleFilterClick: () => {},
    isFilterModalOpen: false,
  },
  render: function Render({ form, handleFilterClick, isFilterModalOpen }) {
    return (
      <>
        <div className="mt-[-40px] h-20 w-[327px] rounded-md bg-white ps-6 pe-4 dark:bg-blue-800">
          <form
            id="mobile-search"
            action={searchJobs.url}
            method="post"
            encType={'multipart/form-data'}
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
            className="flex h-full items-center"
          >
            <div className="flex h-full items-center">
              <form.AppField name="position">
                {(field) => (
                  <field.TextField
                    placeholder="Filter by title&hellip;"
                    className="w-[19ch] border-none bg-transparent text-blue-800 placeholder-shown:text-blue-800/50 focus:outline-transparent focus:outline-solid dark:text-white dark:placeholder:text-white/50"
                    formId="mobile-search"
                  />
                )}
              </form.AppField>
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
              <form.AppForm>
                <form.SearchButton
                  buttonRole="mobile-search"
                  buttonIntent="primary"
                  isMobile={true}
                  formId="mobile-search"
                  onClick={() => {
                    form.handleSubmit()
                  }}
                />
              </form.AppForm>
            </div>
          </form>
        </div>
        {isFilterModalOpen ? <MobileSearchModal form={form} /> : null}
      </>
    )
  },
})
