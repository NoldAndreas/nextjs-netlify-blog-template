import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function about() {
  return (
    <Layout title="About me">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.container0}>
        <div className={utilStyles.container1a}>
        <div className={utilStyles.verticalCenter}>
          <img
            src="/images/profile.jpg"
            className={`${utilStyles.aboutImage} ${utilStyles.borderCircle}`}
            alt="Profile picture"
          />
        </div>
        </div>
        <div className={utilStyles.container1b}>
              <p>I am an applied mathematician intrigued by the complexity and beauty of
              biological self-regulating and maintenance mechanisms. </p>

              <p>I apply data analysis & computational modeling to problems from disease progression to neuronal network dynamics.</p>
              <a href="mailto:andreasnold@me.com">Contact </a>
        </div>
      </div>
    </Layout>
  )
}
