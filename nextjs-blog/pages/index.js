import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Nulla pharetra diam sit amet nisl suscipit adipiscing. Metus dictum at tempor commodo ullamcorper a lacus. Nibh sed pulvinar proin gravida hendrerit lectus a. In vitae turpis massa sed elementum tempus egestas sed. Auctor urna nunc id cursus metus aliquam eleifend mi. Dolor purus non enim praesent elementum facilisis. Sed vulputate odio ut enim blandit volutpat maecenas. Tellus elementum sagittis vitae et leo.npm install gray-matter</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}