import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Header from "./header"
import Footer from "./footer"

const name = 'Andreas'
export const siteTitle = 'Andreas Nold'

export default function Layout({title, children, home }) {
  return (
    <div className={styles.viewport}>
      <Head>
        <meta
          name="description"
          content="Andreas projects"
        />
      </Head>
      <Header/>
      <main className={styles.container}>
      <h2>{title}</h2>
      {children}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer/>
      </main>
    </div>
  )
}

/*<meta
  property="og:image"
  content={`https://og-image.now.sh/${encodeURI(
    siteTitle
  )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
/>
<meta name="og:title" content={siteTitle} />
<meta name="twitter:card" content="summary_large_image" />
<link rel="icon" href="/favicon.ico" />
*/

/*
<header className={styles.header}>
  {home ? (
    <>
      <img
        src="/images/profile.jpg"
        className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
        alt={name}
      />
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
    </>
  ) : (
    <>
      <Link href="/">
        <a>
          <img
            src="/images/profile.jpg"
            className={`${styles.headerImage} ${utilStyles.borderCircle}`}
            alt={name}
          />
        </a>
      </Link>
      <h2 className={utilStyles.headingLg}>
        <Link href="/">
          <a className={utilStyles.colorInherit}>{name}</a>
        </Link>
      </h2>
    </>
  )}
</header>*/
