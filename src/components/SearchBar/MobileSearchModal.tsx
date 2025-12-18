import { Button } from '@/components/Button/Button'
import '@/components/SearchBar/searchbar.css'

export function MobileSearchModal() {
  return (
    <div className="fixed left-0 top-0 z-20 flex h-screen w-screen flex-col overflow-x-hidden bg-black/50">
      <div className="absolute left-6 top-[225px] h-[217px] w-[327px] rounded-md bg-white px-6 dark:bg-blue-800">
        <div className="flex flex-col items-center">
          <div className="flex h-[72px] w-full items-center gap-x-4 border-b border-solid border-blue-800/20 placeholder-shown:text-blue-800/50">
            <span>
              <svg
                viewBox="0 0 17 24"
                width="17"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
                  fill="#5964E0"
                  fillRule="nonzero"
                />
              </svg>
            </span>
            <input
              type="text"
              id="location"
              placeholder="Filter by location&hellip;"
              form="mobile-search"
              className="border-none bg-transparent text-blue-800 placeholder-shown:text-blue-800/50 focus:outline-solid focus:outline-transparent dark:text-white"
            />
          </div>
        </div>
        <div className="flex h-[72px] w-full items-center gap-x-4 placeholder-shown:text-blue-800/50">
          <label
            htmlFor="contract"
            className="grid grid-cols-checkbox gap-x-4 font-bold text-blue-800 dark:text-white"
          >
            <span className="checkbox__input grid [grid-template-areas:'checkbox']">
              <input
                type="checkbox"
                id="contract"
                form="mobile-search"
                value="Full Time"
                className="h-6 w-6 opacity-0 [grid-area:checkbox]"
              />
              <span className="checkbox__control inline-grid h-6 w-6 place-items-center rounded-[0.1875rem] bg-blue-800/10 [grid-area:checkbox] dark:bg-white/10">
                <svg
                  viewBox="0 0 15 12"
                  width="15"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6.57l3.572 3.572L13.714 1"
                    stroke="#FFF"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </span>
            <span>
              Full Time<span> Only</span>
            </span>
          </label>
        </div>
        <Button
          type="submit"
          intent="primary"
          form="mobile-search"
          disabled={false}
          block={false}
          data-button-role="mobile-modal-search"
        >
          Search
        </Button>
      </div>
    </div>
  )
}
