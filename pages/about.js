import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function About() {
  return (
    <Layout title="About me">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
      <img
        src="/images/profile.jpg"
        className={`${utilStyles.aboutImage} ${utilStyles.borderCircle}`}
        alt="Profile picture"
      /></div>
      <div>
      Some text about me
      </div>
    </Layout>
  )
}
