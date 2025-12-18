import { Button } from '@/components/Button/Button'
import './searchbar.css'

export function SearchBar({ onSubmit }: { onSubmit: () => void }) {
  return (
    <div className="mt-[-40px] h-20 w-[327px] rounded-md bg-white md:w-[689px] lg:w-[1110px] dark:bg-blue-800">
      <form
        className="h-full md:flex md:items-center md:justify-around"
        onSubmit={onSubmit}
      >
        <div className="h-full md:flex md:w-[222px] md:items-center md:justify-start md:gap-x-4 md:border-r md:border-r-gray-500/20 md:pe-5 md:ps-6 lg:w-[463px] lg:px-8">
          <span>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                fill="#5964E0"
                fillRule="nonzero"
              />
            </svg>
          </span>
          <input
            type="text"
            id="position"
            placeholder="Filter by title&hellip;"
            className="border-0 border-none bg-transparent text-blue-800 placeholder:text-blue-800/50 focus:outline-hidden focus:outline-solid focus:outline-transparent md:w-[14ch] lg:w-[50ch] dark:text-white dark:placeholder:text-white/50"
          />
        </div>
        <div className="h-full md:flex md:w-[213px] md:items-center md:justify-start md:gap-x-4 md:border-r md:border-r-gray-500/20 md:pe-5 md:ps-6 lg:w-[300px] lg:px-8">
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
            className="border-0 border-none bg-transparent text-blue-800 placeholder:text-blue-800/50 focus:outline-hidden focus:outline-solid focus:outline-transparent md:w-[14ch] lg:w-[50ch] dark:text-white dark:placeholder:text-white/50"
          />
        </div>
        <div className="h-full md:flex md:items-center md:justify-start md:gap-x-4 md:pe-0 md:ps-5 lg:pe-0 lg:ps-8">
          <label
            htmlFor="contract"
            className="contract-label grid grid-cols-checkbox gap-x-4 font-bold text-blue-800 dark:text-white"
          >
            <span className="checkbox__input grid [grid-template-areas:'checkbox']">
              <input
                type="checkbox"
                id="contract"
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
            <span className="radio__label justify-items-center">
              Full Time<span className="sm:max-lg:hidden"> Only</span>
            </span>
          </label>
        </div>
        <Button type="submit" intent="primary" data-button-role="search">
          Search
        </Button>
      </form>
    </div>
  )
}
