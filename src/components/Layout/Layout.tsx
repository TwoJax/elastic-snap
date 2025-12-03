import type { PropsWithChildren } from 'react'
import React from 'react'

import Navbar from '@/components/ui/Navbar'

import styles from './Layout.module.css'

const Layout: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />

      <main className={styles.layout} {...rest}>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  )
}

export default Layout
