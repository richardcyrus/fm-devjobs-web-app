import '@/components/SearchBar/searchbar.css'
import { withForm } from '@/hooks/searchBarForm'

export const MobileSearchModal = withForm({
  render: function Render({ form }) {
    return (
      <div className="fixed left-0 top-0 z-20 flex h-screen w-screen flex-col overflow-x-hidden bg-black/50">
        <div className="absolute left-6 top-[225px] h-[217px] w-[327px] rounded-md bg-white px-6 dark:bg-blue-800">
          <div className="flex flex-col items-center">
            <div className="flex h-[72px] w-full items-center gap-x-4 border-b border-solid border-blue-800/20 placeholder-shown:text-blue-800/50 dark:border-b-gray-500/20">
              <span>
                <svg
                  viewBox="0 0 17 24"
                  width="17"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
                    fill="#5964E0"
                    fillRule="nonzero"
                  />
                </svg>
              </span>
              <form.AppField name="location">
                {(field) => (
                  <field.TextField
                    placeholder="Filter by location&hellip;"
                    formId="mobile-search"
                    className="border-none bg-transparent text-blue-800 placeholder-shown:text-blue-800/50 focus:outline-solid focus:outline-transparent dark:text-white dark:placeholder:text-white/50"
                  />
                )}
              </form.AppField>
            </div>
          </div>
          <div className="flex h-[72px] w-full items-center gap-x-4 placeholder-shown:text-blue-800/50">
            <form.AppField name="contract">
              {(field) => (
                <field.CheckboxField isMobile={true} formId="mobile-search" />
              )}
            </form.AppField>
          </div>
          <form.AppForm>
            <form.SearchButton
              buttonRole="mobile-modal-search"
              buttonIntent="primary"
              formId="mobile-search"
              onClick={() => {
                form.handleSubmit()
              }}
            />
          </form.AppForm>
        </div>
      </div>
    )
  },
})
