import React from 'react'
import TopSlider from '../components/home/TopSlider'
import { Helmet } from "react-helmet";

const meta = {
  title: 'The Key Mind',
  description: 'I am a description, and I can create multiple tags',
  // canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags'
    },
    robots: 'noindex, nofollow', // Add the robots meta tag
    googlebot: 'noindex, nofollow' // Add the google bot meta tag
  }
};

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {/* <link rel="canonical" href={meta.canonical} /> */}
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add googlebot meta tag */}
      </Helmet>

      <TopSlider/>
    </div>
  )
}

export default Home
