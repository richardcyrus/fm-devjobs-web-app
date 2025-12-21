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
      <div className="job-detail__container mx-auto flex w-[327px] flex-col md:w-[689px] md:items-center md:justify-center lg:w-[730px]">
        <section className="job-detail__company relative mx-auto mt-[-1rem] flex w-[327px] flex-col items-center justify-center rounded-[6px] bg-white pt-[3.0625rem] pb-8 md:mt-[-2rem] md:grid md:h-[140px] md:w-[689px] md:grid-cols-[140px_1fr_1fr] md:p-0 lg:w-[730px] dark:bg-blue-800">
          <div
            className="job-detail__company-logo absolute top-[-25px] left-[138.5px] flex h-[50px] w-[50px] items-center justify-center rounded-[15px] md:static md:col-[1_/_2] md:h-[140px] md:w-[140px] md:rounded-ss-none md:rounded-se-none md:rounded-ee-none md:rounded-es-[6px]"
            style={{ backgroundColor: `${job.logoBackground}` }}
          >
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="m-auto self-center md:w-[58%]"
            />
          </div>
          <div className="job-detail__company-info text-center md:col-[2_/_3] md:ps-10 md:text-left">
            <h2 className="job-detail__company-name text-blue-800 dark:text-white">
              {job.company}
            </h2>
            <p className="mt-2">{`${job.company.toLowerCase().replace(/\s+/g, '')}.com`}</p>
          </div>
          <div className="job-detail__company-cta md:col-[3_/_-1] md:ms-auto md:pe-10">
            <Link
              to={job.website}
              className="button mt-6 inline-flex min-h-12 min-w-[148px] cursor-pointer items-center justify-center self-start rounded-[5px] border-none bg-violet-100/10 p-0 text-center font-sans font-bold text-violet-300 hover:bg-violet-300 focus:shadow-button-focus focus:outline-transparent focus:outline-solid md:mt-0 dark:text-white"
            >
              Company Site
            </Link>
          </div>
        </section>
        <section className="job-info mt-6 rounded-[6px] bg-white px-6 py-10 md:mt-8 md:p-12 dark:bg-blue-800">
          <div className="job-meta md:flex md:items-center md:justify-between">
            <div className="job-info__meta">
              <p className="postedAt inline-flex after:px-[.75em] after:py-0 after:content-['\2022']">
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
                className="button inline-flex min-h-12 w-full min-w-[141px] cursor-pointer items-center justify-center self-start rounded-[5px] border-none bg-violet-300 p-0 text-center font-sans font-bold text-white hover:bg-violet-100 focus:shadow-button-focus focus:outline-transparent focus:outline-solid md:w-auto"
              >
                Apply Now
              </Link>
            </div>
          </div>
          <div className="job-description mt-8 md:mt-10">
            <p>{job.description}</p>
            <h3 className="mt-10 text-blue-800 dark:text-white">
              Requirements
            </h3>
            <p className="mt-6">{job.requirements.content}</p>
            <ul className="mt-8 list-disc ps-4 md:mt-6">
              {job.requirements.items.map((item, index) => (
                <li
                  key={index}
                  className="mt-2 ps-6 marker:font-bold marker:text-violet-300"
                >
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 text-blue-800 dark:text-white">
              What You Will Do
            </h3>
            <p className="mt-6">{job.role.content}</p>
            <ol className="mt-8 list-[not-dotted-decimal] ps-4 md:mt-6">
              {job.role.items.map((item, index) => (
                <li
                  key={index}
                  className="mt-2 ps-6 marker:font-bold marker:text-violet-300"
                >
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
      <div className="job-detail__footer mt-16 bg-white p-6 md:mt-[3.125em] md:px-0 md:py-6 lg:mt-20 dark:bg-blue-800">
        <div className="wrapper md:mx-auto md:my-0 md:flex md:w-[678px] md:items-center md:justify-between lg:w-[730px]">
          <div className="job-meta hidden md:block">
            <h3 className="text-blue-800 dark:text-white">{job.position}</h3>
            <p className="mt-2">{job.company}</p>
          </div>
          <Link
            to={job.apply}
            className="button inline-flex min-h-12 w-full min-w-[141px] cursor-pointer items-center justify-center self-start rounded-[5px] border-none bg-violet-300 p-0 text-center font-sans font-bold text-white hover:bg-violet-100 focus:shadow-button-focus focus:outline-transparent focus:outline-solid md:w-auto"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </>
  )
}
