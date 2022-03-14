import { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Navbar } from '../Navbar';

import styles from './MainLayout.module.css'

export const MainLayout: FC = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - NovaCorel</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="novacorel, themes, apps, webapps, nativeapps, web"
        />
      </Head>

      <Navbar />

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
