/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react'

import Link from 'next/link'
import { ThemeContext } from '../context/ThemeContext'

const Card = ({ job }) => {
  const themeCtx = useContext(ThemeContext)

  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={job.logo} alt={`${job.company} logo`} />
        </div>
        <div className="card-body">
          <p className="postedAt">{job.postedAt}</p>
          <p className="contract">{job.contract}</p>
          <h3 className="position">
            <Link
              href="/details/[company]/[id]"
              as={`/details/${job.company.toLowerCase().replace(/\s+/g, '')}/${
                job._id
              }`}
            >
              <a>{job.position}</a>
            </Link>
          </h3>
          <p className="company">{job.company}</p>
          <h4 className="location">{job.location}</h4>
        </div>
      </div>
      <style jsx>{`
        .card {
          background-color: ${themeCtx.theme.cardBackgroundColor};
          border-radius: 6px;
          margin-bottom: 0;
          margin-left: auto;
          margin-right: auto;
          margin-top: 3.0625em;
          padding: 3.0625em 2em 2em;
          position: relative;
          width: 327px;

          @media screen and (min-width: 48em) {
            margin-left: 0;
            margin-right: 0;
            margin-top: 4.0625em;
            width: 339px;
          }

          @media screen and (min-width: 75em) {
            width: 350px;
          }
        }

        .card-image {
          align-items: center;
          background-color: ${job.logoBackground};
          border-radius: 15px;
          display: flex;
          height: 50px;
          justify-content: center;
          position: absolute;
          top: -25px;
          width: 50px;

          img {
            align-self: center;
            margin: auto;
          }
        }

        .postedAt,
        .contract {
          display: inline-flex;
        }

        .postedAt::after {
          content: '${'\\2022'}';
          padding: 0 0.75em;
        }

        .position a {
          color: ${themeCtx.theme.headingTextColor};
          text-decoration: none;

          &:visited {
            color: ${themeCtx.theme.headingTextColor};
          }

          &:hover,
          &:active {
            color: ${themeCtx.theme.headingHoverColor};
          }
        }

        .position,
        .company {
          margin-top: 0.8125em;
        }

        .location {
          margin-top: 2.5em;
        }
      `}</style>
    </>
  )
}

export default Card
