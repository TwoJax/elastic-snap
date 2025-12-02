import type { PropsWithChildren } from 'react'
import React from 'react'

import ElasticLogo from '@/assets/images/elastic-logo.png'

import styles from './Layout.module.css'

const Layout: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <>
      <nav className="relative bg-elastic-ink">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  src={ElasticLogo}
                  alt="Your Company"
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className={styles.layout} {...rest}>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  )
}

export default Layout
