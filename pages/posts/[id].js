import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={"text-center " + utilStyles.headingXl}>{postData.title}</h1>
        <div className={"mb-4 text-center " + utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>

        {postData.videoSrc && (
          <video 
            playsInline
            muted
            loop
            autoPlay
            width="100%"
            controlsList="nodownload"
          >
            <source src={ postData.videoSrc } type="video/mp4" />
          </video>
        )}

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
