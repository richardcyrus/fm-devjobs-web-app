// biome-ignore-all lint/suspicious: index used in specific maps since they won't change.

import { createFileRoute, Link } from '@tanstack/react-router'
import { getJobById } from '@/data/data'

export const Route = createFileRoute('/details/$company/$jobId')({
  loader: async ({
    params,
  }: {
    params: { company: string; jobId: number }
  }) => {
    return {
      job: await getJobById({ data: { jobId: params.jobId } }),
    }
  },
  component: JobDetail,
})

function JobDetail() {
  const { job } = Route.useLoaderData()
  return (
    <>
      <div className="job-detail__container flex flex-col mx-auto w-[327px] md:items-center md:justify-center md:w-[689px] lg:w-[730px]">
        <section className="job-detail__company items-center bg-white dark:bg-blue-800 rounded-[6px] flex flex-col justify-center mx-auto mt-[-1rem] pb-8 pt-[3.0625rem] relative w-[327px] md:grid md:grid-cols-[140px_1fr_1fr] md:h-[140px] md:mt-[-2rem] md:p-0 md:w-[689px] lg:w-[730px]">
          <div
            className="job-detail__company-logo items-center rounded-[15px] flex h-[50px] justify-center absolute top-[-25px] w-[50px] left-[138.5px] md:rounded-es-[6px] md:rounded-ss-none md:rounded-se-none md:rounded-ee-none md:col-[1_/_2] md:h-[140px] md:static md:w-[140px]"
            style={{ backgroundColor: `${job.logoBackground}` }}
          >
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="self-center m-auto md:w-[58%]"
            />
          </div>
          <div className="job-detail__company-info text-center md:col-[2_/_3] md:ps-10 md:text-left">
            <h2 className="job-detail__company-name text-blue-800 dark:text-white">
              {job.company}
            </h2>
            <p className="mt-2">{`${job.company.toLowerCase().replace(/\s+/g, '')}.com`}</p>
          </div>
          <div className="job-detail__company-cta md:ms-auto md:pe-10 md:col-[3_/_-1]">
            <Link
              to={job.website}
              className="mt-6 md:mt-0 text-violet-300 dark:text-white bg-violet-100/10 hover:bg-violet-300 button inline-flex cursor-pointer items-center justify-center self-start rounded-[5px] border-none p-0 font-sans font-bold min-h-12 min-w-[148px] text-center focus:outline-solid focus:outline-transparent focus:shadow-button-focus"
            >
              Company Site
            </Link>
          </div>
        </section>
        <section className="job-info bg-white dark:bg-blue-800 rounded-[6px] mt-6 py-10 px-6 md:mt-8 md:p-12">
          <div className="job-meta md:items-center md:flex md:justify-between">
            <div className="job-info__meta">
              <p className="postedAt inline-flex after:py-0 after:px-[.75em] after:content-['\2022']">
                {job.postedAt}
              </p>
              <p className="contract inline-flex">{job.contract}</p>
              <h1 className="position mt-2 text-blue-800 dark:text-white">
                {job.position}
              </h1>
              <h4 className="location mt-2">{job.location}</h4>
            </div>
            <div className="job-info__cta mt-[3.125rem] md:mt-0">
              <Link
                to={job.apply}
                className="text-white bg-violet-300 w-full md:w-auto hover:bg-violet-100 button inline-flex cursor-pointer items-center justify-center self-start rounded-[5px] border-none p-0 font-sans font-bold min-h-12 min-w-[141px] text-center focus:outline-solid focus:outline-transparent focus:shadow-button-focus"
              >
                Apply Now
              </Link>
            </div>
          </div>
          <div className="job-description mt-8 md:mt-10">
            <p>{job.description}</p>
            <h3 className="text-blue-800 dark:text-white mt-10">
              Requirements
            </h3>
            <p className="mt-6">{job.requirements.content}</p>
            <ul className="mt-8 ps-4 md:mt-6 list-disc">
              {job.requirements.items.map((item, index) => (
                <li
                  key={index}
                  className="mt-2 ps-6 marker:text-violet-300 marker:font-bold"
                >
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="text-blue-800 dark:text-white mt-10">
              What You Will Do
            </h3>
            <p className="mt-6">{job.role.content}</p>
            <ol className="mt-8 ps-4 md:mt-6 list-[not-dotted-decimal]">
              {job.role.items.map((item, index) => (
                <li
                  key={index}
                  className="mt-2 ps-6 marker:text-violet-300 marker:font-bold"
                >
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
      <div className="job-detail__footer bg-white dark:bg-blue-800 mt-16 p-6 md:mt-[3.125em] md:py-6 md:px-0 lg:mt-20">
        <div className="wrapper md:items-center md:flex md:justify-between md:my-0 md:mx-auto md:w-[678px] lg:w-[730px]">
          <div className="job-meta hidden md:block">
            <h3 className="text-blue-800 dark:text-white">{job.position}</h3>
            <p className="mt-2">{job.company}</p>
          </div>
          <Link
            to={job.apply}
            className="text-white bg-violet-300 w-full md:w-auto hover:bg-violet-100 button inline-flex cursor-pointer items-center justify-center self-start rounded-[5px] border-none p-0 font-sans font-bold min-h-12 min-w-[141px] text-center focus:outline-solid focus:outline-transparent focus:shadow-button-focus"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </>
  )
}
