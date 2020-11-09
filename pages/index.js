import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, my name is Marc and I love building stuff for the web!</p>
        <p>
          (This is a sample website - you'll be building a site like this one on{' '} <a href="/https://nextjs.org/learn">our next tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
