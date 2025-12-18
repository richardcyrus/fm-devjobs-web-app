/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react'
import Button from '../../../components/Button'

import { ThemeContext } from '../../../context/ThemeContext'
import { getLayout } from '../../../layouts/JobDetailLayout'
import { connectToDatabase } from '../../../util/mongodb'

export const getStaticPaths = async () => {
  const fields = {
    _id: 1,
    company: 1,
  }

  const { db } = await connectToDatabase()

  const jobs = await db.collection('jobs').find({}).project(fields).toArray()

  const paths = jobs.map((job) => ({
    params: {
      company: job.company.toLowerCase().replace(/\s+/g, ''),
      id: job._id.toString(),
    },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const { db } = await connectToDatabase()

  const job = await db
    .collection('jobs')
    .findOne({ _id: parseInt(context.params.id, 10) })

  if (!job) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      job: JSON.parse(JSON.stringify(job)),
    },
  }
}

const JobDetail = ({ job }) => {
  const themeCtx = useContext(ThemeContext)

  return (
    <>
      <div className="job-detail__container">
        <section className="job-detail__company">
          <div className="job-detail__company-logo">
            <img src={job.logo} alt={`${job.company} logo`} />
          </div>
          <div className="job-detail__company-info">
            <h2 className="job-detail__company-name">{job.company}</h2>
            <p>{`${job.company.toLowerCase().replace(/\s+/g, '')}.com`}</p>
          </div>
          <div className="job-detail__company-cta">
            <Button
              as="a"
              href={job.website}
              variant="secondary"
              data-button-role="company-site"
            >
              Company Site
            </Button>
          </div>
        </section>
        <section className="job-info">
          <div className="job-meta">
            <div className="job-info__meta">
              <p className="postedAt">{job.postedAt}</p>
              <p className="contract">{job.contract}</p>
              <h1 className="position">{job.position}</h1>
              <h4 className="location">{job.location}</h4>
            </div>
            <div className="job-info__cta">
              <Button
                as="a"
                href={job.apply}
                variant="primary"
                data-button-role="apply-now"
              >
                Apply Now
              </Button>
            </div>
          </div>
          <div className="job-description">
            <p>{job.description}</p>
            <h3>Requirements</h3>
            <p>{job.requirements.content}</p>
            <ul>
              {job.requirements.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>What You Will Do</h3>
            <p>{job.role.content}</p>
            <ol>
              {job.role.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </section>
      </div>
      <div className="job-detail__footer">
        <div className="wrapper">
          <div className="job-meta">
            <h3>{job.position}</h3>
            <p>{job.company}</p>
          </div>
          <Button
            as="a"
            variant="primary"
            href={job.apply}
            data-button-role="apply-now"
          >
            Apply Now
          </Button>
        </div>
      </div>

      <style jsx global>{`
        #main-content {
          .button[data-button-role='company-site'] {
            margin-top: 1.5em;
            min-width: 147px;

            @media screen and (min-width: 48em) {
              margin-top: 0;
            }
          }

          .button[data-button-role='apply-now'] {
            width: 100%;

            @media screen and (min-width: 48em) {
              width: auto;
              align-self: center;
            }
          }
        }
      `}</style>

      <style jsx>{`
        .job-detail__container {
          display: flex;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
          width: 327px;

          @media screen and (min-width: 48em) {
            align-items: center;
            justify-content: center;
            width: 689px;
          }

          @media screen and (min-width: 75em) {
            width: 730px;
          }
        }

        .job-detail {
          &__company {
            align-items: center;
            background-color: ${themeCtx.theme.cardBackgroundColor};
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: auto;
            margin-right: auto;
            margin-top: -1em;
            padding-bottom: 2em;
            padding-top: 3.0625em;
            position: relative;
            width: 327px;

            @media screen and (min-width: 48em) {
              display: grid;
              grid-template-columns: 140px 1fr 1fr;
              height: 140px;
              margin-top: -2em;
              padding: 0;
              width: 689px;
            }

            @media screen and (min-width: 75em) {
              width: 730px;
            }
          }

          &__company-name {
            color: ${themeCtx.theme.headingTextColor};

            & + p {
              margin-top: 0.5em;
            }
          }

          &__company-logo {
            align-items: center;
            background-color: ${job.logoBackground};
            border-radius: 15px;
            display: flex;
            height: 50px;
            justify-content: center;
            left: 138.5px;
            position: absolute;
            top: -25px;
            width: 50px;

            img {
              align-self: center;
              margin: auto;
            }

            @media screen and (min-width: 48em) {
              border-radius: 0 0 0 6px;
              grid-column: 1 / 2;
              height: 140px;
              position: static;
              width: 140px;

              img {
                width: 58%;
              }
            }
          }

          &__company-info {
            text-align: center;

            @media screen and (min-width: 48em) {
              grid-column: 2 / 3;
              padding-left: 2.5em;
              text-align: left;
            }
          }

          &__company-cta {
            @media screen and (min-width: 48em) {
              grid-column: 3 / -1;
              margin-left: auto;
              padding-right: 2.5em;
            }
          }
        }

        .job-info {
          background-color: ${themeCtx.theme.cardBackgroundColor};
          border-radius: 6px;
          margin-top: 1.5em;
          padding-bottom: 2.5em;
          padding-left: 1.5em;
          padding-right: 1.5em;
          padding-top: 2.5em;

          @media screen and (min-width: 48em) {
            margin-top: 2em;
            padding-bottom: 3em;
            padding-left: 3em;
            padding-right: 3em;
            padding-top: 3em;
          }

          .job-meta {
            .postedAt,
            .contract {
              display: inline-flex;
            }

            .postedAt::after {
              content: '${'\\2022'}';
              padding: 0 0.75em;
            }

            .position,
            .location {
              margin-top: 0.5rem;
            }

            .position {
              color: ${themeCtx.theme.headingTextColor};
            }

            .job-info__cta {
              margin-top: 3.125em;
            }

            @media screen and (min-width: 48em) {
              align-items: center;
              display: flex;
              justify-content: space-between;

              .job-info__cta {
                margin-top: 0;
              }
            }
          }
        }

        .job-description {
          margin-top: 2em;

          @media screen and (min-width: 48em) {
            margin-top: 2.5em;
          }

          h3 {
            color: ${themeCtx.theme.headingTextColor};
            margin-top: 2.5em;

            & + p {
              margin-top: 1.5em;
            }
          }

          ul,
          ol {
            margin-block-start: 2em;
            padding-inline-start: 1em;

            @media screen and (min-width: 48em) {
              margin-block-start: 1.5em;
            }
          }

          ol {
            list-style-type: not-dotted-decimal;
          }

          li {
            margin-block-start: 0.5em;
            padding-left: 1.5em;
          }

          li::marker {
            color: var(--color-primary-violet);
            font-weight: var(--font-weight-bold);
          }
        }

        .job-detail__footer {
          background-color: ${themeCtx.theme.cardBackgroundColor};
          margin-top: 4em;
          padding: 1.5em;

          @media screen and (min-width: 48em) {
            margin-top: 3.3125em;
            padding: 1.5em 0;

            .wrapper {
              align-items: center;
              display: flex;
              justify-content: space-between;
              margin: 0 auto;
              width: 678px;
            }
          }

          @media screen and (min-width: 75em) {
            margin-top: 5em;

            .wrapper {
              width: 730px;
            }
          }

          .job-meta {
            display: none;

            @media screen and (min-width: 48em) {
              display: initial;

              h3 {
                color: ${themeCtx.theme.headingTextColor};
              }

              p {
                margin-top: 0.5em;
              }
            }
          }
        }
      `}</style>
    </>
  )
}

JobDetail.getLayout = getLayout

export default JobDetail
