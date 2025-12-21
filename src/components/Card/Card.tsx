/* eslint-disable @next/next/no-img-element */
import { Link } from '@tanstack/react-router'

export function Card({ job }) {
  return (
    <div className="card relative mx-auto mt-[3.0625em] mb-0 w-[327px] rounded-md bg-white px-[2em] pt-[3.0625em] pb-[2em] md:mx-0 md:mt-[4.0625em] md:w-[339px] lg:w-[350px] dark:bg-blue-800">
      <div
        className="card-image absolute top-[-25px] flex h-[50px] w-[50px] items-center justify-center rounded-[15px]"
        style={{ backgroundColor: `${job.logoBackground}` }}
      >
        <img
          src={job.logo}
          alt={`${job.company} logo`}
          className="m-auto self-center"
        />
      </div>
      <div className="card-body">
        <p className="postedAt inline-flex after:px-[.75em] after:py-0 after:content-['\2022']">
          {job.postedAt}
        </p>
        <p className="contract inline-flex">{job.contract}</p>
        <h3 className="position mt-[.8125em]">
          <Link
            to="/details/$company/$jobId"
            params={{
              company: job.company.toLowerCase().replace(/\s+/g, ''),
              jobId: job.id,
            }}
            className="text-blue-800 visited:text-blue-800 hover:text-gray-500 active:text-gray-500 dark:text-white dark:visited:text-white dark:hover:text-gray-500 dark:active:text-gray-500"
          >
            {job.position}
          </Link>
        </h3>
        <p className="company mt-[.8125em]">{job.company}</p>
        <h4 className="location mt-[2.5em]">{job.location}</h4>
      </div>
    </div>
  )
}
