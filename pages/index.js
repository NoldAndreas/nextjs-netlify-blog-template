import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

import Link from 'next/link'
import Date from '../components/date'
import My_card from "../components/My_card"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{siteTitle}</title>
      </Head>
      <div className="card-columns">
        <My_card title="Contact lines" src="/images/contactline.png" href="./ContactLine_BridgingScales"/>
        <My_card title="Working memory" src="/images/PRG1_Model.jpeg"  href="./Project_PRG1"/>
      </div>
    </Layout>
  )
}


/*
<My_card title="Book reviews" src="/images/books.png" href="./Books"/>
  <section className={utilStyles.headingMd}></section>
  <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    <h2 className={utilStyles.headingLg}>Blog</h2>
    <ul className={utilStyles.list}>
      {allPostsData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
      ))}
    </ul>
  </section>*/
