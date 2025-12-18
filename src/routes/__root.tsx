import { TanStackDevtools } from '@tanstack/react-devtools'
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import { Header } from '@/components/Header/Header'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      },
      {
        title: 'Devjobs Web App | Frontend Mentor',
      },
      {
        name: 'description',
        content:
          'This is a solution to the Devjobs web app challenge on Frontend Mentor',
      },
    ],
    links: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="mx-auto my-0 max-w-[375px] md:max-w-[768px] lg:max-w-full">
          <Header />
          <main
            id="main-content"
            className="mx-auto my-auto flex max-w-[327px] flex-col md:max-w-[689px] md:items-center md:justify-center lg:max-w-[1110px]"
          >
            {children}
          </main>
        </div>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
